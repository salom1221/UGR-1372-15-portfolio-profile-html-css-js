document.addEventListener("DOMContentLoaded", function() {
  // Target the hamburger icon and hidden menu
  const menuButton = document.querySelector('.hamburger-icon');
  const hiddenMenu = document.querySelector('.hidden-menu');
  
  console.log(menuButton); // Check if the hamburger icon is selected
  console.log(hiddenMenu); // Check if the hidden menu is selected

  // Add click event listener to the hamburger icon
  menuButton.addEventListener('click', function() {
    console.log('Hamburger icon clicked');
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
