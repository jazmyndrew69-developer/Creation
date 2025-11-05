/* ===== ROLE TOGGLE (elegant fade) ===== */
const roleEl = document.getElementById("toggle-role");
if (roleEl) {
  const roles = ["Developer", "Designer"];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % roles.length;
    roleEl.style.transition = "opacity .22s ease";
    roleEl.style.opacity = 0;
    setTimeout(() => {
      roleEl.textContent = roles[i];
      roleEl.style.opacity = 1;
    }, 220);
  }, 2600);
}

/* ===== SMOOTH SCROLL for nav & CTAs ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ===== PARALLAX on scroll (hero bg only) ===== */
const bg = document.querySelector(".parallax-bg");
window.addEventListener("scroll", () => {
  // only slight movement for elegance
  const y = window.scrollY * 0.25;
  if (bg) bg.style.transform = `translate3d(0, ${y}px, 0)`;
}, { passive: true });

/* ===== REVEAL-ON-SCROLL ===== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ===== CHERRY BLOSSOM PETALS (gentle, continuous) ===== */
function spawnPetal() {
  const p = document.createElement("div");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 5 + Math.random() * 7 + "s";
  document.getElementById("petals")?.appendChild(p);
  setTimeout(() => p.remove(), 12000);
}
setInterval(spawnPetal, 360);
