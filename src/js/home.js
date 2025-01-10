// Select the hamburger menu and hidden menu
const hamburgerMenu = document.querySelector('.hamburger-icon .menu');
const hiddenMenu = document.querySelector('.hidden-menu');

// Add a click event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the hidden menu
  hiddenMenu.classList.toggle('active');
});

// Optional: Close the menu when clicking outside
document.addEventListener('click', (event) => {
  if (!hamburgerMenu.contains(event.target) && !hiddenMenu.contains(event.target)) {
    hiddenMenu.classList.remove('active');
  }
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
