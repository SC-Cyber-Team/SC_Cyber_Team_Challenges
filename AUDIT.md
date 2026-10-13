# Realism and usability review — 13 October 2026

Reviewed the homepage, posters, all 35 CyberChef records and legacy routes, the 14-message quiz, A Day at Work, Outsmart the Hacker, both six-case investigation tracks and The Executive Call. The review covers source content, interface behaviour, assessment flows and references; it is not a claim to reproduce every Microsoft product version pixel for pixel.

## Corrections made

| Finding | Correction |
| --- | --- |
| The laptop-to-phone Authenticator example used a legacy Approve/Deny layout. | Added the number-matching entry preview and “No, it’s not me”; Yes is unavailable without a sign-in number. Updated the caller and Teams instructions to model coaching through number matching. |
| Quick Assist requests asked the recipient to supply a connection code. | The purported helper now supplies the code; the recipient is asked to enter it, allow screen sharing and separately allow requested control. |
| Training instructions appeared inside the ClickFix email. | Removed the simulation explanation from the message body. Safety information stays outside the fictional message. No executable command is supplied. |
| A personal email from Priya looked like an automated SharePoint notification. | Rendered it as a direct email with an ordinary signature and document link. |
| Sender popovers included coaching text. | Limited the client display to sender fields; explanatory evidence stays on the evidence desk. A Day at Work now has a separate native-style sender-details dropdown. |
| External Teams requests lacked an acceptance action. | Added preview-context banners, local Accept controls and Block and report controls. Acceptance does not establish trust or produce a verdict. |
| Guest lobby labels used an ambiguous Guest badge. | The anonymous assistant is labelled Unverified, consistent with the chosen meeting scenario. |
| The QR scenario described an overlaid sticker without depicting it. | Added a visibly separate replacement sticker treatment. |
| Teams Leave only displayed advice. | The Executive Call now leaves the recreated meeting, stops playback and provides an optional review route while trusted records remain available. |
| Every sound answer in A Day at Work appeared first. | Balanced answer positions across the five decisions so location is not a shortcut. |
| Three large homepage promotions competed for attention. | Replaced them with six distinct cards, durations and descriptions. The 35-mission count is explicitly for CyberChef. |

## Primary references

