# SC Cyber Team — Challenge Lab

A responsive, browser-based CyberChef training site with **25 challenges**: the six original escape-room exercises and 19 bonus missions. No server, accounts, build system or participant data collection is required.

## Features

- Dark mission-control design with cyan and lime accents.
- Original six-room journey, plus searchable bonus library and difficulty filters.
- Three free progressive hints, forgiving answer checking, explanations after solving.
- Local device progress and completion points; reset for the next event participant.
- Copyable evidence and CyberChef links prefilled with synthetic inputs, without giving away recipes.
- Keyboard navigation, visible focus, labelled inputs, responsive layout and reduced-motion support.
- Existing `getting-ready.html`, `round1.html` through `round5.html`, `challenge1.html` and `final-room.html` URLs continue working.

## GitHub Pages

In the repository's **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/ (root)**. All site files are static and use relative links, including under a repository subpath. No workflow or dependencies are required. If Pages is already configured, retain the existing configuration.

## Local preview

From the repository directory:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. Serve over HTTP instead of opening files directly for reliable clipboard and storage behaviour. Clipboard may be unavailable in some browser contexts; manual selection remains possible. Progress cannot sync between devices. Clearing browser storage clears progress.

## Add or edit challenges

Edit `assets/challenges.js`. Each record supplies a unique `id`, title, level (`Beginner`, `Intermediate`, `Advanced`), category, brief, evidence, accepted answers, exactly three hints, explanation, point value, and `original` flag. `settings` supplies optional readable recipe parameters. Keep new evidence synthetic. If the catalogue size changes, update the homepage totals and progress maximum.

Answer checking ignores case, repeated spaces, curly quotes, and final `.`, `!`, or `?`. It keeps meaningful punctuation inside the answer and never renders submitted answers as HTML.

## Verification

```sh
node --check assets/app.js
node --check assets/challenges.js
node tests/interactions.cjs
python tests/verify.py
```

The reference checks independently decode the generated evidence, verify the six-room catalogue, check the log rule, and inspect local links. AES verification uses the optional Python `cryptography` package and is skipped if it is unavailable. These checks do not replace testing the recipes in CyberChef or visual testing in browsers.

## Source and adaptations

The six original exercises come from [CyberChef Challenge](https://sites.google.com/view/cyberchefchallenge/home). The author is credited with a link in every page's footer. No ownership or licence of the original material is asserted; attribution is not a reuse licence. Confirm the original author's reuse terms before wider distribution. Original images and Google Forms are not copied.

- Caesar, binary and Base64 evidence retained.
- AES ciphertext retained and independently decrypted. Image-only parameters transcribed as UTF-8 key `MATRIXMATRIXMATR`, hex IV `DEADBEEFDEADBEEFDEADBEEFDEADBEEF`, AES-CBC and PKCS#7 padding. The ciphertext is not a SHA-256 hash.
- Virus riddle and hexadecimal clue retained with a clearer technical explanation.
- Final original token sequence retained: it represents individual base-32 character codes, not standard Base32 byte-stream encoding. Invalid Python replaced by explicit decoding instructions.
- Existing repository Somerset greeting, hash comparison and quishing topics retained among the bonuses.

[CyberChef](https://github.com/gchq/CyberChef) is provided by GCHQ under its own licence; this site links to the official hosted tool rather than copying it.

This is a learning activity. Static-site answers and progress are inspectable and editable by a participant; local points are not suitable for a trusted competitive leaderboard. No real malware, credential harvesting or live targets are included.
