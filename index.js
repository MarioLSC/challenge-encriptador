const textoInput = document.getElementById("textoInput");
const resultado = document.getElementById("resultado");
const espacio = document.querySelector(".texto");
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");

function DesEncriptar(e) {
  e.preventDefault();
  encriptar();
  btnDesencriptar.addEventListener("click", () => {
    // e.preventDefault();
    let minuscula = textoInput.value.toLowerCase();
    let nuevoTexto = minuscula.replace(
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
    resultado.innerHTML = nuevoTexto;
    textoInput.value = "";
  });
}

function encriptar() {
  // e.preventDefault();
  let minuscula = textoInput.value.toLowerCase();
  let nuevoTexto = minuscula.replace(/[aeiou]/g, function (letra) {
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
  resultado.innerHTML = nuevoTexto;
  textoInput.value = "";
}

espacio.addEventListener("click", () => {
  if (resultado.textContent !== "") {
    navigator.clipboard.writeText(resultado.textContent);
    alert(`Texto '${resultado.textContent}' copiado`);
  }
});
