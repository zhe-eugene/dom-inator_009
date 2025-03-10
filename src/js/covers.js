const refs = {
  covers: document.querySelector('.covers'),
  wrapper: document.querySelector('.covers-wrapper'),
};

(() => {
  const listHtml = refs.wrapper.innerHTML;
  refs.wrapper.innerHTML = [...Array(4).keys()].map(() => listHtml).join('');
})();

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
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(refs.covers);
