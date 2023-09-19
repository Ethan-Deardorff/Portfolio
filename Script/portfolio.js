/* Nav Buttons */
const aboutMeTab = document.querySelector('#about-me-button');
const abMeOverlay = document.querySelector('#about-me-overlay');



/* Screen Rezise */
let screenSize;

function hideElement() {
    }

function updateVariable() {
  if (window.innerWidth >= 1020) {
    screenSize = "Large Screen";
  } else {
    screenSize = "Small Screen";
  }

  console.log(screenSize);
}

updateVariable();

window.addEventListener('resize', updateVariable);



/* Scroll */
const header = document.getElementById('header-bg');
const headerOverlay = document.getElementById('about-me-overlay')
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scroll');
    headerOverlay.classList.add('scroll')
  } else {
    header.classList.remove('scroll');
    headerOverlay.classList.remove('scroll');
  }
});



/* Fade In */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
      element.classList.add('fade-in');
    });
  }, 0); // 1000 milliseconds = 1 second
});