/* =========================
   HERO SLIDER (SAFE)
========================= */
const slides = document.querySelectorAll('.slide');
let index = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);
}

/* =========================
   AOS INIT
========================= */
AOS.init({
  duration: 1000,
  once: true
});

/* =========================
   MOBILE NAVBAR
========================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

  // Toggle menu
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu on link click (VERY IMPORTANT FOR MOBILE)
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}
