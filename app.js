const buttonEncriptar = document.querySelector(".btn-encriptar");
const buttonDesencriptar = document.querySelector(".btn-desencriptar");
const textarea = document.querySelector(".textarea");
const aside = document.querySelector("aside");
const texareaAside = document.querySelector(".texareaAside");
const contentAside = document.querySelector(".content-aside");

function copy() {
  let oldButton = document.getElementById("boton-copiar");
  if (oldButton) {
    console.log("klajdk");
    return;
  }
  console.log("cuando no exite");

  const btnCopy = document.createElement("button");
  btnCopy.id = "boton-copiar";
  btnCopy.innerText = "Copiar";
  aside.appendChild(btnCopy);
  btnCopy.classList.add("btn", "btn-light");

  btnCopy.addEventListener("click", (e) => {
    e.preventDefault();

    texareaAside.select();
    document.execCommand("copy");
  });
}

function encriptar() {
  buttonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let textareaValue = textarea.value;

    let textOutput = "";

    for (let c of textareaValue) {
      if (c === "a") {
        textOutput += "ai";
      } else if (c === "e") {
        textOutput += "enter";
      } else if (c === "i") {
        textOutput += "imes";
      } else if (c === "o") {
        textOutput += "ober";
      } else if (c === "u") {
        textOutput += "ufat";
      } else {
        textOutput += c;
      }
    }

    contentAside.style.display = "none";

    aside.style.justifyContent = "space-between";
    texareaAside.style.display = "block";
    texareaAside.classList.add("textarea");
    texareaAside.textContent = textOutput;

    copy();
  });
}

encriptar();

function descencriptar() {
  buttonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let textareaValue = textarea.value;

    let textOutput = "";

    for (let i = 0; i < textareaValue.length; i++) {
      if (textareaValue[i] === "a") {
        textOutput += textareaValue[i];
        i += 1;
      } else if (textareaValue[i] === "e") {
        textOutput += textareaValue[i];
        i += 4;
      } else if (textareaValue[i] === "i") {
        textOutput += textareaValue[i];
        i += 3;
      } else if (textareaValue[i] === "o") {
        textOutput += textareaValue[i];
        i += 3;
      } else if (textareaValue[i] === "u") {
        textOutput += textareaValue[i];
        i += 3;
      } else {
        textOutput += textareaValue[i];
      }
    }

    contentAside.style.display = "none";
    aside.style.justifyContent = "space-between";

    texareaAside.style.display = "block";
    texareaAside.classList.add("textarea");
    texareaAside.textContent = textOutput;

    copy();
  });
}
descencriptar();
