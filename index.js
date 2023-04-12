const textoInput = document.getElementById("textoInput");
const resultado = document.getElementById("resultado");
const espacio = document.querySelector(".texto");
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");

function DesEncriptar(e) {
  e.preventDefault();
  encriptar();
  btnDesencriptar.addEventListener("click", () => {
    let texto = textoInput.value.replace(
      /enter|imes|ai|ober|ufat/g,
      function (letra) {
        if (letra === "enter") {
          return (letra = "e");
        } else if (letra === "imes") {
          return (letra = "i");
        } else if (letra === "ai") {
          return (letra = "a");
        } else if (letra === "ober") {
          return (letra = "o");
        } else if (letra === "ufat") {
          return (letra = "u");
        }
      }
    );
    resultado.innerHTML = texto;
    textoInput.value = "";
  });
}

function encriptar() {
  let texto = textoInput.value.replace(/[aeiou]/g, function (letra) {
    if (letra === "e") {
      return (letra = "enter");
    } else if (letra === "i") {
      return (letra = "imes");
    } else if (letra === "a") {
      return (letra = "ai");
    } else if (letra === "o") {
      return (letra = "ober");
    } else if (letra === "u") {
      return (letra = "ufat");
    }
  });
  resultado.innerHTML = texto;
  textoInput.value = "";
}

espacio.addEventListener("click", () => {
  if (resultado.textContent !== "") {
    textoInput.value = resultado.textContent;
  }
});
