const APP_TOKEN = "qaLYa*wMw)4A.FxM";
const BASE_URL =
  "https://aadl3inscription2024.dz/AR/Inscription-AndroidiOS.php";
const TIMEOUT = 20 * 1000; // 20 seconds

const submitButton = document.getElementById("submit");

// Function to add a log entry
function addLogEntry(message) {
  const logsDetails = document.getElementById("logs-details");
  const timestamp = new Date().toLocaleString("fr-FR"); // Current timestamp
  const logItem = document.createElement("li");
  logItem.innerHTML = `<span class="timestamp">${timestamp}</span> ${message}`;
  logsDetails.appendChild(logItem);
}

const APICall = async (headers, encodedPayload, i) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers,
        body: encodedPayload.replace('*', '%2A'),
        signal: AbortSignal.timeout(TIMEOUT),
      });

      res
        .text()
        .then((text) => {
          resolve(text);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
};

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

    return;
  } else {
    // ERROR
    const matchGroup = text.match(/{(.*?)}/);
    const jsonData = matchGroup[0];
    const errorMessage = `Erreur: ${jsonData}`;
    alert(errorMessage);
    return errorMessage;
  }
};

// Event listener for the init button to reset the form
submitButton.addEventListener("click", async (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Disable init data and submit buttons
  const initButton = document.getElementById("init");
  initButton.disabled = true;
  submitButton.disabled = true;

  // Hide success box
  const successBox = document.getElementById("success-box");
  successBox.style = "display:none;";

  // Define payload
  const wilaya = document.getElementById("wilaya");
  const nin = document.getElementById("nin");
  const nss = document.getElementById("nss");
  const phone = document.getElementById("phone");

  const data = {
    P1: wilaya.value,
    P2: nin.value,
    P3: nss.value,
    P4: phone.value,
    P5: APP_TOKEN,
  };

  // Save data to localstorage
  localStorage.setItem("formData", JSON.stringify(data));

  const payload = new FormData();
  Object.keys(data).forEach((key) => {
    payload.append(key, data[key]);
  });

  // URL-encode payload
   let encodedPayload = new URLSearchParams(payload).toString();

  // Calculate content-length based on the length of P1
  const content_length = data.P1.length === 1 ? "80" : "81";

  // Define headers to mimic a Dart mobile application
  const headers = {
    "accept-encoding": "gzip",
    "content-length": content_length,
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    host: "aadl3inscription2024.dz",
    "user-agent": "Dart/3.4 (dart:io)",
  };

  let i = 1;
  while (i > 0) {
    document.getElementById("submit").innerHTML = "En Cours... " + i;
    await APICall(headers, encodedPayload, i)
      .then((response) => {
        // Handle response
        let err = handleResponse(response);
        if (err) {
          addLogEntry(`${err}. Retrying in 1 second..."`);
          // Increment
          i++;
        } else {
          // Enable init form data
          initButton.disabled = false;
          // Break loop
          i = -1;
        }
      })
      .catch((err) => {
        addLogEntry(`${err}. Retrying in 1 second...`);
        // Increment
        i++;
      });
  }
});
