let lastScrollTop = 0;
const navbar = document.getElementById("mainNav");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling DOWN
    navbar.classList.add("nav-hidden");
  } else {
    // Scrolling UP
    navbar.classList.remove("nav-hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const hero = document.querySelector('.hero');

const images = [
'images/heroImg-1.jpg',
'images/heroImg-2.jpg',
'images/heroImg-3.jpg',
'images/heroImg-1.jpg'
];

let current = 0;

function changeHero() {
    hero.style.backgroundImage = `url(${images[current]})`;
    current = (current + 1) % images.length;
}

changeHero();
setInterval(changeHero, 5000);

// window.addEventListener('scroll', () => {
//     document
//         .getElementById('mainNav')
//         .classList.toggle('scrolled', window.scrollY > 50);
// });