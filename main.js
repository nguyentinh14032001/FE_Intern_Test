const toggleButton = document.querySelector(".menu-bar");
const sidebar = document.querySelector(".sidebar");
toggleButton.addEventListener("click", handleToggleMenu);
function handleToggleMenu(e) {
  e.target.classList.toggle("fa-times");
  e.target.classList.toggle("fa-bars");
  sidebar.classList.toggle("active");
  toggleButton.classList.toggle("active");
}
