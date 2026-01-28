// ==========================
const showMoreButtons = document.querySelectorAll(".show-more-btn");

showMoreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const description = btn.previousElementSibling;
    const expanded = description.classList.toggle("expanded");

    btn.textContent = expanded ? "Show less" : "Show more";
  });
});

const revealElements = document.querySelectorAll(
  ".job, .project-item, section h2",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

const cursorGlow = document.createElement("div");
cursorGlow.classList.add("cursor-glow");
document.body.appendChild(cursorGlow);

window.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

window.addEventListener("mouseleave", () => {
  cursorGlow.style.opacity = "0";
});

window.addEventListener("mouseenter", () => {
  cursorGlow.style.opacity = "1";
});

document
  .querySelectorAll(".nav-link, .mobile-top-nav a, .contact-desktop-nav a")
  .forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
