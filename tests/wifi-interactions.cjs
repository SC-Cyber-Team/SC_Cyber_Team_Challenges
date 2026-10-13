const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('assets/wifi/wifi.js','utf8');
const page=fs.readFileSync('meeting-room-wifi.html','utf8');
function boot(hash=''){
  const nodes=new Map();
  class Element{
    constructor(){this.hidden=false;this.disabled=false;this.dataset={};this.attributes={};this.buttons=[];this.childIds=[];this.classes=new Set();this.classList={toggle:(name,on)=>on?this.classes.add(name):this.classes.delete(name)};}
    set innerHTML(value){this.html=value;for(const id of this.childIds)nodes.delete(id);this.childIds=[];for(const match of value.matchAll(/\bid="([^"]+)"/g)){const el=new Element();const tag=value.slice(Math.max(0,value.lastIndexOf('<',match.index)),value.indexOf('>',match.index)+1);el.hidden=/\bhidden\b/.test(tag);nodes.set(match[1],el);this.childIds.push(match[1]);}this.buttons=[...value.matchAll(/<button[^>]*data-(choice|check)="(\d+)"/g)].map(match=>{const el=new Element();el.dataset[match[1]]=match[2];return el});}
    get innerHTML(){return this.html||'';}
    querySelectorAll(){return this.buttons;}
    querySelector(){return new Element();}
    setAttribute(name,value){this.attributes[name]=value;}
    focus(){}
  }
  for(const match of page.matchAll(/\bid="([^"]+)"/g))nodes.set(match[1],new Element());
  const get=id=>nodes.get(id)||null;
  const context=vm.createContext({document:{getElementById:get},window:{scrollTo(){},location:{hash}}});
  vm.runInContext(source,context);return{get,context};
}
const correct=[1,2,0,1];
for(let path=0;path<81;path++){
  const {get,context}=boot();get('start').onclick();get('next').onclick();assert.equal(vm.runInContext('wifiStep',context),0);
  let choices=path,score=0;
  for(let step=0;step<4;step++){
    assert.equal(vm.runInContext('wifiStep',context),step);
    const choice=choices%3;choices=Math.floor(choices/3);if(choice===correct[step])score++;
    for(let check=0;check<3;check++)get('checks').buttons[check].onclick();
    get('choices').buttons[choice].onclick();get('choices').buttons[choice].onclick();
    assert.equal(vm.runInContext('wifiAnswers.length',context),step+1);
    assert.equal(get('progress').value,step+1);assert.ok(get('choices').buttons.every(button=>button.disabled));get('next').onclick();
  }
  assert.ok(get('result').innerHTML.includes(score+' / 4'));assert.ok(get('result').innerHTML.includes('12 / 12'));
  get('again').onclick();assert.equal(vm.runInContext('wifiAnswers.length',context),0);assert.equal(vm.runInContext('wifiOpened.size',context),0);
}
const {get,context}=boot('#scan');assert.equal(vm.runInContext('wifiStep',context),0);assert.equal(vm.runInContext('wifiAnswers.length',context),0);assert.equal(get('camera-preview').hidden,false);assert.equal(get('preview-qr').attributes['aria-expanded'],'true');assert.ok(get('reading').innerHTML.includes('northbridge-guest.example'));
get('choices').buttons[1].onclick();get('next').onclick();get('inspect-address').onclick();assert.equal(get('full-address').hidden,false);assert.ok(get('reading').innerHTML.includes('guest.northbridge.example'));get('preview-password').onclick();assert.ok(get('scene').innerHTML.includes('Enter password'));assert.ok(get('scene').innerHTML.includes('disabled>Sign in'));assert.equal(vm.runInContext('wifiAnswers.length',context),1);
get('choices').buttons[2].onclick();get('next').onclick();get('check-reception').onclick();assert.equal(get('reception-response').hidden,false);assert.ok(get('reading').innerHTML.includes('did not issue'));get('choices').buttons[0].onclick();get('next').onclick();get('inspect-address').onclick();assert.ok(get('reading').innerHTML.includes('https://guest.northbridge.example/access'));get('guest-continue').onclick();assert.equal(get('guest-success').hidden,false);assert.equal(get('guest-continue').disabled,true);assert.equal(vm.runInContext('wifiAnswers.length',context),3);
get('choices').buttons[1].onclick();get('next').onclick();assert.ok(get('result').innerHTML.includes('4 / 4'));
assert.ok(!/<form\b|<input\b|<textarea\b/.test(page+source));assert.ok(!/fetch\s*\(|XMLHttpRequest|getUserMedia|localStorage|\.submit\s*\(/.test(source));assert.ok(fs.statSync('assets/wifi/meeting-room.webp').size<150000);assert.ok(fs.readFileSync('assets/wifi/qr-target.txt','utf8').trim().endsWith('/meeting-room-wifi.html#scan'));
console.log('Wi-Fi checks passed: 81 answer paths, 12 evidence checks, gated/locked answers, QR deep link without score changes, hostname inspection, read-only sign-in, independent verification, legitimate guest preview, debrief and restart.');
