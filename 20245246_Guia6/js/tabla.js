document.addEventListener("DOMContentLoaded", function () {
  const btnGenerar = document.querySelector("#idBtnGenerarTabla");
  const containerTabla = document.querySelector("#idContainerTabla");

  btnGenerar.addEventListener("click", generarTabla);

  function generarTabla() {
    const filas = parseInt(document.querySelector("#inputFilas").value);
    const columnas = parseInt(document.querySelector("#inputColumnas").value);

    if (!isNaN(filas) && !isNaN(columnas) && filas > 0 && columnas > 0) {
      let tabla = "<table class='table table-bordered table-striped'>";
      tabla += "<tbody>";

      for (let i = 1; i <= filas; i++) {
        tabla += "<tr>";
        for (let j = 1; j <= columnas; j++) {
          tabla += `<td>Fila ${i}, Columna ${j}</td>`;
        }
        tabla += "</tr>";
      }

      tabla += "</tbody></table>";
      containerTabla.innerHTML = tabla;
    } else {
      alert("Ingrese valores válidos para filas y columnas");
    }
  }
});
