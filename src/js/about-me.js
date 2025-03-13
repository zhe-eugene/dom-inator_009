import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.ac');

  accordions.forEach((accordion, index) => {
    const trigger = accordion.querySelector('.ac-trigger');
    const panel = accordion.querySelector('.ac-panel');

    if (index === 0) {
      panel.classList.add('open');
      trigger.classList.add('open');
    }

    trigger.addEventListener('click', () => {
      panel.classList.toggle('open');
      trigger.classList.toggle('open');
    });
  });
});

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.skills-swipe', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      invert: false,
    },
    breakpoints: {
      375: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 4,
      },
      1220: {
        slidesPerView: 6,
      },
      1312: {
        slidesPerView: 6,
      },
      1440: {
        slidesPerView: 7,
      },
    },
  });

  function adjustSlideSize() {
    const slides = document.querySelectorAll('.skill-slide');
    const screenWidth = window.innerWidth;

    slides.forEach(slide => {
      if (screenWidth <= 375) {
        slide.style.width = '130px';
        slide.style.height = '130px';
      } else if (screenWidth <= 768) {
        slide.style.width = '130px';
        slide.style.height = '130px';
      } else if (screenWidth <= 1200) {
        slide.style.width = '200px';
        slide.style.height = '200px';
      } else if (screenWidth <= 1312) {
        slide.style.width = '200px';
        slide.style.height = '200px';
      } else if (screenWidth <= 1440) {
        slide.style.width = '200px';
        slide.style.height = '200px';
      } else {
        slide.style.width = '200px';
        slide.style.height = '200px';
      }
    });
  }

  adjustSlideSize();

  window.addEventListener('resize', adjustSlideSize);

  const slidesContent = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Node.js',
    'React Native',
    'Soft skills',
  ];

  let currentIndex = 0;

  function updateSlideContent() {
    const slides = document.querySelectorAll('.skill-slide');
    slides.forEach((slide, index) => {
      slide.textContent =
        slidesContent[(currentIndex + index) % slidesContent.length];

      if (index === 0) {
        slide.classList.add('item-color');
      } else {
        slide.classList.remove('item-color');
      }
    });
  }

  const nextButton = document.querySelector('.next-button-swiper');
  if (nextButton) {
    nextButton.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % slidesContent.length;
      updateSlideContent();
    });
  }

  nextButton.addEventListener('touchstart', function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % slidesContent.length;
    updateSlideContent();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight' || event.key === 'Tab') {
      currentIndex = (currentIndex + 1) % slidesContent.length;
      updateSlideContent();
    }

    if (event.key === 'ArrowLeft') {
      currentIndex =
        (currentIndex - 1 + slidesContent.length) % slidesContent.length;
      updateSlideContent();
    }
  });
});
