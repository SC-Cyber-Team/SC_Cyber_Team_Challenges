/* Original exercises adapted with attribution; all additional evidence is synthetic. */
const CHALLENGES = [
  {
    "id": "getting-ready",
    "title": "Mission briefing",
    "level": "Beginner",
    "category": "Ciphers",
    "brief": "Learn the recipe workflow: find an operation, drag it into Recipe, paste the clue into Input and read Output. Decode the message to find the meeting point.",
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
    "points": 100
  },
  {
    "id": "round1",
    "title": "The binary door",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "You are trapped in a locked room. A note tells you what to enter on the security panel. Submit the passphrase, or the complete decoded sentence.",
    "evidence": "01010100 01101000 01100101 00100000 01110000 01100001 01110011 01110011 01110000 01101000 01110010 01100001 01110011 01100101 00100000 01101001 01110011 00100000 00100010 01001101 01000001 01010100 01010010 01001001 01011000 00100010 00101110",
    "answers": [
      "MATRIX",
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
    "points": 100
  },
  {
    "id": "round2",
    "title": "The white rabbit corridor",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "Four doors are labelled itoa64, URL Safe, Radix-64 and BinHex. A note marked “base64” holds your next instruction. Decode it.",
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
    "points": 100
  },
  {
    "id": "round3",
    "title": "The animal courtyard",
    "level": "Intermediate",
    "category": "Encryption",
    "brief": "A courtyard is full of animals. A keyboard holds an encrypted note and the settings used to encrypt it. Decrypt the note and submit the instruction, or name the animal to follow.",
    "evidence": "1c370c494cf2367de0d06dee51db433ccf5104fc344c0cab9c1b353b1c4c50cf",
    "answers": [
      "Follow the white rabbit.",
      "white rabbit",
      "rabbit"
    ],
    "hints": [
      "A 64-character hexadecimal string is not necessarily a hash.",
      "Use AES Decrypt, not AES Encrypt.",
      "Set input to Hex, output to Raw, mode CBC, and use the supplied key and IV."
    ],
    "solution": "AES-CBC decryption produces “Follow the white rabbit.” followed by a newline. The original ciphertext is retained; its image-only parameters are now readable text.",
    "original": true,
    "settings": "AES key: MATRIXMATRIXMATR\nKey format: UTF8\nIV: DEADBEEFDEADBEEFDEADBEEFDEADBEEF\nIV format: Hex\nMode: CBC\nPadding: PKCS#7 (default)\nDecrypt input: Hex\nDecrypt output: Raw",
    "points": 200
  },
  {
    "id": "round4",
    "title": "Mischief in the burrow",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "You follow the creature to its burrow. A note reads: “I’m a prankster and hacker’s delight, mischief and mayhem are my blight. Beware of my traps and tricks, I’m that code with malicious kicks.” What am I? A hexadecimal clue is available below.",
    "evidence": "56 69 72 75 73 0a",
    "answers": [
      "Virus"
    ],
    "hints": [
      "The answer is a type of malicious code.",
      "The clue contains hexadecimal character values.",
      "Use From Hex. Ignore the final newline."
    ],
    "solution": "From Hex yields “Virus”. The riddle uses “virus” broadly; technically a virus replicates by infecting other files or programs.",
    "original": true,
    "settings": "",
    "points": 100
  },
  {
    "id": "round5",
    "title": "Hidden in plain sight",
    "level": "Intermediate",
    "category": "Encoding",
    "brief": "A final note contains numbered character values. Repair the idea behind the original broken code: interpret each token in base 32, then convert its number to a character. Submit the message.",
    "evidence": "24 3f 3e 17 3k 10 3l 3j 35 10 2h 2i 10 23 3f 34 35 3j 11 0a",
    "answers": [
      "Don't use QR Codes!"
    ],
    "hints": [
      "Letters such as k show these are not hexadecimal values.",
      "These are individual base-32 integers, not an RFC 4648 Base32-encoded string.",
      "Use From Base with radix 32, then From Charcode with base 10; preserve space-separated tokens between stages."
    ],
    "solution": "Each token is a base-32 character code. 24 → 68 → D, 3f → 111 → o. The message is “Don't use QR Codes!” The original invalid Python is replaced by an explicit conversion task.",
    "original": true,
    "settings": "",
    "points": 200
  },
  {
    "id": "hex-helpdesk",
    "title": "Helpdesk intercept",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "A console alert contains an encoded greeting. Recover it.",
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
    "points": 100
  },
  {
    "id": "rot13",
    "title": "The rotated locker",
    "level": "Beginner",
    "category": "Ciphers",
    "brief": "The locker label has been rotated. Find its instruction.",
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
    "points": 100
  },
  {
    "id": "reverse",
    "title": "Mirror message",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "A mirror beside a terminal gives you a clue. Recover the message.",
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
    "points": 100
  },
  {
    "id": "url",
    "title": "The escaped link",
    "level": "Beginner",
    "category": "Web",
    "brief": "Recover the destination text. You only need to decode it; no link needs to be visited.",
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
    "points": 100
  },
  {
    "id": "morse",
    "title": "Radio room",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "A radio operator left this signal. Decode the two-word instruction.",
    "evidence": "--- .--. . -. / ... . ... .- -- .",
    "answers": [
      "OPEN SESAME"
    ],
    "hints": [
      "Dots and dashes form letters.",
      "A slash separates words.",
      "Use From Morse Code: letter delimiter Space, word delimiter Slash."
    ],
    "solution": "From Morse Code yields OPEN SESAME.",
    "original": false,
    "settings": "",
    "points": 100
  },
  {
    "id": "decimal",
    "title": "Numbered keypad",
    "level": "Beginner",
    "category": "Encoding",
    "brief": "A label contains decimal character codes. Recover the access phrase.",
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
    "points": 100
  },
  {
    "id": "sha256",
    "title": "Fingerprint check",
    "level": "Intermediate",
    "category": "Hashes",
    "brief": "Three animal labels are rabbit, fox and owl. Hash each lowercase label using SHA2 with size 256 and identify the match. Do not add a newline.",
    "evidence": "d37d96b42ad43384915e4513505c30c0b1c4e7c765b5577eda25b5dbd7f26d89",
    "answers": [
      "rabbit"
    ],
    "hints": [
      "Hashes are compared, not decrypted.",
      "Use each of the three candidates as Input.",
      "Use SHA2, size 256, and match the complete digest."
    ],
    "solution": "SHA-256 of the lowercase UTF-8 text rabbit matches. Length alone does not prove an algorithm. This replaces the repository’s ambiguous hash-identification question with a verifiable comparison.",
    "original": false,
    "settings": "",
    "points": 200
  },
  {
    "id": "quishing",
    "title": "The QR upgrade",
    "level": "Beginner",
    "category": "Awareness",
    "brief": "An email says “Mandatory security upgrade: scan this QR code on your phone and enter your work password.” What is phishing using QR codes commonly called?",
    "evidence": "URGENT: Scan to keep your account active.",
    "answers": [
      "quishing",
      "QR phishing",
      "QR code phishing"
    ],
    "hints": [
      "Moving to a phone does not make the request trustworthy.",
      "Combine QR codes with phishing.",
      "The common term starts with qui."
    ],
    "solution": "Quishing is phishing using QR codes. Verify requests through a known channel and inspect the destination before opening. This retains the repository’s QR-awareness question.",
    "original": false,
    "settings": "",
    "points": 100
  },
  {
    "id": "double-base64",
    "title": "Two envelopes",
    "level": "Intermediate",
    "category": "Encoding",
    "brief": "The note has been wrapped twice. Recover the instruction.",
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
    "points": 200
  },
  {
    "id": "hex-base64",
    "title": "Nested parcel",
    "level": "Intermediate",
    "category": "Encoding",
    "brief": "A parcel has a hexadecimal outer wrapping and another text encoding inside.",
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
    "points": 200
  },
  {
    "id": "base64-rot",
    "title": "Shifted dispatch",
    "level": "Intermediate",
    "category": "Ciphers",
    "brief": "Decode the transport envelope, then undo a 13-letter rotation.",
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
    "points": 200
  },
  {
    "id": "html",
    "title": "Webpage fragment",
    "level": "Beginner",
    "category": "Web",
    "brief": "A page has escaped its message for HTML. Recover the readable text.",
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
    "points": 100
  },
  {
    "id": "base32",
    "title": "Archive label",
    "level": "Intermediate",
    "category": "Encoding",
    "brief": "Decode this standard Base32 archive label. Unlike the final original room, this is a complete encoded byte stream.",
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
    "points": 200
  },
  {
    "id": "xor",
    "title": "One-byte lock",
    "level": "Advanced",
    "category": "Encryption",
    "brief": "Recover this toy encrypted note. The single-byte key is 2a in hexadecimal. Output the plaintext.",
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
    "points": 300
  },
  {
    "id": "gzip",
    "title": "Compressed evidence",
    "level": "Advanced",
    "category": "Encoding",
    "brief": "An evidence export was compressed before being encoded for transport. Restore its text.",
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
    "points": 300
  },
  {
    "id": "logs",
    "title": "SOC triage",
    "level": "Intermediate",
    "category": "Investigation",
    "brief": "The alert threshold is three failed logins followed by success for the same account and source. Which IP meets that threshold?",
    "evidence": "09:00 user=alex src=192.0.2.10 outcome=FAIL\n09:01 user=alex src=192.0.2.10 outcome=FAIL\n09:02 user=alex src=192.0.2.10 outcome=FAIL\n09:03 user=alex src=192.0.2.10 outcome=SUCCESS\n09:04 user=pat src=192.0.2.20 outcome=SUCCESS",
    "answers": [
      "192.0.2.10"
    ],
    "hints": [
      "Group by user and source address.",
      "Count failures before the successful login.",
      "alex has three failures, then a success from the same IP."
    ],
    "solution": "192.0.2.10 meets the stated rule. This is a signal for investigation, not proof of compromise. The addresses are documentation-only examples.",
    "original": false,
    "settings": "",
    "points": 200
  },
  {
    "id": "timestamp",
    "title": "Timeline repair",
    "level": "Intermediate",
    "category": "Investigation",
    "brief": "Convert this Unix timestamp in seconds to UTC. Submit the date as YYYY-MM-DD.",
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
    "points": 200
  },
  {
    "id": "ioc",
    "title": "Defanged indicator",
    "level": "Intermediate",
    "category": "Web",
    "brief": "An analyst deliberately made this URL non-clickable. Restore its original form as text. Do not browse to it.",
    "evidence": "hxxps://portal[.]example/login",
    "answers": [
      "https://portal.example/login"
    ],
    "hints": [
      "hxxps and [.] are deliberate substitutions.",
      "Restore the protocol and dots.",
      "Replace hxxps with https and [.] with a period."
    ],
    "solution": "The restored text is https://portal.example/login. Defanging reduces accidental clicks; it does not establish whether an indicator is malicious.",
    "original": false,
    "settings": "",
    "points": 200
  },
  {
    "id": "final-recipe",
    "title": "The evidence vault",
    "level": "Advanced",
    "category": "Encoding",
    "brief": "The final vault combines three layers. The outer layer is Base64, the middle is hexadecimal text, and the inner message has a 13-letter rotation. Recover the flag.",
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
    "points": 300
  }
];
