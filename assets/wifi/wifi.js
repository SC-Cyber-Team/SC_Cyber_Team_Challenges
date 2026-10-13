'use strict';
const wifiStages = [
  {
    title: 'A helpful sign on the table.',
    context: 'You’re Alex Morgan, hosting a workshop in Northbridge’s Alder meeting room. Your phone needs internet access. A new printed Wi-Fi notice is sitting beside the visitor information.',
    question: 'Before using the QR code, what do you check?',
    scene: 'notice',
    choices: ['The logo and network name look right. Scan and follow whatever opens.', 'Preview the destination and compare the instructions with established visitor information.', 'Avoid it because every QR code is unsafe.'],
    correct: 1,
    lesson: 'A QR code carries information, often a link. A familiar logo and network name don’t establish who supplied it. Check its source and destination rather than assuming all codes are unsafe.',
    consequence: 'You pause to inspect the link and the instructions. The next screen recreates the page the notice would lead to.',
    checks: [
      ['Notice source', 'The paper has Northbridge branding and says the guest service was updated today. You don’t know who placed it there. Appearance and a plausible explanation are not independent verification.'],
      ['QR destination', 'The fictional notice points to:\nhttps://northbridge-guest.example/connect?room=alder\n\nThe real training QR opens this site’s local preview instead. It never opens the fictional destination.'],
      ['Established visitor information', 'The workshop information you received through the established booking route lists:\nNetwork: Northbridge-Guest\nGuest portal: guest.northbridge.example\nAccess: a temporary guest code issued by Reception.\nIt does not tell visitors to use a work-account password.']
    ]
  },
  {
    title: 'Wi-Fi access becomes a work sign-in.',
    context: 'The preview shows a familiar Microsoft-style screen. It says a work-account sign-in will activate guest Wi-Fi. You have not entered any details.',
    question: 'What do you do with this sign-in request?',
    scene: 'signin',
    choices: ['Continue because it looks like the Microsoft sign-in page you use every day.', 'Use your personal phone; that makes the sign-in safer.', 'Stop and compare the full hostname and requested information with the verified guest instructions.'],
    correct: 2,
    lesson: 'A convincing sign-in screen can be copied. HTTPS protects a connection to the displayed hostname; it does not prove the site belongs to Microsoft or your organisation. Moving to a personal phone does not verify the request.',
    consequence: 'You retain your credentials and inspect the difference. Opening a page is not the same as having signed in or approved access.',
    checks: [
      ['Full address', 'Displayed hostname: northbridge-guest.example\nApproved guest hostname: guest.northbridge.example\n\nThey are different hosts. Compare the complete hostname, not just a familiar company word or the HTTPS symbol. In this fictional case, the notice’s host is not listed in the established visitor information.'],
      ['What the page requests', 'The page asks for a Microsoft 365 work-account sign-in, although the established guest instructions require a temporary guest code. That mismatch needs independent verification before proceeding. Real organisations can use different Wi-Fi authentication methods; the known process matters.'],
      ['What you have done', 'You have only viewed a training preview. No information was typed, no account was authenticated, and no permission was granted. Do not assume that merely scanning any QR code automatically compromises a device.']
    ]
  },
  {
    title: 'Keep the check independent.',
    context: 'The workshop starts shortly. A colleague says they used the notice earlier. You need reliable guest access, so you check the known visitor information and contact Reception through the established route.',
    question: 'Which route should you use to resolve the mismatch?',
    scene: 'reception',
    choices: ['Use Reception’s established contact route to confirm the guest service and raise the unexpected sign-in request.', 'Use a help number supplied by the unexpected page to check whether that same page is genuine.', 'Proceed because your colleague says the notice worked for them.'],
    correct: 0,
    lesson: 'A check is independent when it uses a route you already trust. A contact supplied by the questionable request can lead back to the same person. Someone else having used it is not authorisation.',
    consequence: 'Reception confirms the approved portal and temporary guest-code process. They did not issue the new notice and ask you to report it through the normal support channel.',
    checks: [
      ['Established contact route', 'You open the existing workshop booking information and use the Reception contact listed there. You do not use a phone number or support link from the questionable page. This exercise simulates that check locally.'],
      ['Reception confirmation', 'Reception confirms:\nUse Northbridge-Guest and guest.northbridge.example.\nObtain a temporary access code at the desk.\nA work-account password is not part of this guest process.\nReception did not issue the new QR notice.'],
      ['Preserve and report', 'Keep the notice location, destination and relevant time for your normal support or security reporting route. Don’t circulate the suspect link as something colleagues should try. If anyone entered credentials or approved access, report that promptly and follow the organisation’s recovery instructions.']
    ]
  },
  {
    title: 'A guest portal you can verify.',
    context: 'You open the guest portal from the established visitor information. Reception confirms it, and you use the temporary guest code they issued. This is a separate, verified route—not the page from the questionable notice.',
    question: 'With these checks completed, what is the reasonable next step?',
    scene: 'guest',
    choices: ['Reject it simply because websites and QR codes can be used for phishing.', 'Use the verified guest-code process, following the organisation’s Wi-Fi guidance.', 'Enter your Microsoft 365 password as an extra check even though the portal does not request it.'],
    correct: 1,
    lesson: 'Verification supports a proportionate decision. In this supplied context, the hostname, source and temporary-code process have been confirmed independently. A legitimate guest portal does not become unsafe merely because another notice was deceptive.',
    consequence: 'You use the established guest process and retain your work-account credentials. No real network connection occurs in this exercise.',
    checks: [
      ['How you got here', 'You opened the portal using the established workshop information after checking with Reception. You did not continue through the unverified notice or use its support details.'],
      ['Confirmed destination', 'Full address: https://guest.northbridge.example/access\nReception confirms this hostname for the guest service. The approval is based on the established source and independent check, not the HTTPS symbol alone.'],
      ['Requested information', 'A temporary guest access code issued by Reception is already shown as a fictional example. The portal does not request your employee password, an Authenticator approval, software installation or permission to control your device.']
    ]
  }
];

