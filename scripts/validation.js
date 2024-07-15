document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const wilayaSelect = document.getElementById("wilaya");
  const ninInput = document.getElementById("nin");
  const nssInput = document.getElementById("nss");
  const phoneInput = document.getElementById("phone");
  const submitButton = document.getElementById("submit");
  const initButton = document.getElementById("init");

  const validateForm = () => {
    // Enable init form data button
    initButton.disabled = false;

    wilayaSelect.style.border = "2px solid #a096a6eb";
    ninInput.style.border = "2px solid #a096a6eb";
    nssInput.style.border = "2px solid #a096a6eb";
    phoneInput.style.border = "2px solid #a096a6eb";

    const wilayaValid = wilayaSelect.value !== "";
    const ninValid = /^\d{18}$/.test(ninInput.value);
    const nssValid = /^\d{12}$/.test(nssInput.value);
    const phoneValid = /^\d{10}$/.test(phoneInput.value);

    if (!wilayaValid) {
      wilayaSelect.style.border = "2px solid rgb(216 69 69)";
    }
    if (!ninValid) {
      ninInput.style.border = "2px solid rgb(216 69 69)";
    }
    if (!nssValid) {
      nssInput.style.border = "2px solid rgb(216 69 69)";
    }
    if (!phoneValid) {
      phoneInput.style.border = "2px solid rgb(216 69 69)";
    }

    submitButton.disabled = !(
      wilayaValid &&
      ninValid &&
      nssValid &&
      phoneValid
    );
  };

  form.addEventListener("input", validateForm);
  form.addEventListener("change", validateForm);
});
