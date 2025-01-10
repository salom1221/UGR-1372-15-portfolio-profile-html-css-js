document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  // Debugging: Check if elements are found
  console.log("Hamburger:", hamburger);
  console.log("Menu:", menu);

  hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked");
    menu.classList.toggle('active');
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