const wifiById = id => document.getElementById(id);
const wifiEscape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let wifiStep = 0, wifiAnswers = [], wifiAnswered = false, wifiOpened = new Set();

function wifiNotice() {
  return '<div class="room-scene"><div class="notice"><div class="notice-brand"><i aria-hidden="true"></i>Northbridge</div><h3>Guest Wi-Fi</h3><p class="ssid">Network: Northbridge-Guest</p><p class="notice-note">Guest access has been updated.<br>Scan to activate your connection.</p><img src="assets/wifi/training-notice.svg" alt="Scannable training QR code opening this website’s preview" width="170" height="170"><p class="scan-label">SCAN TO JOIN</p><p class="fine-print">Alder meeting room · Guest services</p></div></div><div class="scene-actions"><button id="preview-qr" aria-expanded="false" aria-controls="camera-preview">Preview QR destination</button></div><div class="camera-preview" id="camera-preview" hidden><strong>Camera link preview</strong><code>https://northbridge-guest.example/connect?room=alder</code><p class="preview-note">Fictional destination shown for inspection. The real QR opens this training page. No camera access or external navigation is needed.</p></div>';
}

function wifiPhone(body, hostname, fullAddress) {
  return '<div class="phone"><div class="statusbar"><span>09:24</span><span>▮▮▮ &nbsp; 5G &nbsp; ▰</span></div><div class="browserbar"><button id="inspect-address" class="address" aria-expanded="false" aria-controls="full-address"><span>'+wifiEscape(hostname)+'</span><span aria-hidden="true">▾</span></button><div id="full-address" class="full-address" hidden>'+wifiEscape(fullAddress)+'</div></div><div class="mobile-page">'+body+'</div><div class="browserbottom" aria-hidden="true"><span>‹</span><span>›</span><span>□↑</span><span>▣</span></div><div class="homebar"></div></div>';
}

function wifiSignin(password = false) {
  const brand = '<div class="mswordmark"><span class="msmark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>Microsoft</div>';
  const body = brand + (password
    ? '<p style="margin-top:23px">← alex.morgan@northbridge.example</p><h3>Enter password</h3><p>Activate Northbridge guest Wi-Fi.</p><div class="fake-input" role="textbox" aria-readonly="true" aria-label="Read-only password preview">Password</div><p style="color:#0067b8">Forgot my password</p><button class="next" disabled>Sign in</button>'
    : '<h3>Sign in</h3><p>Activate Northbridge guest Wi-Fi with your work account.</p><div class="fake-input" role="textbox" aria-readonly="true" aria-label="Fictional example account">alex.morgan@northbridge.example</div><p style="color:#0067b8">No account? Create one!</p><button class="next" id="preview-password">Next</button>')
    + '<p class="account-note">Read-only training preview. The account shown is fictional. No details can be entered or submitted.</p>';
  return wifiPhone(body, 'northbridge-guest.example', 'https://northbridge-guest.example/connect?room=alder');
}

