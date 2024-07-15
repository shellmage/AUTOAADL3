document.addEventListener("DOMContentLoaded", () => {
  const wilaya = document.getElementById("wilaya");
  const nin = document.getElementById("nin");
  const nss = document.getElementById("nss");
  const phone = document.getElementById("phone");
  const submitButton = document.getElementById("submit");
  const initButton = document.getElementById("init");

  // Function to populate fields from localStorage if data exists
  function populateFieldsFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      wilaya.selectedIndex = "";
      nin.value = storedData.P2 || "";
      nss.value = storedData.P3 || "";
      phone.value = storedData.P4 || "";

      submitButton.disabled = true;
    }
  }

  // Call the function to populate fields when the page loads
  populateFieldsFromLocalStorage();
});
