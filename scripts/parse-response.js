// // TRY SCENARIO ERROR
// const RESPONSE_FILE = "../assets/error-example.txt"

// // TRY SCENARIO ALREADY REGISTERED
// const RESPONSE_FILE = "../assets/already-registered.txt";

// TRY SCENARIO SUCCESS
const RESPONSE_FILE = "../assets/success-example.txt"

const handleResponse = (text) => {
  if (text.includes("INSCRIPTION_REUSIS")) {
    // SUCCESS
    const array = text
      .split("REUSIS:OK,")[1]
      .split(",CODE_CRYPT")[0]
      .split(",");

    array.forEach((element, i) => {
      array[i] = element.split(":")[1];
    });

    let userMessage = "";
    if (text.includes("PRENOMFR")) {
      // NEW REGISTRATION
      userMessage = `Vous venez d'inscrire l'utilisateur <strong>${array[3]} ${array[2]}</strong>  portant le numéro séquentiel <strong>${array[9]}</strong>. Appelez le <strong>${array[5]}</strong> pour confirmer votre inscription.`;
    } else {
      // ALREADY REGISTERED
      userMessage = `Utilisateur <strong>${array[2]}</strong> déjà inscrit.`;
    }

    const successBox = document.getElementById("success-box");
    successBox.innerHTML = userMessage;
    successBox.style = "display:block;";
  } else {
    // ERROR
    const matchGroup = text.match(/{(.*?)}/);
    const jsonData = matchGroup[0];

    alert(`Erreur: ${jsonData}`);
  }
};

// Fetch the JSON data and populate the select box
fetch(RESPONSE_FILE)
  .then((response) => response.text())
  .then((response) => {
    handleResponse(response);
  })
  .catch((error) => console.error("Error loading the TEXT file:", error));
