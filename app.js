let secretNumber = 0;
let attempt = 0;
let listDrawNum = [];
let maxNumber = 10;
let maxNumAttempt = 4;

function assignTextElement(element, text) {
  let elementHTML = document.querySelector("h1");
  elementHTML.innerHTML = text;
  return;
}

function checkAttempt() {
  let userNumber = parseInt(document.getElementById("uservalue").value);
  /*console.log (typeof (userNumber));
    console.log (typeof (userNumber));
    console.log (userNumber);
    console.log (userNumber);
        console.log (userNumber === secretNumber);*/

  if (userNumber === secretNumber) {
    assignTextElement(
      "p",
      `¡Acertaste! en ${attempt} ${attempt == 1 ? "intento" : "intentos"}`
    );
    document.getElementById("restart").removeAttribute("disabled");
    document.getElementById("attempt").setAttribute("disabled", "true");
  } else {
    if (userNumber < secretNumber) {
      assignTextElement("p", "El número debe ser mayor!");
    } else {
      assignTextElement("p", "El número debe ser menor");
    }
    attempt++;

    cleanBox();
    maxNumAttempts();
  }

  return;
}

function initialConditions() {
  assignTextElement("h1", "¡Juego del número secreto!");
  assignTextElement("p", `Selecciona un número del 1 al ${maxNumber}`);
  secretNumber = generateSecretNum();
  attempt = 1;
}

function maxNumAttempts() {
  if (attempt == maxNumAttempts) {
    assignTextElement(
      "p",
      `Llegaste al número máximo de ${attempt} ${attempt == 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("restart").removeAttribute("disabled");
    document.getElementById("attempt").setAttribute("disabled", "true");
  }
  return;
}

function restartGame() {
  cleanBox();
  initialConditions();
  document.querySelector("#restart").setAttribute("disabled", "true");
  document.getElementById("attempt").removeAttribute("disabled");
}

function cleanBox() {
  document.querySelector("#uservalue").value = "";
}

function generateSecretNum() {
  let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;
  //si el numero generado está en la lista
  //si ya sorteamos todos los numeros
  if (listDrawNum.length == maxNumber) {
    asignarTextoElemento("p", "Ya has dicho todos los números");
  }

  if (listDrawNum.includes(generatedNumber)) {
    return generateSecretNum();
  } else {
    listDrawNum.push(generatedNumber);
    return generatedNumber;
  }
}

initialConditions();

