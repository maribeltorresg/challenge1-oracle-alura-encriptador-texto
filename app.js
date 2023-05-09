const buttonEncriptar = document.querySelector(".btn-encriptar");
const buttonDesencriptar = document.querySelector(".btn-desencriptar");
const textarea = document.querySelector("textarea");
const aside = document.querySelector("aside");

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

    aside.textContent = textOutput;

    buttonEncriptar.classList.remove("btn-light");
    buttonEncriptar.classList.add("btn-dark");
  });
}

encriptar();

function descencriptar() {
  buttonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let textareaValue = textarea.value;

    let textOutput = "";

    for (let i = 0; i < textareaValue.length; i++) {
      // console.log(textareaValue[i] + i);
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
    aside.textContent = textOutput;
    aside.style.display = "block";
    buttonDesencriptar.classList.remove("btn-light");
    buttonDesencriptar.classList.add("btn-dark");
  });
}
descencriptar();
