const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navListItem = document.querySelectorAll('.nav-list-item');
const sectionNav = document.querySelector('.section-nav');

hamburger.addEventListener('click', (e) => {
  slideMobileNav();
});

navListItem.forEach((li) =>
  li.addEventListener('click', () => {
    slideMobileNav();
  })
);

function slideMobileNav() {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
  sectionNav.classList.toggle('bg-white');
}
