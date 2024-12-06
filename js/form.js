document.addEventListener("DOMContentLoaded", () => {
  const passInput = document.querySelector("input[name='pass']");
  const passIcon = document.querySelector(".form__pass-icon");

  passIcon.addEventListener("click", () => {
    if (passInput.type === "password") {
      passInput.type = "text";
    } else {
      passInput.type = "password";
    }
  });

  const inputFields = document.querySelectorAll(".form__input");
  inputFields.forEach((inputField) => {
    const errorWrapper = inputField.nextElementSibling;
    const errorMessage = errorWrapper?.querySelector(".form__error-message");

    if (!errorWrapper || !errorMessage) return;

    inputField.addEventListener("blur", () => {
      let isValid = true;
      let message = "";

      switch (inputField.name) {
        case "email":
          isValid = validateEmail(inputField.value);
          message = "mail@sotrans.ru";
          break;

        case "phone":
          isValid = validatePhone(inputField.value);
          message = "+7(999)999-99-99";
          break;

        default:
          break;
      }

      if (!isValid) {
        inputField.classList.add("form__input_error");
        errorWrapper.classList.add("form__error-message-wrapper_active");
        errorMessage.textContent = message;
      } else {
        inputField.classList.remove("form__input_error");
        errorWrapper.classList.remove("form__error-message-wrapper_active");
        errorMessage.textContent = "";
      }
    });

    if (inputField.name === "phone") {
      inputField.addEventListener("input", () => {
        let value = inputField.value.replace(/\D/g, "");

        if (value === "") {
          inputField.value = "";
          return;
        }

        if (value[0] !== "7") value = "7" + value;

        inputField.value = formatPhone(value);
      });
    }
  });

  function formatPhone(value) {
    let formatted = "+7";
    if (value.length > 1) formatted += `(${value.substring(1, 4)}`;
    if (value.length >= 5) formatted += `)${value.substring(4, 7)}`;
    if (value.length >= 8) formatted += `-${value.substring(7, 9)}`;
    if (value.length >= 10) formatted += `-${value.substring(9, 11)}`;
    return formatted;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  function validatePhone(phone) {
    const digits = phone.replace(/\D/g, "");
    return digits.length === 11 && digits.startsWith("7");
  }
});
