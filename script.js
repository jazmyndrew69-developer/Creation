/* ===== 1) ROLE TOGGLE (elegant fade) ===== */
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

/* ===== 2) SLIDE SYSTEM (scroll / keys / touch / nav) ===== */
const scenes = Array.from(document.querySelectorAll(".scene"));
const footer = document.querySelector(".footer");
const heroBg = document.querySelector(".hero-bg");

let current = 0;
let wheelLock = false;

function showScene(idx) {
  if (idx === current || idx < 0 || idx >= scenes.length) return;

  scenes[current].classList.remove("active");
  scenes[idx].classList.add("active");

  // home bg visible only on scene 0
  if (heroBg) heroBg.style.opacity = idx === 0 ? "1" : "0";

  if (footer) footer.classList.toggle("show", idx === scenes.length - 1);
  current = idx;
}

// init
scenes.forEach((s, i) => s.classList.toggle("active", i === 0));
if (footer) footer.classList.toggle("show", current === scenes.length - 1);
if (heroBg) heroBg.style.opacity = "1";

// nav clicks
document.querySelectorAll("[data-index]").forEach(btn => {
  btn.addEventListener("click", () => {
    const idx = Number(btn.dataset.index);
    showScene(idx);
  });
});

// wheel = one scene per notch
window.addEventListener("wheel", (e) => {
  if (wheelLock) return;
  wheelLock = true;
  if (e.deltaY > 0) showScene(current + 1);
  else showScene(current - 1);
  setTimeout(() => wheelLock = false, 900);
}, { passive: true });

// keyboard
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "PageDown") showScene(current + 1);
  if (e.key === "ArrowUp" || e.key === "PageUp") showScene(current - 1);
});

// touch swipe
let touchStartY = null;
window.addEventListener("touchstart", (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
window.addEventListener("touchend", (e) => {
  if (touchStartY === null) return;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dy) > 60) {
    if (dy < 0) showScene(current + 1);
    else showScene(current - 1);
  }
  touchStartY = null;
}, { passive: true });

/* ===== 3) PROJECT CARDS: open link after slide is visible ===== */
document.querySelectorAll(".project-link").forEach(card => {
  card.addEventListener("click", e => {
    // ensure we're on Projects scene first
    if (current !== 3) {
      e.preventDefault();
      showScene(3);
      setTimeout(() => window.open(card.href, "_blank"), 600);
    }
  });
});

/* ===== 4) CHERRY BLOSSOM PETALS (home only visual) ===== */
function spawnPetal() {
  const p = document.createElement("div");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 4 + Math.random() * 6 + "s";
  document.getElementById("petals")?.appendChild(p);
  setTimeout(() => p.remove(), 10000);
}
setInterval(spawnPetal, 320);
