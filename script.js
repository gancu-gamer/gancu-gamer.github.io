const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.textContent = open ? "✕" : "☰";
  });
}

const form = document.getElementById("applicationForm");
const statusBox = document.getElementById("formStatus");

if (form && statusBox) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusBox.textContent =
      "Formularz działa po stronie strony. Następny krok: podłączymy wysyłkę aplikacji do Formspree, Google Forms lub własnego backendu.";
  });
}