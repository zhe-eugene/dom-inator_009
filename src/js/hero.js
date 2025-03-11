const heroTitle = document.querySelector('.hero-title');

function setHeroTitleMarkup(screenWidth) {
  if (screenWidth >= 1440) {
    return `
      Hello.<br>
      I'm&nbsp;Fullstack&nbsp;developer<br>
      Lloyd Jefferson.
    `;
  } else {
    return `
      Hello.<br>
      I'm&nbsp;Fullstack developer<br>
      Lloyd<br>
      Jefferson.
    `;
  }
}

function updateHeroTitle() {
  const screenWidth = window.innerWidth;
  const newMarkup = setHeroTitleMarkup(screenWidth);
  heroTitle.innerHTML = newMarkup;
}

updateHeroTitle();

window.addEventListener('resize', updateHeroTitle);
