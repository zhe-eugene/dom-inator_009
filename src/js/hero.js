document.addEventListener('DOMContentLoaded', function () {
  const heroTitle = document.querySelector('.hero-title');
  const heroNav = document.querySelector('.hero-nav-wrapper');

  setTimeout(() => {
    heroTitle.classList.add('fade-in');
  }, 300);

  setTimeout(() => {
    heroNav.classList.add('fade-in');
  }, 800);
});

