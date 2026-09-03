<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#090b0f">
<link rel="icon" type="image/png" href="assets/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,500;0,600;0,700;0,800;1,700;1,800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">

<title>Rekrutacja — RedLine Performance</title>
<meta name="description" content="Dołącz do zespołu RedLine Performance. Wypełnij aplikację rekrutacyjną.">
</head>
<body>
<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="index.html" aria-label="RedLine Performance">
      <img src="assets/redline-logo.png" alt="RedLine Performance">
    </a>
    <button class="menu-btn" type="button" aria-label="Otwórz menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav class="main-nav" aria-label="Główna nawigacja">
      <a class="" href="index.html">Start</a><a class="" href="o-firmie.html">O firmie</a><a class="" href="cennik.html">Cennik</a><a class="" href="eventy.html">Eventy</a><a class="" href="help-center.html">Help Center</a><a class="active nav-cta" href="rekrutacja.html">Rekrutacja</a>
    </nav>
  </div>
</header>

<main>
  <section class="page-hero">
    <div class="container">
      <span class="kicker">REDLINE TEAM</span>
      <h1>Rekrutacja</h1>
      <p>Szukamy osób, które chcą realnie współtworzyć warsztat i potrafią zadbać o klienta.</p>
    </div>
  </section>

  <section class="section">
    <div class="container form-layout">
      <aside class="form-side">
        <span class="kicker">CZEGO OCZEKUJEMY</span>
        <h2>Liczy się podejście.</h2>
        <ul class="requirements">
          <li><b>Aktywność</b><span>Regularna obecność i gotowość do działania.</span></li>
          <li><b>Komunikacja</b><span>Kultura, jasne informacje i praca z klientem.</span></li>
          <li><b>Zespół</b><span>Umiejętność współpracy i wzajemna pomoc.</span></li>
          <li><b>Motoryzacja</b><span>Podstawowa wiedza i chęć dalszej nauki.</span></li>
          <li><b>Odpowiedzialność</b><span>Profesjonalne podejście do powierzonych zadań.</span></li>
        </ul>
      </aside>

      <form class="pro-form" id="recruitmentForm">
        <div class="form-title">
          <span class="form-index">01</span>
          <div><span class="kicker">APLIKACJA</span><h2>Formularz kandydata</h2></div>
        </div>
        <div class="form-grid two">
          <label><span>Imię i nazwisko</span><input name="name" required autocomplete="name" placeholder="Imię i nazwisko"></label>
          <label><span>Wiek</span><input name="age" type="number" min="16" max="99" required placeholder="Wiek"></label>
        </div>
        <div class="form-grid two">
          <label><span>Discord</span><input name="discord" required placeholder="Nazwa użytkownika"></label>
          <label><span>Numer telefonu</span><input name="phone" placeholder="Numer kontaktowy"></label>
        </div>
        <label><span>Dlaczego chcesz dołączyć do RedLine Performance?</span><textarea name="why" rows="5" required placeholder="Napisz kilka konkretnych zdań..."></textarea></label>
        <label><span>Jakie masz doświadczenie?</span><textarea name="experience" rows="5" required placeholder="Motoryzacja, warsztat, obsługa klienta, inne doświadczenia..."></textarea></label>
        <label><span>Ile czasu możesz poświęcić na pracę?</span><input name="availability" required placeholder="Np. 3–4 godziny dziennie, głównie wieczorami"></label>
        <label><span>Co wyróżnia Cię na tle innych kandydatów?</span><textarea name="strengths" rows="4" required placeholder="Napisz, dlaczego warto wybrać właśnie Ciebie."></textarea></label>
        <label class="checkbox-row"><input type="checkbox" required><span>Potwierdzam prawdziwość podanych informacji.</span></label>
        <button class="btn btn-primary full" type="submit">Przygotuj aplikację</button>
        <p class="form-hint">Po przygotowaniu zgłoszenia skopiujesz jego treść jednym kliknięciem.</p>
      </form>
    </div>
  </section>
</main>

<div class="modal" id="submissionModal" aria-hidden="true">
  <div class="modal-backdrop" data-close-modal></div>
  <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <button class="modal-close" type="button" data-close-modal aria-label="Zamknij">×</button>
    <span class="kicker">GOTOWE</span>
    <h2 id="modalTitle">Twoja aplikacja została przygotowana.</h2>
    <p>Skopiuj treść. W kolejnym etapie system zostanie podłączony bezpośrednio do Discorda.</p>
    <textarea id="submissionText" rows="12" readonly></textarea>
    <button class="btn btn-primary full" type="button" id="copySubmission">Skopiuj aplikację</button>
  </div>
</div>

<footer class="site-footer">
  <div class="container footer-main">
    <div class="footer-brand">
      <img src="assets/redline-logo.png" alt="RedLine Performance">
      <p>Profesjonalny warsztat samochodowy w Burton.</p>
    </div>
    <div class="footer-col">
      <strong>RedLine Performance</strong>
      <a href="o-firmie.html">O firmie</a>
      <a href="cennik.html">Cennik</a>
      <a href="eventy.html">Eventy</a>
    </div>
    <div class="footer-col">
      <strong>Kontakt i wsparcie</strong>
      <a href="help-center.html">Help Center</a>
      <a href="rekrutacja.html">Rekrutacja</a>
      <span>BURTON · Carcer Way 7204</span>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>© <span id="year"></span> RedLine Performance</span>
    <span>BURTON · Carcer Way 7204</span>
  </div>
</footer>
<script src="script.js"></script>

</body>
</html>
