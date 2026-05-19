const revealElements = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("section");
const heroImage = document.querySelector(".hero-cover-image");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

const updateActiveNav = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
};

const heroParallax = () => {
  if (!heroImage) return;

  const scrollY = window.scrollY;
  heroImage.style.transform = `scale(1.05) translateY(${scrollY * 0.04}px)`;
};

window.addEventListener("scroll", () => {
  revealOnScroll();
  updateActiveNav();
  heroParallax();
});

window.addEventListener("load", () => {
  revealOnScroll();
  updateActiveNav();
});
