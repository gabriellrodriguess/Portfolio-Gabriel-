const screen = document.querySelector(".screen");
const animatedItems = document.querySelectorAll(
  ".glass-card, .project-card, .skills span, .contact-item, .socials a"
);

animatedItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 0.55s ease";
    }
  });
}, {
  root: screen,
  threshold: 0.15
});

animatedItems.forEach((item) => observer.observe(item));
