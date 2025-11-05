// Developer / Designer toggle
const role = document.getElementById("toggle-role");
const roles = ["Developer", "Designer"];
let r = 0;
setInterval(() => {
  r = (r + 1) % roles.length;
  role.textContent = roles[r];
}, 2600);

// Smooth scroll behavior works automatically via CSS
