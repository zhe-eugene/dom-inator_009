const button = document.getElementById('toggleButton');
const links = document.getElementById('links');
const navLinks = document.querySelectorAll('.nav-link');

button.addEventListener('click', () => {
  links.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    links.classList.remove('open');
  });
});
// // -------------------menu----------------

const openMenuBtn = document.getElementById('openMenuBtn');
const menu = document.getElementById('menu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menuLinks = document.querySelectorAll('.menu-link');
const orderProjectBtn = document.getElementById('orderProjectBtn');

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    menu.classList.remove('open');
  });
});

orderProjectBtn.addEventListener('click', e => {
  e.preventDefault();

  const footerSection = document.getElementById('footer');

  menu.classList.remove('open');
});
