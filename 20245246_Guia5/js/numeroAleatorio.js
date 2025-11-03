const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
const numeroIntentos = 3;
let intentos = 1;

function generarNumeroAleatorio() {
  let mensaje;
  const parrafo = document.querySelector("#idParrafo");

  if (intentos <= numeroIntentos) {
    let numero = prompt(`¿Qué número se ha generado? (Intento ${intentos})`);
    if (parseInt(numero) === numeroAleatorio) {
      mensaje = `¡Correcto! El número era ${numeroAleatorio}`;
      intentos = numeroIntentos + 1;
    } else {
      mensaje = `Incorrecto. Intenta de nuevo.`;
      intentos++;
    }
  } else {
    mensaje = `Se acabaron los intentos. El número era ${numeroAleatorio}`;
  }

  parrafo.textContent = mensaje;
}
