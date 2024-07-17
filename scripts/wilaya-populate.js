// Function to populate the select box with options
const populateSelectBox = (wilayas) => {
  const selectBox = document.getElementById("wilaya");
  wilayas.forEach((wilaya, index) => {
    const option = document.createElement("option");
    option.value = index + 2;
    option.textContent = wilaya;
    selectBox.appendChild(option);
  });
};
// Fetch the JSON data and populate the select box
fetch("/AUTOAADL3/assets/wilaya.json")
  .then((response) => response.json())
  .then((wilayas) => {
    populateSelectBox(wilayas);
  })
  .catch((error) => console.error("Error loading the JSON file:", error));
