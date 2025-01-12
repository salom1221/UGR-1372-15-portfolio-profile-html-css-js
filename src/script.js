const hamburgerMenu = document.querySelector('.hamburger-icon');
const hiddenMenu = document.querySelector('.hidden-menu');


hamburgerMenu.addEventListener('click', () => {
  hiddenMenu.classList.toggle('active'); 
});
const githubIcon = document.querySelector('.header-icons .fab.fa-github').parentElement;
const telegramIcon = document.querySelector('.header-icons .fab.fa-telegram').parentElement;


githubIcon.addEventListener('click', (e) => {
  e.preventDefault(); 
  window.open('https://github.com/salom1221', '_blank'); 
});


telegramIcon.addEventListener('click', (e) => {
  e.preventDefault(); 
  window.open('https://t.me/Newusername12345678', '_blank'); 
});