function wifiReception() {
  return '<div class="trusted-record"><div class="record-header">Northbridge · Established visitor information</div><div class="record-body"><h3>Alder workshop</h3><p>Your booking information, received through the known workshop route.</p><dl><dt>Guest network</dt><dd>Northbridge-Guest</dd><dt>Approved portal</dt><dd>guest.northbridge.example</dd><dt>Access method</dt><dd>Temporary code issued by Reception</dd><dt>Help with your visit</dt><dd>Reception · Existing booking contact</dd></dl><button id="check-reception">Check with Reception through this record</button><div id="reception-response" class="verified-response" hidden><h4>Independent confirmation</h4><p>“Please use the portal in your visitor information and collect a guest code from the desk. You don’t need your work password. We didn’t issue that new notice—please raise it through the normal support channel.”</p></div></div></div>';
}

function wifiGuest() {
  const body = '<div class="guest-brand">Northbridge</div><h3>Guest internet access</h3><p>Welcome to Northbridge.</p><div class="guest-note"><p style="margin-bottom:0">Use the temporary access code supplied by Reception.</p></div><div class="fake-input" role="textbox" aria-readonly="true" aria-label="Fictional guest access code">ALDER-2046</div><p>By continuing, guests follow the visitor Wi-Fi guidance provided at check-in.</p><button class="guest-continue" id="guest-continue">Continue</button><p class="guest-success" id="guest-success" role="status" hidden>Guest access preview complete. No network connection or agreement is created by this exercise.</p><p class="account-note">Fictional example code · Read-only training preview</p>';
  return wifiPhone(body, 'guest.northbridge.example', 'https://guest.northbridge.example/access');
}

function wifiInspect(index) {
  const entry = wifiStages[wifiStep].checks[index];
  wifiOpened.add(wifiStep+':'+index);
  wifiById('reading').innerHTML = '<h3>'+wifiEscape(entry[0])+'</h3><p>'+wifiEscape(entry[1])+'</p>';
  wifiById('checks').querySelectorAll('button').forEach((button, i) => {
    button.setAttribute('aria-pressed', String(i === index));
    button.classList.toggle('seen', wifiOpened.has(wifiStep+':'+i));
  });
}

function wifiBindScene() {
  if (wifiById('preview-qr')) wifiById('preview-qr').onclick = () => {
    const open = wifiById('camera-preview').hidden;
    wifiById('camera-preview').hidden = !open;
    wifiById('preview-qr').setAttribute('aria-expanded', String(open));
    if (open) wifiInspect(1);
  };
  if (wifiById('inspect-address')) wifiById('inspect-address').onclick = () => {
    const open = wifiById('full-address').hidden;
    wifiById('full-address').hidden = !open;
    wifiById('inspect-address').setAttribute('aria-expanded', String(open));
    if (open) wifiInspect(wifiStep === 1 ? 0 : 1);
  };
  if (wifiById('preview-password')) wifiById('preview-password').onclick = () => {
    wifiById('scene').innerHTML = wifiSignin(true);
    wifiBindScene();
    wifiInspect(1);
  };
  if (wifiById('check-reception')) wifiById('check-reception').onclick = () => {
    wifiById('reception-response').hidden = false;
    wifiInspect(1);
  };
  if (wifiById('guest-continue')) wifiById('guest-continue').onclick = () => {
    wifiById('guest-success').hidden = false;
    wifiById('guest-continue').disabled = true;
    wifiInspect(2);
  };
}

function wifiRender() {
  wifiAnswered = false;
  const stage = wifiStages[wifiStep];
  wifiById('counter').textContent = 'Decision '+(wifiStep+1)+' / 4 · '+(['Meeting room','Mobile preview','Trusted check','Verified guest access'][wifiStep]);
  wifiById('progress').value = wifiAnswers.length;
  wifiById('context').textContent = stage.context;
  wifiById('title').textContent = stage.title;
  wifiById('question').textContent = stage.question;
  wifiById('scene').innerHTML = [wifiNotice, wifiSignin, wifiReception, wifiGuest][wifiStep]();
  wifiById('choices').innerHTML = stage.choices.map((choice, i) => '<button class="choice" data-choice="'+i+'"><b>'+String.fromCharCode(65+i)+'</b><span>'+wifiEscape(choice)+'</span></button>').join('');
  wifiById('choices').querySelectorAll('button').forEach(button => button.onclick = () => wifiChoose(Number(button.dataset.choice)));
  wifiById('checks').innerHTML = stage.checks.map((check, i) => '<button class="check" data-check="'+i+'" aria-pressed="false">'+wifiEscape(check[0])+'</button>').join('');
  wifiById('checks').querySelectorAll('button').forEach(button => button.onclick = () => wifiInspect(Number(button.dataset.check)));
  wifiById('reading').textContent = 'Choose an evidence check to inspect it.';
  wifiById('feedback').innerHTML = '';
  wifiById('next').hidden = true;
  wifiBindScene();
  wifiById('title').focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'auto'});
}

