// Exercise the real app handlers with a minimal DOM. Visual/browser QA remains separate.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
class Element{
 constructor(){this.children=[];this.handlers={};this.value='';this.textContent='';this.attrs={};this.className='';this.classList={remove:()=>{},add:()=>{}};}
 append(...items){this.children.push(...items);} replaceChildren(...items){this.children=items;}setAttribute(k,v){this.attrs[k]=v;}getAttribute(k){return this[k]??this.attrs[k];}addEventListener(name,fn){this.handlers[name]=fn;}
}
function boot(page,id,stored='{}',storageFails=false){const elements=new Map;const get=id=>{if(!elements.has(id))elements.set(id,new Element);return elements.get(id);};let saved=stored;const events={};let reloads=0;const context={window:{addEventListener:(name,fn)=>events[name]=fn},document:{body:{dataset:{page,challenge:id}},getElementById:get,createElement:()=>new Element},location:{search:id?'?id='+id:'',reload:()=>reloads++},localStorage:{getItem:()=>saved,setItem:(_,value)=>{if(storageFails)throw Error('blocked');saved=value;}},navigator:{clipboard:{writeText:async()=>{}}},URLSearchParams,TextEncoder,btoa:s=>Buffer.from(s,'binary').toString('base64'),confirm:()=>true};vm.createContext(context);vm.runInContext(fs.readFileSync('assets/challenges.js','utf8')+'\n'+fs.readFileSync('assets/app.js','utf8'),context);return {context,get,saved:()=>saved,events,reloads:()=>reloads};}
const catalogue=JSON.parse(fs.readFileSync('assets/challenges.js','utf8').split('const CHALLENGES = ')[1].trim().slice(0,-1));
for(const c of catalogue){const app=boot('challenge',c.id);app.get('answer').value='wrong answer';app.get('answer-form').handlers.submit({preventDefault(){}});assert.match(app.get('feedback').textContent,/Not quite/);assert.equal(app.saved(),'{}');app.get('answer').value='  '+c.answers[0].toUpperCase()+'  ';app.get('answer-form').handlers.submit({preventDefault(){}});assert.match(app.get('feedback').textContent,/Correct/);assert.equal(JSON.parse(app.saved()).solved[0],c.id);app.get('answer-form').handlers.submit({preventDefault(){}});assert.equal(JSON.parse(app.saved()).solved.length,1);assert.equal(app.get('hints').children.length,3);assert.equal(app.get('solution').textContent,c.solution);assert.ok(app.get('room-links').children.some(a=>a.href==='challenge.html?id='+c.id&&a.textContent==='✓ '+c.title));assert.ok(app.get('chef').href.includes('#input='));}
const home=boot('home');assert.equal(home.get('cards').children.length,25);home.get('difficulty').value='Advanced';home.get('difficulty').handlers.input();assert.equal(home.get('cards').children.length,3);home.get('difficulty').value='';home.get('track').value='original';home.get('track').handlers.input();assert.equal(home.get('cards').children.length,6);home.get('reset').handlers.click();assert.equal(JSON.parse(home.saved()).solved.length,0);
const corrupt=boot('home',undefined,'not json');assert.match(corrupt.get('progress-text').textContent,/0 \/ 25/);
const duplicates=boot('home',undefined,JSON.stringify({solved:['rot13','rot13','fake']}));assert.match(duplicates.get('progress-text').textContent,/1 \/ 25/);
const blocked=boot('challenge','round1','{}',true);blocked.get('answer').value=catalogue.find(c=>c.id==='round1').answers[0];blocked.get('answer-form').handlers.submit({preventDefault(){}});assert.match(blocked.get('save-status').textContent,/could not save/);
const locked=boot('final');assert.match(locked.get('completion-title').textContent,/locked/);
const complete=boot('final',undefined,JSON.stringify({solved:catalogue.filter(c=>c.original).map(c=>c.id),revisions:Object.fromEntries(catalogue.map(c=>[c.id,c.revision||1]))}));assert.equal(complete.get('flag').textContent,'FLAG{CYBERCHEF_ESCAPE_MASTER}');
console.log('Interaction checks passed: 25 answer flows, filters, reset, persistence, corrupt/blocked storage and escape gating.');

const cached=boot('home');cached.events.pageshow({persisted:false});assert.equal(cached.reloads(),0);cached.events.pageshow({persisted:true});assert.equal(cached.reloads(),1);
const bonusOnly=boot('home',undefined,JSON.stringify({solved:['quishing']}));assert.equal(bonusOnly.get('resume').textContent,'Start the escape room →');
console.log('Back/forward restoration, immediate route updates and bonus-only resume checks passed.');

const migrated=boot('home',undefined,JSON.stringify({solved:['round3','quishing','rot13']}));assert.match(migrated.get('progress-text').textContent,/1 \/ 25/);
const savedNew=boot('home',undefined,JSON.stringify({solved:['quishing'],revisions:{quishing:2}}));assert.match(savedNew.get('progress-text').textContent,/1 \/ 25/);
console.log('Updated missions invalidate only their old completions; revised completions persist.');
