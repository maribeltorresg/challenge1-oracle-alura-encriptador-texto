const $botonEncriptar = document.querySelector(".btn-encriptar");
const $botonDesencriptar = document.querySelector(".btn-desencriptar");
const $textareaEntrada = document.querySelector(".textarea-entrada");
const $aside = document.querySelector("aside");
const $textareaSalida = document.querySelector(".textarea-salida");
const $botonCopiar = document.querySelector(".boton-copiar");

let textoCorrecto = true;

$textareaEntrada.addEventListener("input", (event) => {
  const letrasPermitidas = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    " ",
    ",",
    ".",
  ];
  // Accede al valor actual del elemento de entrada
  const valor = event.target.value;
  let textArray = valor.split("");
  for (let i = 0; i < textArray.length; i++) {
    if (!letrasPermitidas.includes(textArray[i])) {
      $textareaEntrada.classList.add("textarea-entrada-invalido");
      textoCorrecto = false;
      break;
    } else {
      $textareaEntrada.classList.remove("textarea-entrada-invalido");
      textoCorrecto = true;
    }
  }
});

$botonEncriptar.addEventListener("click", (e) => {
  e.preventDefault();

  // let classListTextareaEntrada = $textareaEntrada.classList;

  // Verificar si tiene la clase "textarea-entrada-invalido"
  // if (classListTextareaEntrada.contains("textarea-entrada-invalido")) {
  //   return;
  // }

  if (textoCorrecto) {
    console.log(
      "La aplicacion " +
        (estaLista() ? "SI" : "NO") +
        " esta lista para iniciar la encriptacion."
    );

    if (!estaLista()) {
      mostrarInstrucciones();
      return;
    }

    ocultarInstrucciones();

    // Texto a encriptar
    let text = $textareaEntrada.value;
    $textareaSalida.textContent = encriptar(text);
    $textareaEntrada.value = "";
  }
});

$botonDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();

  if (textoCorrecto) {
    if (!estaLista()) {
      mostrarInstrucciones();
      return;
    }

    ocultarInstrucciones();

    // Texto a desencriptar
    let text = $textareaEntrada.value;
    $textareaSalida.textContent = descencriptar(text);
    $textareaEntrada.value = "";
  }
});

$botonCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  copiar();
});

function mostrarInstrucciones() {
  $aside.classList.remove("ocultar-instrucciones");
}

function ocultarInstrucciones() {
  $aside.classList.add("ocultar-instrucciones");
}

function estaLista() {
  // Texto a encriptar o desencriptar
  let text = $textareaEntrada.value;
  if (text !== "") {
    return true;
  }

  return false;
}

function encriptar(text) {
  let textEncriptado = "";

  for (let c of text) {
    if (c === "a") {
      textEncriptado += "ai";
    } else if (c === "e") {
      textEncriptado += "enter";
    } else if (c === "i") {
      textEncriptado += "imes";
    } else if (c === "o") {
      textEncriptado += "ober";
    } else if (c === "u") {
      textEncriptado += "ufat";
    } else {
      textEncriptado += c;
    }
  }

  return textEncriptado;
}

function descencriptar(text) {
  let textDescencriptado = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
      textDescencriptado += text[i];
      i += 1;
    } else if (text[i] === "e") {
      textDescencriptado += text[i];
      i += 4;
    } else if (text[i] === "i") {
      textDescencriptado += text[i];
      i += 3;
    } else if (text[i] === "o") {
      textDescencriptado += text[i];
      i += 3;
    } else if (text[i] === "u") {
      textDescencriptado += text[i];
      i += 3;
    } else {
      textDescencriptado += text[i];
    }
  }
  return textDescencriptado;
}

function copiar() {
  $textareaSalida.select();

  document.execCommand("copy");
  $botonCopiar.textContent = "Copiado!";
  setTimeout(() => {
    $botonCopiar.textContent = "Copiar";
  }, 1000);
}
