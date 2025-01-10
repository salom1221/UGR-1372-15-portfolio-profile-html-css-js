document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector('.hamburger-icons');
  const hiddenMenu = document.querySelector('.hidden-menu');

  menuButton.addEventListener('click', function() {
    hiddenMenu.classList.toggle('active');
  });
});

// Select the icons
const githubIcon = document.querySelector('.header-icons .fab.fa-github').parentElement;
const telegramIcon = document.querySelector('.header-icons .fab.fa-telegram').parentElement;

// Add click event listener for GitHub icon
githubIcon.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  window.open('https://github.com/salom1221', '_blank'); // Open GitHub in a new tab
});

// Add click/touch event listener for Telegram icon
telegramIcon.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  window.open('https://t.me/Newusername12345678', '_blank'); // Open Telegram in a new tab
});
