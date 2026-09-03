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

<title>O firmie — RedLine Performance</title>
<meta name="description" content="Poznaj RedLine Performance, nasz zarząd i lokalizację warsztatu w Burton.">
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
      <a class="" href="index.html">Start</a><a class="active" href="o-firmie.html">O firmie</a><a class="" href="cennik.html">Cennik</a><a class="" href="eventy.html">Eventy</a><a class="" href="help-center.html">Help Center</a><a class="nav-cta" href="rekrutacja.html">Rekrutacja</a>
    </nav>
  </div>
</header>

<main>
  <section class="page-hero photo-page-hero">
    <div class="container">
      <span class="kicker">REDLINE PERFORMANCE</span>
      <h1>O firmie</h1>
      <p>Profesjonalizm na hali, dobra organizacja w zespole i jasne podejście do każdego klienta.</p>
    </div>
  </section>

  <section class="section">
    <div class="container two-col about-intro">
      <div>
        <span class="kicker">KIM JESTEŚMY</span>
        <h2>Warsztat tworzony przez ludzi z pasją do motoryzacji.</h2>
      </div>
      <div class="copy-block">
        <p>RedLine Performance to warsztat samochodowy zlokalizowany w Burton przy Carcer Way 7204. Zajmujemy się obsługą samochodów spalinowych i elektrycznych, pomocą drogową oraz wyceną szkód pojazdów.</p>
        <p>Stawiamy na sprawną obsługę, jasne zasady i profesjonalne podejście — zarówno do klienta, jak i do pracy całego zespołu.</p>
      </div>
    </div>
  </section>

  <section class="section section-deep">
    <div class="container">
      <div class="section-head compact">
        <div>
          <span class="kicker">ZARZĄD I KADRA</span>
          <h2>Osoby odpowiedzialne za RedLine.</h2>
        </div>
      </div>
      <div class="team-grid">
        <article class="team-card primary">
          <span class="role">Właściciel firmy</span>
          <h3>Luke White</h3>
          <div class="contact-row"><span>Telefon</span><button class="copy-phone" data-copy="0872867">0872867 <b>⧉</b></button></div>
        </article>
        <article class="team-card">
          <span class="role">Zastępca szefa</span>
          <h3>Grzegorz Broda</h3>
          <div class="contact-row"><span>Telefon</span><button class="copy-phone" data-copy="0899221">0899221 <b>⧉</b></button></div>
        </article>
        <article class="team-card">
          <span class="role">Zastępca szefa</span>
          <h3>Fabian Night</h3>
          <div class="contact-row"><span>Telefon</span><button class="copy-phone" data-copy="0884624">0884624 <b>⧉</b></button></div>
        </article>
        <article class="team-card">
          <span class="role">Kierownik Serwisu</span>
          <h3>Nicolo Giovanni</h3>
          <p class="team-muted">Kadra kierownicza serwisu</p>
        </article>
        <article class="team-card">
          <span class="role">Kierownik Serwisu</span>
          <h3>Leon Moura</h3>
          <p class="team-muted">Kadra kierownicza serwisu</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container location-split">
      <div class="location-large">
        <span class="kicker">LOKALIZACJA</span>
        <h2>BURTON<br><em>Carcer Way 7204</em></h2>
        <p>To tutaj znajduje się siedziba RedLine Performance.</p>
      </div>
      <img src="assets/warsztat.webp" alt="Siedziba RedLine Performance przy Carcer Way w Burton">
    </div>
  </section>
</main>
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
