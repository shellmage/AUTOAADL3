const initButton = document.getElementById("init");

// Event listener for the init button to reset the form
initButton.addEventListener("click", () => {
  const submitButton = document.getElementById("submit");
  // Clear form
  wilaya.value = "";
  nin.value = "";
  nss.value = "";
  phone.value = "";
  // Clear localStorage
  localStorage.removeItem("formData");
  // Disable submit button
  submitButton.disabled = true;
  initButton.disabled = true;

  // Hide success box
  const successBox = document.getElementById("success-box");
  successBox.style = "display:none;";
});
