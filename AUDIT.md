# Realism and usability review — 13 October 2026

Reviewed the homepage, posters, all 35 CyberChef records and legacy routes, the 14-message quiz, A Day at Work, Outsmart the Hacker, both six-case investigation tracks and The Executive Call. The review covers source content, interface behaviour, assessment flows and references; it is not a claim to reproduce every Microsoft product version pixel for pixel.

## Second interface pass — 13 October 2026

Further improvements after the initial audit:

- Reworked the Executive Call into a meeting stage with a right-side Chat/People/Transcript pane. The pane buttons toggle open and closed and expose their selected state. Decision cards no longer stretch into empty space.
- Added external identity context and compact participant tiles. The fictional organizer uses an external tenant in this scenario; an External badge is context, not a fraud verdict.
- The ended briefing transitions into a separate Teams meeting chat, with a meeting-ended notice and independent directory checks. It no longer keeps the executive's image on screen as though the briefing were continuing live.
- Isolated native client headings from the poster typography, so Outlook subjects and Quick Assist prompts keep ordinary case and system fonts.
- Added a Quick Assist walkthrough: helper-supplied code, screen-sharing consent, then a separate control prompt. Its preview actions never start a session or grant control.
- Rebuilt the invoice as a PDF-style document with billing metadata, line item, purchase order and total.
- Replaced plain sharing-settings text with an expandable Microsoft 365-style audience and permission panel. The request's original settings remain fixed for the assessment; Copy link and Send are local previews.

These refinements follow the Microsoft product references listed below. Additional regression checks cover panel toggles, the meeting-to-chat transition, independent verification and the access walkthrough. At that stage, the synthetic speech and static portrait remained limitations. They were subsequently upgraded through HeyGen, as recorded below.

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

The Executive Call now includes natural generated speech and a lip-synced fictional presenter through HeyGen’s official embed. The free account exposes sharing and embedding while reporting video download unavailable, so the website uses the official player rather than hosting an exported video. The player retains HeyGen’s controls and watermark. Audio-only playback has timed captions. No voice of a real executive was cloned.

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

## Media upgrades — 13 October 2026

The full 21.6-second fictional executive video was verified playing to completion with sound through the official free-plan embed. It plays inside the recreated Teams meeting. Leaving or continuing removes the player; starting the audio-only alternative unloads the video to prevent duplicate audio. The transcript remains available through the Teams pane.

Outsmart the Hacker now includes an 11-second fictional caller and a 19-second independently verified helpdesk callback, generated through HeyGen speech and exported as local MP3s. Accept plays the caller without selecting an assessment answer. Decline/End stops playback; Replay restarts it. The independent callback becomes available after the decision, including guided recovery for an unsafe answer. Transcripts and native controls provide alternatives. Navigation and restart stop playback and detach handlers so old media events cannot affect another scene.

Checks cover all 243 assessment paths plus call playback, end/replay, clock display, failed playback fallback, unchanged scoring from listening, callback and media cleanup.

## Meeting-room quishing case — 13 October 2026

Added an original four-decision Wi-Fi notice case with 12 evidence checks. A realistic room background was generated, while the readable notice and exact QR were built separately. The actual QR targets meeting-room-wifi.html#scan on this site; the displayed .example hostname belongs only to the fictional story. The deep link opens the camera-link preview at decision one without submitting an answer. All sign-in and guest-code screens are read-only. There are no real forms, credential fields, camera permissions, network changes, outgoing reports or remote score storage.

The case contrasts an unverified notice, lookalike Microsoft sign-in and independently verified guest portal. Correct answers are distributed across positions B, C, A and B. Guidance avoids claiming that QR scanning alone compromises a device, that all QR codes are unsafe, or that HTTPS authenticates the company. The scenario’s guest-code policy is fictional and explicitly supplied; real organisations may use other methods.

Research: https://www.ncsc.gov.uk/blog-post/qr-codes-whats-real-risk and https://learn.microsoft.com/en-gb/defender-endpoint/malware/phishing-trends . Automated checks cover all 81 answer paths, duplicate/gated answers, all evidence checks, the scan deep link, read-only previews, independent Reception verification, the legitimate guest flow, debrief and restart.

## Learning journey — 13 October 2026

Added completion-only device-local progress for all seven workplace activities. Scores and answers remain temporary; no new analytics or remote reporting is introduced. The homepage shows participation, a suggested next challenge and reset/undo controls. Completing a simulation provides a next-activity link; replay hides the previous completion receipt while retaining the device-local completion flag. Content revision checks reject obsolete or unknown records. Both investigation tracks count separately.

Added skip-navigation links to Outsmart, Executive Call and Cyber Investigations. Existing scenario headings retain programmatic focus on scene changes. All assessment and CyberChef regression suites pass alongside new persistence tests for reload, reset/undo, corrupt/blocked/quota storage, cross-tab updates and separation from CyberChef progress. A browser viewport fixture supports actual narrow-layout inspection; this is a width test, not a claim to emulate every mobile device or operating system.
