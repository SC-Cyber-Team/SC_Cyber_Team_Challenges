"""Verify puzzle evidence using independent standard-library transformations."""
import base64,codecs,gzip,hashlib,json,re,unittest
from datetime import datetime,timezone
from pathlib import Path
from html import unescape
from html.parser import HTMLParser
from urllib.parse import unquote,urlsplit
ROOT=Path(__file__).resolve().parents[1]
DATA=json.loads((ROOT/'assets/challenges.js').read_text().split('const CHALLENGES = ',1)[1].rsplit(';',1)[0])
C={c['id']:c for c in DATA}
def evidence(id): return C[id]['evidence']
def norm(s):return re.sub(r'[.!?]+$','',re.sub(r'\s+',' ',s.strip().lower()))
class Tests(unittest.TestCase):
 def check(self,id,result):self.assertIn(norm(result),[norm(a) for a in C[id]['answers']],id)
 def test_catalogue(self):
  self.assertEqual(len(DATA),25);self.assertEqual(len(C),25)
  self.assertEqual(sum(c['original'] for c in DATA),6)
  self.assertEqual(sum(c['points'] for c in DATA),4100)
  for c in DATA:
   self.assertEqual(len(c['hints']),3);self.assertTrue(c['answers']);self.assertTrue(c['solution']);self.assertTrue(c['operations']);self.assertIn('Use CyberChef',c['brief'])
 def test_evidence(self):
  self.check('getting-ready',''.join(chr((ord(x)-ord('A')-3)%26+ord('A')) if x.isupper() else chr((ord(x)-ord('a')-3)%26+ord('a')) if x.islower() else x for x in evidence('getting-ready')))
  self.check('round1',''.join(chr(int(x,2)) for x in evidence('round1').split()))
  self.check('round2',base64.b64decode(evidence('round2')).decode())
  self.check('round4',bytes.fromhex(evidence('round4')).decode())
  self.check('round5',''.join(chr(int(x,32)) for x in evidence('round5').split()))
  self.check('hex-helpdesk',bytes.fromhex(evidence('hex-helpdesk')).decode())
  self.check('rot13',codecs.decode(evidence('rot13'),'rot13'))
  self.check('reverse',evidence('reverse')[::-1])
  self.check('url',unquote(evidence('url')))
  morse={'---':'O','.--.':'P','.':'E','-.':'N','...':'S','.-':'A','--':'M'}
  self.check('morse',' '.join(''.join(morse[x] for x in w.split()) for w in evidence('morse').split('/')))
  self.check('decimal',''.join(chr(int(x)) for x in evidence('decimal').split()))
  candidate=next(x for x in ['rabbit','fox','owl'] if hashlib.sha256(x.encode()).hexdigest()==evidence('sha256'))
  self.check('sha256',hashlib.sha256((candidate+':vault-73').encode()).hexdigest())
  self.check('double-base64',base64.b64decode(base64.b64decode(evidence('double-base64'))).decode())
  self.check('hex-base64',base64.b64decode(bytes.fromhex(evidence('hex-base64'))).decode())
  self.check('base64-rot',codecs.decode(base64.b64decode(evidence('base64-rot')).decode(),'rot13'))
  self.check('html',unescape(evidence('html')))
  self.check('base32',base64.b32decode(evidence('base32')).decode())
  self.check('xor',bytes(x^0x2a for x in bytes.fromhex(evidence('xor'))).decode())
  self.check('gzip',gzip.decompress(base64.b64decode(evidence('gzip'))).decode())
  self.check('timestamp',datetime.fromtimestamp(int(evidence('timestamp')),timezone.utc).strftime('%Y-%m-%d'))
  self.check('ioc',base64.b64decode(evidence('ioc')).decode().replace('hxxps','https').replace('[.]','.'))
  self.check('quishing',unquote(base64.b64decode(evidence('quishing')).decode()))
  self.check('final-recipe',codecs.decode(bytes.fromhex(base64.b64decode(evidence('final-recipe')).decode()).decode(),'rot13'))
 def test_aes(self):
  try:from cryptography.hazmat.primitives.ciphers import Cipher,algorithms,modes
  except ImportError:self.skipTest('Install cryptography for AES verification')
  from cryptography.hazmat.primitives.padding import PKCS7
  d=Cipher(algorithms.AES(b'MATRIXMATRIXMATR'),modes.CBC(bytes.fromhex('DEADBEEF'*4))).decryptor()
  padded=d.update(bytes.fromhex(evidence('round3')))+d.finalize()
  u=PKCS7(128).unpadder();self.check('round3',(u.update(padded)+u.finalize()).decode())
 def test_log_rule(self):
  failures={};matches=[]
  decoded=bytes.fromhex(base64.b64decode(evidence('logs')).decode()).decode()
  for row in decoded.splitlines():
   fields=row.split();_,user,src,outcome=fields[:4];key=(user,src)
   if outcome=='outcome=FAIL':failures[key]=failures.get(key,0)+1
   elif failures.get(key,0)>=3:matches.append(fields[4].split('=')[1])
  self.assertEqual(matches,C['logs']['answers'])
 def test_no_shortcut_answers(self):
  for id,shortcut in [('round1','MATRIX'),('round3','rabbit'),('round3','Follow the white rabbit.'),('round4','Virus'),('quishing','quishing'),('logs','192.0.2.147'),('sha256','rabbit')]:
   self.assertNotIn(norm(shortcut),[norm(a) for a in C[id]['answers']],id)
 def test_recipe_hints(self):
  self.assertIn('From Charcode',C['round5']['hints'][2])
  self.assertIn('Base to 32',C['round5']['hints'][2])
  self.assertIn('Forward slash',C['morse']['hints'][2])
 def test_css_assets(self):
  css=(ROOT/'assets/style.css').read_text()
  for ref in re.findall(r"url\(['\"]?([^)'\"]+)",css):
   if not urlsplit(ref).scheme:self.assertTrue((ROOT/'assets'/ref).exists(),ref)
 def test_links_and_structure(self):
  class Parse(HTMLParser):
   def __init__(self):super().__init__();self.links=[];self.ids=[];self.tags=[]
   def handle_starttag(self,tag,attrs):
    a=dict(attrs);self.tags.append(tag)
    if 'id' in a:self.ids.append(a['id'])
    for k in ['href','src']:
     if k in a:self.links.append(a[k])
  for page in ROOT.glob('*.html'):
   parser=Parse();parser.feed(page.read_text())
   self.assertEqual(len(parser.ids),len(set(parser.ids)),page.name)
   self.assertEqual(parser.tags.count('html'),1,page.name)
   for ref in parser.links:
    url=urlsplit(ref)
    if not url.scheme and url.path:self.assertTrue((ROOT/url.path).exists(),f'{page.name}: {ref}')
if __name__=='__main__':unittest.main(verbosity=2)
