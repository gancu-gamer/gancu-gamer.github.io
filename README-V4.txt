REDLINE PERFORMANCE V4 — DISCORD + TURNSTILE

PUBLICZNY SITE KEY:
0x4AAAAAAEmNXvf7iApaY2Q2

WORKER:
https://redline-api.gancmaciej.workers.dev

CO JEST GOTOWE:
- Rekrutacja: "Wyślij aplikację" wysyła dane do Cloudflare Workera.
- Help Center: "Wyślij zgłoszenie" wysyła dane do Cloudflare Workera.
- Cloudflare Turnstile chroni oba formularze.
- Formularze mają dodatkowy honeypot przeciw prostym botom.
- Webhooki Discord pozostają wyłącznie w Cloudflare Secrets.
- Worker sprawdza hostname oraz action tokenu Turnstile.
- @everyone i @here nie wywołują oznaczeń na Discordzie.
- Discord dostaje estetyczne embedy z ID i datą.

WDROŻENIE:
1. CLOUDFLARE:
   - Worker redline-api -> Edit code.
   - Zastąp cały kod zawartością pliku cloudflare-worker.js.
   - Deploy.
   - W Settings sprawdź, że istnieją sekrety:
       HELP_WEBHOOK
       RECRUITMENT_WEBHOOK
       TURNSTILE_SECRET

2. GITHUB:
   - Wrzuć/nadpisz 6 plików HTML z tego ZIP-a:
       index.html
       o-firmie.html
       cennik.html
       eventy.html
       help-center.html
       rekrutacja.html
   - cloudflare-worker.js NIE musi być wrzucany na GitHub.
   - Commit changes.

3. TEST:
   - Otwórz stronę po 1-2 minutach.
   - Ctrl+F5.
   - Wyślij testową aplikację i testowe zgłoszenie.
