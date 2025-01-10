// JavaScript for toggling the hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon .menu");
    const hiddenMenu = document.querySelector(".hamburger-icon .hidden-menu");
  
    hamburgerIcon.addEventListener("click", function () {
      if (hiddenMenu.style.display === "flex") {
        hiddenMenu.style.display = "none";
      } else {
        hiddenMenu.style.display = "flex";
      }
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!hiddenMenu.contains(e.target) && !hamburgerIcon.contains(e.target)) {
        hiddenMenu.style.display = "none";
      }
    });
  
    // Add event listeners for responsive adjustments
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        hiddenMenu.style.display = "none"; // Ensure menu closes on desktop
      }
    });
  });
  