- [Authenticator number matching](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match): other-device number entry differs from some same-device app flows.
- [Quick Assist](https://support.microsoft.com/en-us/windows/apps/solve-pc-problems-remotely-using-quick-assist): helper-supplied code, screen-sharing consent and additional control consent.
- [Teams external requests](https://support.microsoft.com/en-us/teams/chat/accept-block-or-delete-chat-or-meeting-requests-from-people-outside-your-organization-in-microsoft-t): preview and acceptance/blocking behaviour.
- [Teams anonymous participants](https://learn.microsoft.com/en-us/microsoftteams/anonymous-users-in-meetings): Unverified, Email Verified and External are different states.
- [Outlook phishing reporting](https://support.microsoft.com/en-us/outlook/mail/phishing-and-suspicious-behavior-in-outlook): sender indicators and reporting behaviour depend on configuration.
- [OneDrive sharing](https://support.microsoft.com/en-gb/onedrive/share-files-and-folders-in-microsoft-onedrive): specific recipients, existing access and permission options. Expiry support varies; the scenarios do not promise universal expiry controls.
- [Microsoft’s September 2026 helpdesk impersonation research](https://www.microsoft.com/en-us/security/blog/2026/09/02/impersonating-it-support-threat-actors-turn-remote-session-into-enterprise-wide-access/): genuine Teams and remote-support tools can carry malicious requests.
- [Hong Kong official deepfake case account](https://www.info.gov.hk/gia/general/202406/26/P2024062600192p.htm): a pre-recorded impersonation conference followed by messaging instructions informed the executive scenario.

## Validation

The complete automated suite passes: 35 CyberChef answer flows and persistence/gating checks; all 14 quiz outcomes; A Day at Work safe and unsafe decisions; 128 combinations across the investigation tracks; 243 Executive Call combinations and audio controls; 243 Outsmart combinations and its number-matching rejection control. Inline scripts parse. Static HTML IDs and local asset references were checked. Visual checks and actual media playback are checked separately on the deployed site; simulated unit tests do not establish sound quality or actual browser playback.

## Remaining realism limits

The Executive Call has a synthetic still and synthesized narration. The audio is intelligible training narration, rather than a convincing executive performance; the still does not move or lip-sync. Higher-quality acted narration and a properly produced fictional video would make this the strongest candidate for a further media upgrade.

The exercises use illustrative client layouts and fictional `.example` addresses, with a clear training label. Product labels and layouts can vary by version, tenant configuration and device. A familiar app, an External label, polished wording, correct supplier details or passing email authentication does not decide legitimacy on its own. Both genuine and malicious examples remain in the cases.

Connected investigations use guided recovery and continue the story after a decision for practice. They do not simulate the full consequences of sending money, granting access or authorising a live session. Scores are local practice feedback, not security assurance or a monitored leaderboard.

---

# Ten additional challenges — 13 October 2026

The site now contains 35 challenges: six original-track exercises and 29 bonus missions, worth 6,200 points in total. Existing challenge IDs, answers and saved completions are preserved.

New lessons: Atbash, octal character codes, UTF-16LE conversion, hexdump reconstruction, URL extraction, IP extraction, JSON configuration recovery, raw DEFLATE, unknown-key XOR and exact-byte SHA-256 hashing. Each uses newly authored synthetic evidence, three hints and a verified CyberChef recipe. The answer box supports multi-line outputs from extraction operations.

All ten new recipes were tested in the official hosted CyberChef tool, including formatting-sensitive hexdump byte boundaries. Independent reference checks verify the evidence and answers, and app interaction tests cover all 35 questions. Earlier dated counts below describe earlier versions of the site.

---

# CyberChef-only revision — 13 October 2026

This revision supersedes the task descriptions in the historical audit below.

All 25 briefs explicitly instruct the learner to use CyberChef, and every record declares its operations. The QR task is now Base64 → URL Decode; SOC triage requires Base64 → From Hex; indicator restoration requires Base64 → Fang URL. The AES and virus-riddle tasks now include unique decoded access codes; binary requires the full decoded sentence. Hash comparison requires a second, newly calculated SHA-256 digest rather than a guessable animal name.

The six revised evidence/answer workflows were verified against the official hosted CyberChef tool. Independent evidence checks, all 25 app answer flows, rejection of old shortcut answers, unchanged total of 4,100 points, and revision-aware progress migration pass. The earlier audit remains below as a dated record, not a claim that its old evidence is still current.

Research sources and possible future lessons are listed in README.md. No copied malware samples or external target activity is required. The answer checker cannot establish which external application a learner used; task design now consistently requires evidence processing, but strict recipe execution is a separate server-side feature.

---

# Challenge Lab audit — 12 October 2026

## Outcome

All 25 expected answers were accepted in the deployed website using a desktop Chromium browser. Each challenge's evidence was also independently checked with reference transformations or its stated reasoning rule. Recipe-based tasks were checked against the official hosted CyberChef tool; the awareness, log-triage and defanged-URL tasks were reviewed directly.

## Live browser checks

- All six original exercises and nineteen bonus answer forms: correct-answer success feedback.
- Incorrect answer rejected; uppercase, surrounding spaces and omitted final punctuation accepted.
- Reload retained completion; completing an exercise again did not duplicate its points.
- All 25 completions produced **4,100 points**.
- Original journey reached the escape flag only after six original completions.
- Reset cleared points and completed status; the exit locked again.
- Difficulty filtering produced three advanced challenges; original-track filtering produced six.
- An unmatched search produced a useful empty-state message.
- Copy evidence succeeded; hint disclosure worked; each answer showed its explanation.
- Homepage inspected visually on desktop. Evidence and answer rendering use text nodes, not submitted HTML.

## CyberChef checks

| Challenge | Verified recipe or reasoning |
|---|---|
| Mission briefing | ROT13; Amount 23 |
| Binary door | From Binary; Space delimiter, byte length 8 |
| White rabbit corridor | From Base64 |
| Animal courtyard | AES Decrypt; supplied UTF8 key, Hex IV, CBC, Hex input, Raw output |
| Mischief in the burrow | From Hex |
| Hidden in plain sight | From Charcode; Space delimiter, Base 32 |
| Helpdesk intercept | From Hex |
| Rotated locker | ROT13; Amount 13 |
| Mirror message | Reverse; Character |
| Escaped link | URL Decode |
| Radio room | From Morse Code; Space and Forward slash delimiters |
| Numbered keypad | From Charcode; Space delimiter, Base 10 |
| Fingerprint check | SHA2; size 256, lowercase rabbit, no newline |
| QR upgrade | Reviewed terminology and awareness explanation |
| Two envelopes | From Base64 twice |
| Nested parcel | From Hex → From Base64 |
| Shifted dispatch | From Base64 → ROT13 |
| Webpage fragment | From HTML Entity |
| Archive label | From Base32 |
| One-byte lock | From Hex → XOR; Hex key 2a, Standard scheme |
| Compressed evidence | From Base64 → Gunzip |
| SOC triage | Reviewed synthetic event sequence; 192.0.2.10 meets stated rule |
| Timeline repair | From UNIX Timestamp; Seconds (s), UTC |
| Defanged indicator | Reviewed protocol and dot restoration; no destination visited |
| Evidence vault | From Base64 → From Hex → ROT13 |

## Fixes resulting from the audit

1. Replaced round 5's incorrect From Base → From Charcode hint with direct From Charcode (Space, Base 32). From Base interprets the entire input as one number; it does not preserve this token sequence.
2. Corrected the Morse word-delimiter label to **Forward slash**.
3. Update the current room's completion marker immediately after success.
4. Reload pages restored from the browser's back/forward cache to avoid displaying stale points and completion markers.
5. Avoid showing “Continue mission” when only bonus missions have been completed.
6. Explain accurately that blocked browser storage cannot retain completion after leaving the page.
7. Use explicit filter labels and announce result-count changes to assistive technology.
8. Reduce oversized hero text and prevent long card/challenge titles overflowing narrow layouts.

## Automated checks

`python tests/verify.py`, `node tests/interactions.cjs` and JavaScript syntax checks pass. The tests cover independent evidence decoding, AES, the log rule, catalogue integrity, local page and CSS asset links, all accepted-answer flows, filters, reset, corrupt/duplicate/blocked storage, exit gating, immediate route markers and restored-page handling.

## Limits

Desktop Chromium was tested. Physical iPhone/Safari and Android devices were not tested; responsive CSS was inspected but is not a substitute for those device checks. Static answers and local scores can be inspected or edited by participants; this is a learning tool, not a tamper-resistant competition platform. External CyberChef availability is outside this site's control. Progress is local to a browser/device, and cannot persist if browser storage is unavailable.
