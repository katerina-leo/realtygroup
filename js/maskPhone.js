
export const maskPhone = () => {
  const phoneInputs = document.querySelectorAll(".form__input--phone");

  phoneInputs.forEach((phoneInput) => {
    phoneInput.addEventListener('click', () => {
      const maskOptions = {
        mask: '+{7}(000)000-00-00'
        };
        const mask = IMask(phoneInput, maskOptions);
    })
  })
}