function wifiChoose(choice) {
  if (wifiAnswered) return;
  wifiAnswered = true;
  const stage = wifiStages[wifiStep], good = choice === stage.correct;
  wifiAnswers.push({choice, good});
  wifiById('progress').value = wifiAnswers.length;
  wifiById('choices').querySelectorAll('button').forEach((button, i) => {
    button.disabled = true;
    button.classList.toggle('selected', i === choice);
  });
  wifiById('feedback').innerHTML = '<div class="feedback '+(good?'':'miss')+'"><h3>'+(good?'You checked the right evidence.':'A useful moment to pause.')+'</h3><p>'+wifiEscape(stage.lesson)+'</p><p>'+wifiEscape(stage.consequence)+'</p>'+(!good?'<p><strong>Guided recovery:</strong> You now continue through the verified route. In real life, report any details or approvals you already supplied.</p>':'')+'</div>';
  wifiById('next').hidden = false;
  wifiById('next').textContent = wifiStep === 3 ? 'See your debrief →' : 'Continue investigation →';
}

function wifiFinish() {
  const score = wifiAnswers.filter(answer => answer.good).length;
  wifiById('investigation').hidden = true;
  wifiById('result').hidden = false;
  wifiById('result').innerHTML = '<div class="eyebrow">Case debrief · Follow the destination</div><h1>Scan the code.<br><span>Check the story.</span></h1><div class="result-score">'+score+' / 4</div><p class="lead">'+(score===4?'You verified the source, destination and guest-access process.':'You’ve practised the checks that can expose a convincing Wi-Fi lure.')+'</p><p>In this fictional case, the new notice directed visitors to an unapproved lookalike portal asking for work credentials. The actual guest service used an independently confirmed hostname and a temporary code. No real credentials were entered or captured.</p><div class="takeaways"><article><h3>A code is not a verdict</h3><p>QR codes can support legitimate services. What matters is who supplied the code, where it leads and what follows.</p></article><article><h3>Inspect the full hostname</h3><p>A familiar logo, company word or HTTPS symbol does not establish ownership. Compare with an independently verified destination.</p></article><article><h3>Check the requested action</h3><p>Does the request match the known process? Verify unexpected sign-ins, downloads or approvals before proceeding.</p></article></div><h2>Your decisions</h2>'+wifiStages.map((stage,i)=>'<div class="review"><div class="eyebrow">'+(i+1)+' · '+(wifiAnswers[i].good?'Sound decision':'Learning moment')+'</div><h3>'+wifiEscape(stage.title)+'</h3><p>You chose: '+wifiEscape(stage.choices[wifiAnswers[i].choice])+'</p><p>'+wifiEscape(stage.lesson)+'</p></div>').join('')+'<p class="muted">Evidence checks opened: '+wifiOpened.size+' / 12. Your score and checks remain in this visit only.</p><p><strong>If someone already entered credentials or approved access:</strong> stop interacting with the page, report promptly through the established IT or security route, and follow the organisation’s account-recovery instructions. Merely viewing a page is a different exposure from supplying credentials or granting access.</p><button class="primary" id="again">Investigate again →</button><div class="source-links"><a href="index.html#workplace">Return to the challenge hub</a><a href="scam-quiz.html">Try Spot the scam →</a></div><details class="about"><summary>Research and simulation notes</summary><p>This original fictional case follows <a href="https://www.ncsc.gov.uk/blog-post/qr-codes-whats-real-risk" target="_blank" rel="noopener">NCSC guidance on QR-code risk</a> and <a href="https://learn.microsoft.com/en-gb/defender-endpoint/malware/phishing-trends" target="_blank" rel="noopener">Microsoft’s phishing guidance</a>. Real organisations use different guest-access methods; this case supplies its own verified process. The room image was generated for this exercise; the notice and QR were built separately for readability and reliable scanning. The real QR opens this training preview. All displayed .example destinations are fictional and never opened. No forms, password entry, network connection, camera access or outgoing reports are used. Checked October 2026.</p></details>';
  wifiById('again').onclick = wifiStart;
  wifiById('result').querySelector('h1').tabIndex = -1;
  wifiById('result').querySelector('h1').focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'auto'});
}

function wifiStart() {
  wifiStep = 0; wifiAnswers = []; wifiOpened = new Set();
  wifiById('intro').hidden = true;
  wifiById('result').hidden = true;
  wifiById('investigation').hidden = false;
  wifiRender();
}
wifiById('start').onclick = wifiStart;
wifiById('restart').onclick = wifiStart;
wifiById('next').onclick = () => {
  if (!wifiAnswered) return;
  if (wifiStep === 3) wifiFinish();
  else {wifiStep++; wifiRender();}
};
if (window.location.hash === '#scan') {
  wifiStart();
  wifiById('preview-qr').onclick();
}
