import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import axios from 'axios';

export const refs = {
  reviewsSectionBox: document.querySelector('.swiper'),
  reviewsListBox: document.querySelector('.reviews-list'),
};

export async function getReviews() {
  const apiUrl = 'https://portfolio-js.b.goit.study/api/reviews';
  const params = {};
  try {
    const data = await axios.get(apiUrl, params).then(res => {
      console.log(res.data);
      const markup = markupRender(res.data);
      return (refs.reviewsListBox.innerHTML = markup);
    });
    return data;
  } catch (error) {
    refs.reviewsSectionBox.innerHTML =
      '<p class="reviews-not-found">Not Found</p>';
    console.log(error);
  }
}

export function markupRender(data) {
  const markup = data
    .map(
      ({
        author,
        avatar_url,
        review,
        _id,
      }) => `<li class="review-item swiper-slide">
          <img
            width="48px"
            height="48px"
            src="${avatar_url}"
            srcset="${avatar_url}"
            alt="Reviewer photo"
            class="review-photo"
          />
          <div class="review-info">
            <h3 class="review-author">${author}</h3>
            <p class="review-text">${review}</p>
          </div>
        </li>`
    )
    .join(' ');
  return markup;
}

getReviews();
const swiper = new Swiper('.swiper', {
  speed: 400,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  centeredSlides: true,
  direction: 'horizontal',
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  enabled: true,
  slidesPerView: 1,
  grabCursor: true,
});

const swiperReviews = document.querySelector('.swiper').swiper;

swiperReviews.on('slideChange', function () {
  console.log('slide changed');
});
