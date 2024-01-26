
import { burger, navigation } from "./elements.js";

export const toggleMenu = () => {
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    navigation.classList.toggle('main-nav__opened--active');
  })
  }
