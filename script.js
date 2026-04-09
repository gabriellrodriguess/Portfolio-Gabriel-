const screen = document.querySelector(".screen");
const cards = document.querySelectorAll(".project-card, .glass-card, .contact-item, .skills span");

cards.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(18px)";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 0.5s ease";
    }
  });
}, {
  root: screen,
  threshold: 0.15
});

cards.forEach((item) => observer.observe(item));
