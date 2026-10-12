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
