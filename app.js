const $botonEncriptar = document.querySelector(".btn-encriptar");
const $botonDesencriptar = document.querySelector(".btn-desencriptar");
const $textareaEntrada = document.querySelector(".textarea-entrada");
const $aside = document.querySelector("aside");
const $textareaSalida = document.querySelector(".textarea-salida");
const $botonCopiar = document.querySelector(".boton-copiar");

$botonEncriptar.addEventListener("click", (e) => {
  e.preventDefault();

  // Texto a encriptar
  let text = $textareaEntrada.value;
  if (text === "") {
    $aside.classList.remove("ocultar-instrucciones");
    return;
  }

  $aside.classList.add("ocultar-instrucciones");

  $textareaSalida.textContent = encriptar(text);
});

$botonDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();

  // Texto a desencriptar
  let text = $textareaEntrada.value;
  if (text === "") {
    $aside.classList.remove("ocultar-instrucciones");

    return;
  }

  $aside.classList.add("ocultar-instrucciones");

  $textareaSalida.textContent = descencriptar(text);
});

$botonCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  copiar();
});

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
}

// function copy() {
//   let oldButton = document.getElementById("boton-copiar");
//   if (oldButton) {
//     console.log("klajdk");
//     return;
//   }
//   console.log("cuando no exite");

//   // const btnCopy = document.createElement("button");
//   // btnCopy.id = "boton-copiar";
//   // btnCopy.innerText = "Copiar";
//   // aside.appendChild(btnCopy);
//   // btnCopy.classList.add("btn", "btn-light");

//   btnCopy.addEventListener("click", (e) => {
//     e.preventDefault();

//     texareaAside.select();
//     document.execCommand("copy");
//   });
// }

// function encriptar() {
//   buttonEncriptar.addEventListener("click", (e) => {
//     e.preventDefault();
//     let textareaValue = textarea.value;

//     let textOutput = "";

//     for (let c of textareaValue) {
//       if (c === "a") {
//         textOutput += "ai";
//       } else if (c === "e") {
//         textOutput += "enter";
//       } else if (c === "i") {
//         textOutput += "imes";
//       } else if (c === "o") {
//         textOutput += "ober";
//       } else if (c === "u") {
//         textOutput += "ufat";
//       } else {
//         textOutput += c;
//       }
//     }

//     contentAside.style.display = "none";

//     aside.style.justifyContent = "space-between";
//     texareaAside.style.display = "block";
//     texareaAside.classList.add("textarea");

//     texareaAside.textContent = textOutput;

//     copy();
//   });
// }

// encriptar();

// function descencriptar() {
//   buttonDesencriptar.addEventListener("click", (e) => {
//     e.preventDefault();
//     let textareaValue = textarea.value;

//     let textOutput = "";

//     for (let i = 0; i < textareaValue.length; i++) {
//       if (textareaValue[i] === "a") {
//         textOutput += textareaValue[i];
//         i += 1;
//       } else if (textareaValue[i] === "e") {
//         textOutput += textareaValue[i];
//         i += 4;
//       } else if (textareaValue[i] === "i") {
//         textOutput += textareaValue[i];
//         i += 3;
//       } else if (textareaValue[i] === "o") {
//         textOutput += textareaValue[i];
//         i += 3;
//       } else if (textareaValue[i] === "u") {
//         textOutput += textareaValue[i];
//         i += 3;
//       } else {
//         textOutput += textareaValue[i];
//       }
//     }

//     contentAside.style.display = "none";
//     aside.style.justifyContent = "space-between";

//     texareaAside.style.display = "block";
//     texareaAside.classList.add("textarea");
//     texareaAside.textContent = textOutput;

//     copy();
//   });
// }
// descencriptar();
