document.addEventListener("DOMContentLoaded", function () {
  const btnCalcular = document.querySelector("#idBtnCalcularFactorial");
  const resultado = document.querySelector("#idResultado");

  btnCalcular.addEventListener("click", calcularFactorial);

  // Función recursiva para calcular factorial
  function factorial(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  function calcularFactorial() {
    const numero = parseInt(document.querySelector("#inputNumero").value);
    if (!isNaN(numero) && numero >= 0) {
      const valor = factorial(numero);
      resultado.innerHTML = `<p>El factorial de ${numero} es <strong>${valor}</strong></p>`;
    } else {
      alert("Ingrese un número válido (0 o mayor)");
    }
  }
});
