

import { toggleMenu } from "./toggleMenu.js";

const sphere = document.getElementById('sphere');
const rows = []

for(let i = 0; i < 180; i += 9) {
  rows.push(`<div class="line" style="transform: rotateY(${i}deg);"></div>`)
}

sphere.innerHTML = rows.join("");


// import { modalElem, form,request, buttonsRequest } from "./elements.js";
// import { formSend } from "./formSend.js";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'



// const phoneInput = document.querySelector(".form__input--phone");
//     const maskOptions = {
//       mask: '+{7}(000)000-00-00'
//     };
//     const mask = IMask(phoneInput, maskOptions);


const swiper = new Swiper('.swiper', {

    navigation: {
      nextEl: '.button__next',
      prevEl: '.button__prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
    },

    slideToClickedSlide: true,

      slidesPerView: 1,
      spaceBetween: 10,

      breakpoints: {

        561: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }
})


// const init = () => {
//   toggleMenu();

//   buttonsRequest.forEach((buttonRequest) => {
//     buttonRequest.addEventListener('click', () => {
//       modalElem.classList.add('modal--open')
//       request.value = buttonRequest.dataset.order;
//     }

//     )
//   })

//   modalElem.addEventListener('click', (event) => {
//     const target = event.target;

//     if(target.closest('.modal__close')
//       || target === modalElem || event.code === 'Escape' ||
//           event.type === 'submit') {
//       modalElem.classList.remove('modal--open')
//     }
//   })

//   form.addEventListener('submit', formSend);
// }


toggleMenu()
// init();
