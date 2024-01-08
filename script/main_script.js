document.addEventListener("DOMContentLoaded", () => {
  // const loadingScreen = document.getElementById("loading_screen");

  // function load() {
    
  // }


  
  const header = document.querySelector('header');
  let lastScrollY = 0;

  addEventListener('scroll', () => {
    let scollY = window.pageYOffset || document.documentElement.scrollTop;

    if (navStatus === false) {
      if (scrollY >= 100) {
        header.classList.add('head_hide');
      } else {
        header.classList.remove('head_hide');
      }

      if (scrollY > lastScrollY) {
        // Blank
      } else {
        header.classList.remove('head_hide');
      }

      lastScrollY = scrollY;
    }

  })

  const menu = document.querySelector('.menu');
  const smallNav = document.querySelector('.small_nav');
  const html = document.querySelector('html');
  const bgBlur = document.querySelector('.bg_blur');

  let navStatus = false;

  menu.addEventListener('click', () => {
    smallNav.classList.toggle('active');
    html.classList.toggle('no_overflow');
    bgBlur.classList.toggle('active');

    if (navStatus === false) {
      navStatus = true;
    } else if (navStatus === true) {
      navStatus = false;
    }

    smallNav.setAttribute('aria-expanded', navStatus);
  })
});