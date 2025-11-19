document.addEventListener("DOMContentLoaded", function () {
  const containerNumeros = document.querySelector("#idContainerNumeros");
  const btnAgregarNumero = document.querySelector("#idBtnAgregarNumero");
  const btnMostrarNumeros = document.querySelector("#idBtnMostrarNumeros");

  let arregloNumerico = [];

  btnAgregarNumero.addEventListener("click", agregarNumero);
  btnMostrarNumeros.addEventListener("click", mostrarArreglo);

  function agregarNumero() {
    const valor = document.querySelector("#inputNumero").value;
    const numero = parseFloat(valor);

    if (!isNaN(numero)) {
      arregloNumerico.push(numero);
      alert("Número agregado correctamente");
      document.querySelector("#inputNumero").value = "";
      document.querySelector("#inputNumero").focus();
    } else {
      alert("Debe ingresar un número válido");
    }
  }

  function mostrarArreglo() {
    if (arregloNumerico.length > 0) {
      let contenido = "<p><strong>Arreglo:</strong> [" + arregloNumerico.join(", ") + "]</p>";
      containerNumeros.innerHTML = contenido;
    } else {
      alert("El arreglo está vacío");
    }
  }
});
