'use strict';
(() => {
  const key = 'cyber-team-workplace-progress-v1';
  const catalogue = [
    {id:'spot-scam',title:'Spot the scam',path:'scam-quiz.html',revision:1,reason:'Practise inspecting everyday email, text and QR requests.'},
    {id:'wifi-notice',title:'The Wi-Fi notice',path:'meeting-room-wifi.html',revision:1,reason:'Follow a QR destination and verify the guest-access process.'},
    {id:'outsmart',title:'Outsmart the hacker',path:'outsmart-the-hacker.html',revision:1,reason:'Handle unexpected sign-ins and an IT impersonation call.'},
    {id:'workday',title:'A day at work',path:'workday.html',revision:1,reason:'Keep an invoice and support request in the verification process.'},
    {id:'imposter',title:'Spot the Imposter',path:'cyber-investigations.html#imposter',revision:1,reason:'Verify suppliers, support contacts and unexpected invitations.'},
    {id:'firewall',title:'The Human Firewall',path:'cyber-investigations.html#firewall',revision:1,reason:'Check app permissions, sharing settings and meeting access.'},
    {id:'executive',title:'The Executive Call',path:'the-executive-call.html',revision:1,reason:'Verify a convincing synthetic executive and retain payment approvals.'}
  ];
  let memory = {version:1,completed:{}}, persistent = true, undo = null;
  const byId = id => document.getElementById(id);
  function validate(value) {
    const completed = {};
    if (value && value.version === 1 && value.completed && typeof value.completed === 'object' && !Array.isArray(value.completed)) {
      catalogue.forEach(item => {if(value.completed[item.id] === item.revision) completed[item.id] = item.revision;});
    }
    return {version:1,completed};
  }
  function read() {
    if (persistent) {
      let raw;
      try {raw = window.localStorage.getItem(key);}
      catch {persistent = false;return validate(memory);}
      try {memory = validate(JSON.parse(raw || '{}'));}
      catch {memory = {version:1,completed:{}};}
    }
    return validate(memory);
  }
  function write(value) {
    memory = validate(value);
    if (persistent) {
      try {window.localStorage.setItem(key,JSON.stringify(memory));}
      catch {persistent = false;}
    }
    return persistent;
  }
  function status() {
    const state = read(), completed = catalogue.filter(item => state.completed[item.id] === item.revision);
    return {completed:completed.map(item => item.id),total:catalogue.length,next:catalogue.find(item => !completed.includes(item)) || null,persistent};
  }
  function renderHub() {
    const state = status();
    if (byId('journey-count')) byId('journey-count').textContent = state.completed.length+' / '+state.total+' workplace simulations completed';
    if (byId('journey-progress')) {byId('journey-progress').value = state.completed.length;byId('journey-progress').max = state.total;}
    if (byId('journey-next')) {
      byId('journey-next').href = state.next ? state.next.path : 'scam-quiz.html';
      byId('journey-next').textContent = state.next ? 'Suggested next: '+state.next.title+' →' : 'All seven completed · Revisit Spot the scam →';
    }
    if (byId('journey-reason')) byId('journey-reason').textContent = state.next ? state.next.reason : 'You can replay any simulation. Completion records participation, not mastery or a pass mark.';
    if (byId('journey-storage')) byId('journey-storage').textContent = state.persistent ? 'Only completion is saved on this device. Answers and scores are not saved or sent anywhere. Shared device? Reset workplace progress when you finish.' : 'Browser storage is unavailable. Completion lasts for this page visit only; answers and scores are not saved or sent anywhere.';
    if (byId('journey-reset')) byId('journey-reset').disabled = state.completed.length === 0;
    if (byId('journey-undo')) byId('journey-undo').hidden = !undo;
    if (typeof document.querySelectorAll === 'function') document.querySelectorAll('[data-journey]').forEach(card => {
      const completed = state.completed.includes(card.dataset.journey);
      let badge = card.querySelector('.journey-badge');
      if (!badge && completed) {badge = document.createElement('span');badge.className = 'journey-badge';card.append(badge);}
      if (badge) {badge.hidden = !completed;badge.textContent = state.persistent ? '✓ Completed on this device' : '✓ Completed this visit';}
    });
  }
  function receipt(item) {
    if (typeof document.createElement !== 'function' || typeof document.querySelector !== 'function') return;
    let section = byId('journey-receipt');
    if (!section) {
      section = document.createElement('section');section.id = 'journey-receipt';section.className = 'journey-receipt';section.setAttribute('aria-label','Your learning journey');
      const parent = document.querySelector('main');if(!parent)return;parent.append(section);
    }
    section.hidden = false;section.replaceChildren();
    const state = status(), label = document.createElement('p'), link = document.createElement('a'), hub = document.createElement('a');
    label.className = 'journey-receipt-note';label.textContent = item.title+' completed. '+(state.persistent?'Completion saved on this device.':'Browser storage is unavailable; completion lasts for this page visit.')+' Your score is not stored.';
    link.className = 'journey-next';link.href = state.next ? state.next.path : 'index.html#workplace';link.textContent = state.next ? 'Try next: '+state.next.title+' →' : 'All seven completed · Return to the hub →';
    hub.className = 'journey-hub-link';hub.href = 'index.html#workplace';hub.textContent = 'View workplace progress';
    section.append(label,link,hub);
  }
  function complete(id) {
    const item = catalogue.find(entry => entry.id === id);if(!item)return false;
    const state = read();state.completed[id] = item.revision;const saved = write(state);renderHub();receipt(item);return saved;
  }
  function reset() {write({version:1,completed:{}});renderHub();}
  function clearReceipt() {if(byId('journey-receipt'))byId('journey-receipt').hidden = true;}
  window.CyberJourney = Object.freeze({complete,status,reset,clearReceipt});
  read();renderHub();
  if (byId('journey-reset')) byId('journey-reset').onclick = () => {undo = read();reset();if(byId('journey-reset-status'))byId('journey-reset-status').textContent = 'Workplace progress reset. You can undo this before leaving the page.';};
  if (byId('journey-undo')) byId('journey-undo').onclick = () => {if(!undo)return;write(undo);undo = null;renderHub();if(byId('journey-reset-status'))byId('journey-reset-status').textContent = 'Workplace progress restored.';};
  if (typeof window.addEventListener === 'function') window.addEventListener('storage',event => {if(event.key === key || event.key === null){undo = null;renderHub();}});
})();
