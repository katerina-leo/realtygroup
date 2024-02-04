

import { toggleMenu } from "./toggleMenu.js";

import { modals, form1, form2, form3, request, buttonsRequest, buttonsConsult, modalConsult, modalRequest } from "./elements.js";
import { formSend } from "./formSend.js";
import { shereAnimate } from "./shereAnimate.js";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'






const phoneInput = document.querySelector(".form__input--phone");
    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(phoneInput, maskOptions);


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


const init = () => {
  toggleMenu();
  shereAnimate()

  buttonsRequest.forEach((buttonRequest) => {
    buttonRequest.addEventListener('click', () => {
      modalRequest.classList.add('modal--open')
      request.value = buttonRequest.dataset.order;
    })
  })

  buttonsConsult.forEach((buttonConsult) => {
    buttonConsult.addEventListener('click', () => {
      modalConsult.classList.add('modal--open')
      request.value = buttonConsult.dataset.order;
    })
  })

  modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      const target = event.target;

      if(target.closest('.modal__close')
        || target === modal || event.code === 'Escape' ||
            event.type === 'submit') {
        modal.classList.remove('modal--open')
      }
    })
  })

  // modal.addEventListener('click', (event) => {
  //   const target = event.target;

  //   if(target.closest('.modal__close')
  //     || target === modal || event.code === 'Escape' ||
  //         event.type === 'submit') {
  //     modal.classList.remove('modal--open')
  //   }
  // })

  form1.addEventListener('submit', formSend);
  form2.addEventListener('submit', formSend);
  form3.addEventListener('submit', formSend);
}


// toggleMenu()
init();
