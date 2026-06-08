const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

document.querySelectorAll('#year').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const priceCards = document.querySelectorAll('.price-card');

if (priceCards.length) {
  const collapseCards = () => {
    priceCards.forEach((card) => {
      card.classList.remove('is-expanded');
      card.setAttribute('aria-expanded', 'false');
    });
  };

  priceCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      event.stopPropagation();
      const isExpanded = card.classList.contains('is-expanded');
      collapseCards();
      if (!isExpanded) {
        card.classList.add('is-expanded');
        card.setAttribute('aria-expanded', 'true');
      }
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });

  document.addEventListener('click', collapseCards);
}
