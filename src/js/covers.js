'use strict';

const refs = {
  covers: document.querySelector('.covers'),
  wrapper: document.querySelector('.covers-wrapper'),
};

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      refs.wrapper.classList.add('animate');
    } else {
      refs.wrapper.classList.remove('animate');
    }
  });
};

const options = {
  root: null, // null = відстеження у всьому вікні
  threshold: 0.1, // Спрацьовує, коли 10% елемента видно
};

const observer = new IntersectionObserver(callback, options);

observer.observe(refs.covers);
