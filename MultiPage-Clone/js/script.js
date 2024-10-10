// Close menu for mobile when user click on any link from menu
document.querySelectorAll(".nav-menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    // Uncheck the checkbox to hide the menu
    document.getElementById("menu-toggle").checked = false;
  });
});
