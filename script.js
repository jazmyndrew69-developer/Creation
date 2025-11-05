// Role toggle
const role = document.getElementById("toggle-role");
const roles = ["Developer", "Designer"];
let i = 0;
setInterval(() => {
  i = (i + 1) % roles.length;
  role.textContent = roles[i];
}, 2600);
