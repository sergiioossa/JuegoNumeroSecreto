let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoNumeroIntentos = 4;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector("h1");
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  /*console.log (typeof (numeroUsuario));
    console.log (typeof (numeroSecreto));
    console.log (numeroSecreto);
    console.log (numeroUsuario);
        console.log (numeroUsuario === numeroSecreto);*/

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Acertaste! en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("intentar").setAttribute("disabled", "true");
  } else {
    if (numeroUsuario < numeroSecreto) {
      asignarTextoElemento("p", "El número debe ser mayor!");
    } else {
      asignarTextoElemento("p", "El número debe ser menor");
    }
    intentos++;

    limpiarcaja();
    maximoIntentos();
  }

  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "¡Juego del número secreto!");
  asignarTextoElemento("p", `Selecciona un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function maximoIntentos() {
  if (intentos == maximoNumeroIntentos) {
    asignarTextoElemento(
      "p",
      `Llegaste al número máximo de ${intentos} ${intentos == 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("intentar").setAttribute("disabled", "true");
  }
  return;
}

function reiniciarJuego() {
  limpiarcaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
  document.getElementById("intentar").removeAttribute("disabled");
}

function limpiarcaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //si el numero generado está en la lista
  //si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya has dicho todos los números");
  }

  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}

condicionesIniciales();

