
import { modalBody, modals } from "./elements.js";
import { showErrorMessage, showSuccessMessage } from "./util.js";

export const formSend = async (evt) => {
    evt.preventDefault();

    let form = evt.target;
    const formData = new FormData(form);

    if (form.checkValidity()) {
      modalBody.classList.add('modal__body--sending')

      let response = await fetch('/requests', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        showSuccessMessage();
        form.reset();
        modalBody.classList.remove('modal__body--sending');
        modals.classList.remove('modal--open');
      } else {
        showErrorMessage();
        modalBody.classList.remove('modal__body--sending');
      }
    }
    form.classList.add('form--validated')
  }
