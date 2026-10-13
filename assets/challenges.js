/* Original exercises adapted with attribution; all additional evidence is synthetic. */
const CHALLENGES = [
  {
    "id": "getting-ready",
    "title": "Mission briefing",
    "level": "Beginner",
    "category": "Ciphers",
    "brief": "Use CyberChef to solve this task. Learn the recipe workflow: find an operation, drag it into Recipe, paste the clue into Input and read Output. Decode the message to find the meeting point.",
    "evidence": "Phhw ph dw wkh pdlq grruv.",
    "answers": [
      "Meet me at the main doors."
    ],
    "hints": [
      "Each letter has moved three places forward.",
      "Search CyberChef for ROT13; its Amount can be changed.",
      "Set Amount to 23 (equivalent to shifting back three)."
    ],
    "solution": "ROT13 with Amount 23 produces “Meet me at the main doors.” Caesar ciphers obscure text but are not secure modern encryption.",
    "original": true,
    "settings": "",
    "points": 100,
    "operations": [
      "ROT13"
    ]
  },
  {
    "id": "round1",
    "title": "The binary door",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "Use CyberChef to decode the binary note on the locked room’s security panel. Submit the complete decoded sentence, including the passphrase.",
    "evidence": "01010100 01101000 01100101 00100000 01110000 01100001 01110011 01110011 01110000 01101000 01110010 01100001 01110011 01100101 00100000 01101001 01110011 00100000 00100010 01001101 01000001 01010100 01010010 01001001 01011000 00100010 00101110",
    "answers": [
      "The passphrase is \"MATRIX\"."
    ],
    "hints": [
      "The groups contain only zeroes and ones.",
      "Each eight-bit group represents a character.",
      "Use From Binary with a space delimiter."
    ],
    "solution": "From Binary produces The passphrase is \"MATRIX\". Encoding changes representation; it does not keep a message secret.",
    "original": true,
    "settings": "",
    "points": 100,
    "revision": 2,
    "operations": [
      "From Binary"
    ]
  },
  {
    "id": "round2",
    "title": "The white rabbit corridor",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. Four doors are labelled itoa64, URL Safe, Radix-64 and BinHex. A note marked “base64” holds your next instruction. Decode it.",
    "evidence": "Rm9sbG93IHRoZSB3aGl0ZSByYWJiaXQu",
    "answers": [
      "Follow the white rabbit."
    ],
    "hints": [
      "This is an encoding, not encryption.",
      "Use the label on the note rather than guessing from the doors.",
      "Use From Base64 with the standard alphabet."
    ],
    "solution": "From Base64 yields “Follow the white rabbit.” Base64 is commonly used to transport bytes as text.",
    "original": true,
    "settings": "",
    "points": 100,
    "operations": [
      "From Base64"
    ]
  },
  {
    "id": "round3",
    "title": "The animal courtyard",
    "level": "Intermediate",
    "category": "Encryption",
    "brief": "Use CyberChef to decrypt the animal courtyard note using the supplied AES settings. Submit the complete decoded note, including its access code. The earlier corridor clue alone will not open this lock.",
    "evidence": "1c370c494cf2367de0d06dee51db433cd3d0234c4c2b0d7640c73652d389e7bb6e18fdc3f5f902e6af4482669a2aaea8319b3c898d07e2fc3caf626488d82092",
    "answers": [
      "Follow the white rabbit. Access code: RABBIT-7319."
    ],
    "hints": [
      "A 64-character hexadecimal string is not necessarily a hash.",
      "Use AES Decrypt, not AES Encrypt.",
      "Set input to Hex, output to Raw, mode CBC, and use the supplied key and IV."
    ],
    "solution": "AES Decrypt with the supplied UTF8 key and Hex IV, CBC mode, Hex input and Raw output recovers the complete note and its unique access code. This adapted ciphertext keeps the original animal-courtyard puzzle but prevents repeating round 2’s answer.",
    "original": true,
    "settings": "AES key: MATRIXMATRIXMATR\nKey format: UTF8\nIV: DEADBEEFDEADBEEFDEADBEEFDEADBEEF\nIV format: Hex\nMode: CBC\nPadding: PKCS#7 (default)\nDecrypt input: Hex\nDecrypt output: Raw",
    "points": 200,
    "revision": 2,
    "operations": [
      "AES Decrypt"
    ]
  },
  {
    "id": "round4",
    "title": "Mischief in the burrow",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "Use CyberChef to decode the hexadecimal evidence in the burrow. The old riddle describes malicious code, but naming it is not enough: submit the complete decoded message and access code.",
    "evidence": "56 69 72 75 73 20 69 64 65 6e 74 69 66 69 65 64 2e 20 42 75 72 72 6f 77 20 61 63 63 65 73 73 20 63 6f 64 65 3a 20 56 31 52 55 53 2d 38 30 34 32 2e",
    "answers": [
      "Virus identified. Burrow access code: V1RUS-8042."
    ],
    "hints": [
      "The riddle supplies context; the access code is inside the encoded evidence.",
      "Each pair of hexadecimal digits represents a byte.",
      "Use From Hex with a space delimiter and submit the whole output."
    ],
    "solution": "From Hex reveals the identification and burrow access code. This enhances the original virus riddle with an answer that must be recovered from the supplied evidence.",
    "original": true,
    "settings": "",
    "points": 100,
    "revision": 2,
    "operations": [
      "From Hex"
    ]
  },
  {
    "id": "round5",
    "title": "Hidden in plain sight",
    "level": "Intermediate",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. A final note contains numbered character values. Repair the idea behind the original broken code: interpret each token in base 32, then convert its number to a character. Submit the message.",
    "evidence": "24 3f 3e 17 3k 10 3l 3j 35 10 2h 2i 10 23 3f 34 35 3j 11 0a",
    "answers": [
      "Don't use QR Codes!"
    ],
    "hints": [
      "Letters such as k show these are not hexadecimal values.",
      "These are individual base-32 integers, not an RFC 4648 Base32-encoded string.",
      "Use From Charcode. Set Delimiter to Space and Base to 32. Do not use From Base32 or From Base."
    ],
    "solution": "From Charcode with Delimiter Space and Base 32 converts each token directly to a character. 24 → 68 → D, 3f → 111 → o. The message is “Don't use QR Codes!” This is a historical puzzle slogan; QR codes themselves are not inherently unsafe. Inspect their destinations and verify unexpected requests.",
    "original": true,
    "settings": "",
    "points": 200,
    "operations": [
      "From Charcode"
    ]
  },
  {
    "id": "hex-helpdesk",
    "title": "Helpdesk intercept",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. A console alert contains an encoded greeting. Recover it.",
    "evidence": "48656c6c6f20536f6d657273657421",
    "answers": [
      "Hello Somerset!"
    ],
    "hints": [
      "Only digits and letters a–f appear.",
      "Two digits encode one byte.",
      "Use From Hex."
    ],
    "solution": "From Hex gives “Hello Somerset!” This preserves the repository’s existing Somerset puzzle.",
    "original": false,
    "settings": "",
    "points": 100,
    "operations": [
      "From Hex"
    ]
  },
  {
    "id": "rot13",
    "title": "The rotated locker",
    "level": "Beginner",
    "category": "Ciphers",
    "brief": "Use CyberChef to solve this task. The locker label has been rotated. Find its instruction.",
    "evidence": "Bcra gur oyhr ybpxre.",
    "answers": [
      "Open the blue locker."
    ],
    "hints": [
      "The letters look familiar, but shifted.",
      "The alphabet has 26 letters; try half a turn.",
      "Use ROT13 with Amount 13."
    ],
    "solution": "ROT13 applied twice returns the original text. This is obfuscation, not secure encryption.",
    "original": false,
    "settings": "",
    "points": 100,
    "operations": [
      "ROT13"
    ]
  },
  {
    "id": "reverse",
    "title": "Mirror message",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. A mirror beside a terminal gives you a clue. Recover the message.",
    "evidence": ".rotinom eht dniheb kcehC",
    "answers": [
      "Check behind the monitor."
    ],
    "hints": [
      "Read from the other end.",
      "The whole character sequence is reversed.",
      "Use Reverse."
    ],
    "solution": "Reverse restores “Check behind the monitor.”",
    "original": false,
    "settings": "",
    "points": 100,
    "operations": [
      "Reverse"
    ]
  },
  {
    "id": "url",
    "title": "The escaped link",
    "level": "Beginner",
    "category": "Web",
    "brief": "Use CyberChef to solve this task. Recover the destination text. You only need to decode it; no link needs to be visited.",
    "evidence": "https%3A%2F%2Ftraining.example%2Fvault%3Fcode%3D7429",
    "answers": [
      "https://training.example/vault?code=7429"
    ],
    "hints": [
      "Look for percent signs.",
      "%3A represents a colon.",
      "Use URL Decode."
    ],
    "solution": "URL Decode restores the URL. training.example is fictional training evidence. Encoding alone says nothing about whether a URL is safe.",
    "original": false,
    "settings": "",
    "points": 100,
    "operations": [
      "URL Decode"
    ]
  },
  {
    "id": "morse",
    "title": "Radio room",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. A radio operator left this signal. Decode the two-word instruction.",
    "evidence": "--- .--. . -. / ... . ... .- -- .",
    "answers": [
      "OPEN SESAME"
    ],
    "hints": [
      "Dots and dashes form letters.",
      "A slash separates words.",
      "Use From Morse Code: letter delimiter Space, word delimiter Forward slash."
    ],
    "solution": "From Morse Code yields OPEN SESAME.",
    "original": false,
    "settings": "",
    "points": 100,
    "operations": [
      "From Morse Code"
    ]
  },
  {
    "id": "decimal",
    "title": "Numbered keypad",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. A label contains decimal character codes. Recover the access phrase.",
    "evidence": "65 67 67 69 83 83 32 71 82 65 78 84 69 68",
    "answers": [
      "ACCESS GRANTED"
    ],
    "hints": [
      "These are numbers in base ten.",
      "65 corresponds to uppercase A.",
      "Use From Charcode with base 10."
    ],
    "solution": "From Charcode maps decimal values to “ACCESS GRANTED”.",
    "original": false,
    "settings": "",
    "points": 100,
    "operations": [
      "From Charcode"
    ]
  },
  {
    "id": "sha256",
    "title": "Fingerprint check",
    "level": "Intermediate",
    "category": "Hashes",
    "brief": "Use CyberChef to identify which lowercase label (rabbit, fox or owl) matches the supplied SHA-256 digest. Then hash that label followed immediately by :vault-73. Submit the NEW full SHA-256 digest, not the animal name or the digest already shown. Do not add a newline.",
    "evidence": "d37d96b42ad43384915e4513505c30c0b1c4e7c765b5577eda25b5dbd7f26d89",
    "answers": [
      "c2618014635a7d8c94d6df51cfa8d0bfa33f637618ffeba927f8e66aff6a392d"
    ],
    "hints": [
      "Use SHA2 with size 256 on each lowercase candidate.",
      "Once a candidate matches, append the exact suffix :vault-73 to that candidate as a new input.",
      "Hash the new input with SHA2, size 256. Submit all 64 hexadecimal characters."
    ],
    "solution": "SHA2 (256) identifies rabbit as the matching candidate. A second SHA2 (256) operation on rabbit:vault-73 produces c2618014635a7d8c94d6df51cfa8d0bfa33f637618ffeba927f8e66aff6a392d. The second digest demonstrates the transformation; guessing an animal name is not an accepted answer.",
    "original": false,
    "settings": "",
    "points": 200,
    "revision": 2,
    "operations": [
      "SHA2"
    ]
  },
  {
    "id": "quishing",
    "title": "The QR upgrade",
    "level": "Beginner",
    "category": "Web",
    "brief": "Use CyberChef to inspect an encoded destination recovered from a suspicious “mandatory security upgrade” QR email. Remove its two transport encodings and submit the complete decoded URL, including the ticket. Work with the supplied text; do not visit the destination.",
    "evidence": "aHR0cHMlM0ElMkYlMkZzZWN1cml0eS11cGdyYWRlLmV4YW1wbGUlMkZ2ZXJpZnklM0Z0aWNrZXQlM0RRUi02Mjg0",
    "answers": [
      "https://security-upgrade.example/verify?ticket=QR-6284"
    ],
    "hints": [
      "The outer layer is Base64; decoding it will expose percent escapes.",
      "A percent sign followed by two hexadecimal digits indicates URL encoding.",
      "Use From Base64 → URL Decode. Submit the full URL, including its ticket."
    ],
    "solution": "From Base64 → URL Decode recovers https://security-upgrade.example/verify?ticket=QR-6284. This retains the quishing scenario while making the task a CyberChef decoding exercise. An urgent QR request still needs independent verification; the example destination is synthetic.",
    "original": false,
    "settings": "",
    "points": 100,
    "revision": 2,
    "operations": [
      "From Base64",
      "URL Decode"
    ]
  },
  {
    "id": "double-base64",
    "title": "Two envelopes",
    "level": "Intermediate",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. The note has been wrapped twice. Recover the instruction.",
    "evidence": "VEc5dmF5QjFibVJsY2lCMGFHVWdaR1Z6YXk0PQ==",
    "answers": [
      "Look under the desk."
    ],
    "hints": [
      "One decode is not the end.",
      "If the output still looks encoded, inspect it again.",
      "Use From Base64 twice."
    ],
    "solution": "Two From Base64 operations reveal “Look under the desk.”",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From Base64"
    ]
  },
  {
    "id": "hex-base64",
    "title": "Nested parcel",
    "level": "Intermediate",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. A parcel has a hexadecimal outer wrapping and another text encoding inside.",
    "evidence": "5647686c4947746c65534270637942706269426b636d46335a5849674e43343d",
    "answers": [
      "The key is in drawer 4."
    ],
    "hints": [
      "Remove the outer wrapping first.",
      "The first stage is From Hex.",
      "Then apply From Base64."
    ],
    "solution": "From Hex → From Base64 gives “The key is in drawer 4.” Recipe order matters.",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From Hex",
      "From Base64"
    ]
  },
  {
    "id": "base64-rot",
    "title": "Shifted dispatch",
    "level": "Intermediate",
    "category": "Ciphers",
    "brief": "Use CyberChef to solve this task. Decode the transport envelope, then undo a 13-letter rotation.",
    "evidence": "WnJyZyBuZyBndXIgYWJlZ3UgdG5nci4=",
    "answers": [
      "Meet at the north gate."
    ],
    "hints": [
      "The outside is Base64.",
      "The decoded words are still shifted.",
      "Use From Base64 then ROT13."
    ],
    "solution": "From Base64 → ROT13 recovers “Meet at the north gate.”",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From Base64",
      "ROT13"
    ]
  },
  {
    "id": "html",
    "title": "Webpage fragment",
    "level": "Beginner",
    "category": "Web",
    "brief": "Use CyberChef to solve this task. A page has escaped its message for HTML. Recover the readable text.",
    "evidence": "The safe word is &#83;&#65;&#70;&#69; &amp; SOUND.",
    "answers": [
      "The safe word is SAFE & SOUND."
    ],
    "hints": [
      "The ampersands introduce HTML entities.",
      "&#83; is a decimal character reference.",
      "Use From HTML Entity."
    ],
    "solution": "From HTML Entity produces “The safe word is SAFE & SOUND.”",
    "original": false,
    "settings": "",
    "points": 100,
    "operations": [
      "From HTML Entity"
    ]
  },
  {
    "id": "base32",
    "title": "Archive label",
    "level": "Intermediate",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. Decode this standard Base32 archive label. Unlike the final original room, this is a complete encoded byte stream.",
    "evidence": "IFJEGSCJKZCSAU2FKZCU4===",
    "answers": [
      "ARCHIVE SEVEN"
    ],
    "hints": [
      "Letters A–Z and digits 2–7 are a clue.",
      "This uses RFC 4648 Base32.",
      "Use From Base32 with the default alphabet."
    ],
    "solution": "From Base32 gives ARCHIVE SEVEN. Base32 encoding differs from interpreting individual numbers in radix 32.",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From Base32"
    ]
  },
  {
    "id": "xor",
    "title": "One-byte lock",
    "level": "Advanced",
    "category": "Encryption",
    "brief": "Use CyberChef to solve this task. Recover this toy encrypted note. The single-byte key is 2a in hexadecimal. Output the plaintext.",
    "evidence": "6c666b6d5165646f7568737e6f75616f7357",
    "answers": [
      "FLAG{ONE_BYTE_KEY}"
    ],
    "hints": [
      "Convert Hex to bytes first.",
      "Use XOR with key 2a and key format Hex.",
      "From Hex → XOR; scheme Standard, output raw text."
    ],
    "solution": "From Hex → XOR with key 2a reveals FLAG{ONE_BYTE_KEY}. Repeating a one-byte XOR key is not secure encryption.",
    "original": false,
    "settings": "",
    "points": 300,
    "operations": [
      "From Hex",
      "XOR"
    ]
  },
  {
    "id": "gzip",
    "title": "Compressed evidence",
    "level": "Advanced",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. An evidence export was compressed before being encoded for transport. Restore its text.",
    "evidence": "H4sIAAAAAAACA3PzcXSvDvULcHT2jg/xcI13DfN0cfVzdq0FAD2wPIAZAAAA",
    "answers": [
      "FLAG{UNPACK_THE_EVIDENCE}"
    ],
    "hints": [
      "The transport layer is Base64.",
      "Decoded bytes begin with the gzip signature 1f 8b.",
      "Use From Base64 → Gunzip."
    ],
    "solution": "From Base64 → Gunzip reveals FLAG{UNPACK_THE_EVIDENCE}. Compression is not encryption.",
    "original": false,
    "settings": "",
    "points": 300,
    "operations": [
      "From Base64",
      "Gunzip"
    ]
  },
  {
    "id": "logs",
    "title": "SOC triage",
    "level": "Intermediate",
    "category": "Investigation",
    "brief": "Use CyberChef to unpack an encoded SOC log export: its outer layer is Base64, its inner layer is hexadecimal text. Find the account/source with three failed logins followed by success. Submit the SESSION identifier from that successful event, not the IP address.",
    "evidence": "MzAzOTNhMzAzMDIwNzU3MzY1NzIzZDYxNmM2NTc4MjA3MzcyNjMzZDMxMzkzMjJlMzAyZTMyMmUzMTM0MzcyMDZmNzU3NDYzNmY2ZDY1M2Q0NjQxNDk0YzBhMzAzOTNhMzAzMTIwNzU3MzY1NzIzZDYxNmM2NTc4MjA3MzcyNjMzZDMxMzkzMjJlMzAyZTMyMmUzMTM0MzcyMDZmNzU3NDYzNmY2ZDY1M2Q0NjQxNDk0YzBhMzAzOTNhMzAzMjIwNzU3MzY1NzIzZDYxNmM2NTc4MjA3MzcyNjMzZDMxMzkzMjJlMzAyZTMyMmUzMTM0MzcyMDZmNzU3NDYzNmY2ZDY1M2Q0NjQxNDk0YzBhMzAzOTNhMzAzMzIwNzU3MzY1NzIzZDYxNmM2NTc4MjA3MzcyNjMzZDMxMzkzMjJlMzAyZTMyMmUzMTM0MzcyMDZmNzU3NDYzNmY2ZDY1M2Q1MzU1NDM0MzQ1NTM1MzIwNzM2NTczNzM2OTZmNmUzZDUzNGY0MzJkMzkzNDM3MzIwYTMwMzkzYTMwMzQyMDc1NzM2NTcyM2Q3MDYxNzQyMDczNzI2MzNkMzEzOTMyMmUzMDJlMzIyZTMyMzAyMDZmNzU3NDYzNmY2ZDY1M2Q1MzU1NDM0MzQ1NTM1MzIwNzM2NTczNzM2OTZmNmUzZDUzNGY0MzJkMzIzMTM1Mzg=",
    "answers": [
      "SOC-9472"
    ],
    "hints": [
      "Decode the transport envelope using From Base64. The output is still hexadecimal text.",
      "Apply From Hex next, then inspect the reconstructed event sequence.",
      "Find three FAIL events for one account/source, followed by SUCCESS. Submit that row’s session value."
    ],
    "solution": "From Base64 → From Hex restores the logs. alex at 192.0.2.147 has three failures followed by success with session SOC-9472. Decoding is required before triage. This pattern warrants investigation; it is not proof of compromise.",
    "original": false,
    "settings": "",
    "points": 200,
    "revision": 2,
    "operations": [
      "From Base64",
      "From Hex"
    ]
  },
  {
    "id": "timestamp",
    "title": "Timeline repair",
    "level": "Intermediate",
    "category": "Investigation",
    "brief": "Use CyberChef to solve this task. Convert this Unix timestamp in seconds to UTC. Submit the date as YYYY-MM-DD.",
    "evidence": "1704067200",
    "answers": [
      "2024-01-01"
    ],
    "hints": [
      "Unix time counts seconds since 1970-01-01 UTC.",
      "Use From UNIX Timestamp; select seconds.",
      "Read the result in UTC, not your local timezone."
    ],
    "solution": "1704067200 is 2024-01-01 00:00:00 UTC. Timezone and unit errors can distort incident timelines.",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From UNIX Timestamp"
    ]
  },
  {
    "id": "ioc",
    "title": "Defanged indicator",
    "level": "Intermediate",
    "category": "Web",
    "brief": "Use CyberChef to decode and restore an encoded, defanged indicator. Submit the complete restored URL, including the case reference. Analyse the text only; do not browse to it.",
    "evidence": "aHh4cHM6Ly9wb3J0YWxbLl1leGFtcGxlL2xvZ2luP2Nhc2U9SU9DLTU4MzE=",
    "answers": [
      "https://portal.example/login?case=IOC-5831"
    ],
    "hints": [
      "The transport layer is Base64. Decode it before restoring the URL.",
      "The decoded hxxps and [.] are intentional defanging substitutions.",
      "Use From Base64 → Fang URL. Submit the full restored URL, including the case reference."
    ],
    "solution": "From Base64 → Fang URL produces https://portal.example/login?case=IOC-5831. Defanging reduces accidental clicks. Restoring a URL is an analysis step, not an instruction to visit it.",
    "original": false,
    "settings": "",
    "points": 200,
    "revision": 2,
    "operations": [
      "From Base64",
      "Fang URL"
    ]
  },
  {
    "id": "final-recipe",
    "title": "The evidence vault",
    "level": "Advanced",
    "category": "Encoding",
    "brief": "Use CyberChef to solve this task. The final vault combines three layers. The outer layer is Base64, the middle is hexadecimal text, and the inner message has a 13-letter rotation. Recover the flag.",
    "evidence": "NTM1OTRlNTQ3YjUwNGM0ZjUyNDU1MDU1NTI1MzVmNTI0NjUwNGU0MzUyNWY1YTRlNDY0NzUyNDU3ZA==",
    "answers": [
      "FLAG{CYBERCHEF_ESCAPE_MASTER}"
    ],
    "hints": [
      "Peel off layers in the order given.",
      "The first output is hexadecimal text.",
      "Use From Base64 → From Hex → ROT13."
    ],
    "solution": "The full recipe reveals FLAG{CYBERCHEF_ESCAPE_MASTER}. Keep a record of each transformation so someone else can reproduce your result.",
    "original": false,
    "settings": "",
    "points": 300,
    "operations": [
      "From Base64",
      "From Hex",
      "ROT13"
    ]
  },
  {
    "id": "atbash",
    "title": "The alphabet mirror",
    "level": "Beginner",
    "category": "Ciphers",
    "brief": "Use CyberChef to recover the flag from a mirrored alphabet. Letters have been replaced by their partners at the opposite end of the alphabet; digits and punctuation stay in place.",
    "evidence": "UOZT{NRIILI_ZOKSZYVG_4826}",
    "answers": [
      "FLAG{MIRROR_ALPHABET_4826}"
    ],
    "hints": [
      "A becomes Z, B becomes Y, and so on.",
      "This is an Atbash substitution, not a simple rotation.",
      "Apply Atbash Cipher to the evidence."
    ],
    "solution": "Atbash Cipher mirrors alphabetic characters to recover the flag. Like Caesar ciphers, this is an educational substitution rather than secure encryption.",
    "original": false,
    "settings": "",
    "points": 100,
    "operations": [
      "Atbash Cipher"
    ],
    "revision": 1
  },
  {
    "id": "octal",
    "title": "The eight-digit lock",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "Use CyberChef to decode a keypad message written as octal character values. Submit the complete flag.",
    "evidence": "106 114 101 107 173 117 103 124 101 114 137 114 117 103 113 137 66 61 67 63 175",
    "answers": [
      "FLAG{OCTAL_LOCK_6173}"
    ],
    "hints": [
      "Every token uses only digits 0 through 7.",
      "The tokens represent character codes in base 8.",
      "Use From Octal with a Space delimiter."
    ],
    "solution": "From Octal maps each base-8 token to a character and reveals the flag.",
    "original": false,
    "settings": "",
    "points": 100,
    "operations": [
      "From Octal"
    ],
    "revision": 1
  },
  {
    "id": "utf16",
    "title": "The wide-character note",
    "level": "Intermediate",
    "category": "Encoding",
    "brief": "Use CyberChef to recover text from a Windows-style hexadecimal export. The original text uses UTF-16 little-endian character encoding. Submit the complete flag.",
    "evidence": "46 00 4c 00 41 00 47 00 7b 00 57 00 49 00 44 00 45 00 5f 00 54 00 45 00 58 00 54 00 5f 00 39 00 30 00 33 00 35 00 7d 00",
    "answers": [
      "FLAG{WIDE_TEXT_9035}"
    ],
    "hints": [
      "Many zero bytes appear between printable characters.",
      "First convert the hexadecimal representation into bytes.",
      "Use From Hex → Decode text; choose UTF-16LE (1200)."
    ],
    "solution": "From Hex restores the bytes; Decode text with UTF-16LE (1200) interprets pairs of bytes correctly. Removing zeroes is not a general substitute for decoding UTF-16.",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From Hex",
      "Decode text"
    ],
    "revision": 1
  },
  {
    "id": "hexdump",
    "title": "The damaged export",
    "level": "Intermediate",
    "category": "Forensics",
    "brief": "Use CyberChef to reconstruct a flag from a hexdump containing offsets and hexadecimal bytes. The ASCII preview was omitted from the export. Submit the decoded output.",
    "evidence": "00000000  46 4c 41 47 7b 48 45 58  44 55 4d 50 5f 52 45 43  \n00000010  4f 56 45 52 59 5f 32 36  35 38 7d  ",
    "answers": [
      "FLAG{HEXDUMP_RECOVERY_2658}"
    ],
    "hints": [
      "The offsets at the start of each line are formatting, not part of the data.",
      "From Hex alone can accidentally include the offsets.",
      "Use From Hexdump on the complete evidence."
    ],
    "solution": "From Hexdump strips the export formatting and reconstructs only the data bytes. The result is the flag.",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From Hexdump"
    ],
    "revision": 1
  },
  {
    "id": "extract-urls",
    "title": "URLs in the noise",
    "level": "Intermediate",
    "category": "Investigation",
    "brief": "Use CyberChef to decode the Base64 event export, then use an extraction operation to list just its two URLs. Submit both URLs in the original order, separated by a space or newline.",
    "evidence": "ZXZlbnQ9ZG93bmxvYWQgdXJsPWh0dHBzOi8vZGVsaXZlcnkuZXhhbXBsZS9maWxlcy9BN1E0CnVzZXI9YW5hbHlzdCBub3RlPXJldmlldwpldmVudD1jYWxsYmFjayB1cmw9aHR0cHM6Ly9zdGF0dXMuZXhhbXBsZS9jaGVjay9COU0y",
    "answers": [
      "https://delivery.example/files/A7Q4\nhttps://status.example/check/B9M2"
    ],
    "hints": [
      "The outer representation is Base64.",
      "After decoding, filter the mixed log text for URL values.",
      "Use From Base64 → Extract URLs; leave Only show hostname unticked."
    ],
    "solution": "From Base64 restores the mixed event text. Extract URLs lists the two complete URLs, without the surrounding log fields. The example domains are synthetic; visiting them is not part of the task.",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From Base64",
      "Extract URLs"
    ],
    "revision": 1
  },
  {
    "id": "extract-ips",
    "title": "Indicator roundup",
    "level": "Intermediate",
    "category": "Investigation",
    "brief": "Use CyberChef to decode a sensor report and extract its IPv4 addresses. Submit only the two addresses in their original order, separated by a space or newline.",
    "evidence": "c2Vuc29yPXdlc3Qgc3JjPTE5Mi4wLjIuODcgb3V0Y29tZT1ERU5ZCnNlbnNvcj1lYXN0IHNyYz0xOTguNTEuMTAwLjY0IG91dGNvbWU9QUxMT1cKY2FzZT02NDkyIG5vdGU9bm8tYWRkcmVzcy1oZXJl",
    "answers": [
      "192.0.2.87\n198.51.100.64"
    ],
    "hints": [
      "The numeric case ID is not an IP address.",
      "Decode the Base64 layer before extracting indicators.",
      "Use From Base64 → Extract IP addresses with IPv4 enabled and IPv6 disabled."
    ],
    "solution": "The recipe produces 192.0.2.87 and 198.51.100.64. Documentation-only address ranges keep this exercise independent of real targets.",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From Base64",
      "Extract IP addresses"
    ],
    "revision": 1
  },
  {
    "id": "json-config",
    "title": "The configuration vault",
    "level": "Intermediate",
    "category": "Web",
    "brief": "Use CyberChef to decode and format a Base64 configuration export. Find the access_token inside the vault object and submit its complete value.",
    "evidence": "eyJldmVudCI6InJlY292ZXJlZF9jb25maWciLCJkZWNveSI6Im5vdC10aGUtYW5zd2VyIiwidmF1bHQiOnsiYWNjZXNzX3Rva2VuIjoiRkxBR3tKU09OX1ZBVUxUXzcxODR9IiwiZXhwaXJlcyI6InRyYWluaW5nLW9ubHkifX0=",
    "answers": [
      "FLAG{JSON_VAULT_7184}"
    ],
    "hints": [
      "The export is Base64-encoded JSON.",
      "Readable indentation will help reveal the nested vault object.",
      "Use From Base64 → JSON Beautify, then read vault.access_token."
    ],
    "solution": "The recipe restores and formats the JSON. The nested access_token is the requested flag; the decoy field is not the answer.",
    "original": false,
    "settings": "",
    "points": 200,
    "operations": [
      "From Base64",
      "JSON Beautify"
    ],
    "revision": 1
  },
  {
    "id": "raw-deflate",
    "title": "The headerless archive",
    "level": "Advanced",
    "category": "Compression",
    "brief": "Use CyberChef to restore a hexadecimal export of a raw DEFLATE stream. This stream has no gzip or zlib wrapper. Submit the recovered flag.",
    "evidence": "73f37174af0e720c8f777175f3710c718d37b53436af0500",
    "answers": [
      "FLAG{RAW_DEFLATE_5937}"
    ],
    "hints": [
      "The hexadecimal layer is only the transport representation.",
      "Gunzip expects a gzip wrapper; this evidence does not have one.",
      "Use From Hex → Raw Inflate with its default settings."
    ],
    "solution": "From Hex restores the compressed bytes. Raw Inflate decompresses the headerless DEFLATE stream and reveals the flag.",
    "original": false,
    "settings": "",
    "points": 300,
    "operations": [
      "From Hex",
      "Raw Inflate"
    ],
    "revision": 1
  },
  {
    "id": "xor-search",
    "title": "The missing XOR key",
    "level": "Advanced",
    "category": "Encryption",
    "brief": "Use CyberChef to recover a flag encrypted with an unknown repeating single-byte XOR key. The plaintext begins with FLAG{. Use CyberChef to search the key space and submit the plaintext flag, without the key label.",
    "evidence": "717b76704c62797c79786079686f7865687c726e680f0301054a",
    "answers": [
      "FLAG{UNKNOWN_XOR_KEY_8462}"
    ],
    "hints": [
      "The hexadecimal input needs to become bytes first.",
      "For a one-byte XOR key there are only 256 possibilities.",
      "Use From Hex → XOR Brute Force. Set Key length to 1, Sample length to 100, and Crib to FLAG{. Copy the readable flag from the matching output."
    ],
    "solution": "XOR Brute Force identifies key 37 (hexadecimal) and reveals the flag. The known prefix is a crib that helps isolate readable output. This demonstrates why repeating one-byte XOR is weak.",
    "original": false,
    "settings": "",
    "points": 300,
    "operations": [
      "From Hex",
      "XOR Brute Force"
    ],
    "revision": 1
  },
  {
    "id": "evidence-hash",
    "title": "Evidence integrity check",
    "level": "Advanced",
    "category": "Hashes",
    "brief": "Use CyberChef to calculate the SHA-256 fingerprint of the exact bytes inside this Base64 evidence package. Decode first, then hash the decoded bytes. Submit all 64 hexadecimal characters. Preserve the final newline.",
    "evidence": "Y2FzZV9pZCxzdGF0dXMKQ0hLLTM4Mjcsc2VhbGVkCkNISy02NDU5LHJldmlldwo=",
    "answers": [
      "883b0006844afc192f31f22efce39cbbee0e71463ec167fe81186030cb174f08"
    ],
    "hints": [
      "Hashing the Base64 text produces a different digest.",
      "The decoded package contains CSV text, including line-feed bytes.",
      "Use From Base64 → SHA2, size 256. Do not edit the intermediate output."
    ],
    "solution": "The recipe hashes the exact decoded evidence bytes, producing 883b0006844afc192f31f22efce39cbbee0e71463ec167fe81186030cb174f08. Even changing a newline changes the fingerprint.",
    "original": false,
    "settings": "",
    "points": 300,
    "operations": [
      "From Base64",
      "SHA2"
    ],
    "revision": 1
  }
];
