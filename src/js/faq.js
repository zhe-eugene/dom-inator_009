import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});