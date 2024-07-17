document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const wilayaSelect = document.getElementById("wilaya");
  const ninInput = document.getElementById("nin");
  const nssInput = document.getElementById("nss");
  const phoneInput = document.getElementById("phone");
  const submitButton = document.getElementById("submit");
  const initButton = document.getElementById("init");
  const note = document.getElementById("note");

  const validateForm = () => {
    // Enable init form data button
    initButton.disabled = false;
    note.style.display = "none";

    wilayaSelect.style.border = "2px solid #a096a6eb";
    ninInput.style.border = "2px solid #a096a6eb";
    nssInput.style.border = "2px solid #a096a6eb";
    phoneInput.style.border = "2px solid #a096a6eb";

    const wilayaValid = wilayaSelect.value !== "";
    const ninValid = /^\d{18}$/.test(ninInput.value);
    const nssValid = /^(\d{6}|\d{12})$/.test(nssInput.value);
    const phoneValid = /^0[5,6,7]\d{8}$/.test(phoneInput.value);

    if (!wilayaValid) {
      wilayaSelect.style.border = "2px solid rgb(216 69 69)";
      note.style.display = "block";
    }
    if (!ninValid) {
      ninInput.style.border = "2px solid rgb(216 69 69)";
      note.style.display = "block";
    }
    if (!nssValid) {
      nssInput.style.border = "2px solid rgb(216 69 69)";
      note.style.display = "block";
    }
    if (!phoneValid) {
      phoneInput.style.border = "2px solid rgb(216 69 69)";
      note.style.display = "block";
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
