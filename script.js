/* Role toggle */
const role = document.getElementById("toggle-role");
const roles = ["Developer", "Designer"];
let index = 0;

setInterval(() => {
  index = (index + 1) % roles.length;
  role.textContent = roles[index];
}, 2600);
