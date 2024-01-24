// export const toggleMenu = () => {
//   const navMain = document.querySelector('.main-nav');
//   const navToggle = document.querySelector('.main-nav__toggle');

//   navMain.classList.remove('main-nav--no-js');

//   navToggle.addEventListener('click', () => {
//     if (navMain.classList.contains('main-nav--closed')) {
//       navMain.classList.remove('main-nav--closed');
//       navMain.classList.add('main-nav--opened');
//     } else {
//       navMain.classList.add('main-nav--closed');
//       navMain.classList.remove('main-nav--opened');
//     }
//   });

// }

import { burger, navigation } from "./elements.js";

export const toggleMenu = () => {
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    navigation.classList.toggle('main-nav__opened--active');
  })
  }
