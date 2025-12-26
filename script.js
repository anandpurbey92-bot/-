/* =========================
   HERO SLIDER (MOBILE SAFE)
========================= */
const slides = document.querySelectorAll('.slide');
let index = 0;
let sliderInterval = null;

function startSlider() {
  if (slides.length <= 1) return;

  sliderInterval = setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);
}

function stopSlider() {
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }
}

/* Pause slider when tab is inactive (battery saver) */
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopSlider();
  } else {
    startSlider();
  }
});

startSlider();

/* =========================
   AOS INIT (OPTIMIZED)
========================= */
AOS.init({
  duration: 900,
  once: true,
  easing: 'ease-out-cubic',
  disable: () => window.innerWidth < 360 // ultra-small phones
});

/* =========================
   MOBILE NAVBAR (UX ENHANCED)
========================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

  // Toggle menu
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");
    document.body.style.overflow = isOpen ? "hidden" : "";

    // Toggle icon ☰ → ✕
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu on link click
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
      menuToggle.textContent = "☰";
    });
  });

  // Close menu on outside click
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
      menuToggle.textContent = "☰";
    }
  });
}
