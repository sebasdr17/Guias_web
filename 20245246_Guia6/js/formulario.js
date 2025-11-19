document.addEventListener("DOMContentLoaded", function () {
  const inputNombre = document.querySelector("#inputNombre");
  const inputApellido = document.querySelector("#inputApellido");
  const inputFechaNacimiento = document.querySelector("#inputFechaNacimiento");
  const inputRdMasculino = document.querySelector("#inputRdMasculino");
  const inputRdFemenino = document.querySelector("#inputRdFemenino");
  const cmbPais = document.querySelector("#cmbPais");
  const inputDireccion = document.querySelector("#inputDireccion");

  const buttonAgregarPaciente = document.querySelector("#idBtnAgregarPaciente");
  const buttonMostrarPaciente = document.querySelector("#idBtnMostrarPaciente");

  const mensaje = document.createElement("div");
  document.body.appendChild(mensaje);

  let arrayPaciente = [];

  buttonAgregarPaciente.onclick = () => {
    addPaciente();
  };

  buttonMostrarPaciente.onclick = () => {
    imprimirPacientes();
  };

  function addPaciente() {
    const sexo =
      inputRdMasculino.checked ? "Hombre" :
      inputRdFemenino.checked ? "Mujer" : "";

    const labelPais = cmbPais.options[cmbPais.selectedIndex].text;

    if (
      inputNombre.value !== "" &&
      inputApellido.value !== "" &&
      inputFechaNacimiento.value !== "" &&
      sexo !== "" &&
      inputDireccion.value !== ""
    ) {
      arrayPaciente.push([
        inputNombre.value,
        inputApellido.value,
        inputFechaNacimiento.value,
        sexo,
        labelPais,
        inputDireccion.value
      ]);
      mensaje.innerHTML = "Paciente agregado";
      limpiarForm();
    } else {
      alert("Debe completar todos los campos");
    }
  }

  function limpiarForm() {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.selectedIndex = 0;
    inputDireccion.value = "";
  }

  function imprimirFilas() {
    let fila = "";
    let contador = 1;

    arrayPaciente.forEach((element, idx) => {
      fila += `
        <tr data-index="${idx}">
          <td scope="row" class="text-center fw-bold">${contador}</td>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td>${element[2]}</td>
          <td>${element[3]}</td>
          <td>${element[4]}</td>
          <td>${element[5]}</td>
          <td>
            <button type="button" class="btn btn-primary btn-editar" data-index="${idx}" title="Editar">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button type="button" class="btn btn-danger btn-eliminar" data-index="${idx}" title="Eliminar">
              <i class="bi bi-trash3-fill"></i>
            </button>
          </td>
        </tr>
      `;
      contador++;
    });

    return fila;
  }

  function imprimirPacientes() {
    if (arrayPaciente.length === 0) {
      document.getElementById("idTablaPacientes").innerHTML = "Ninguno";
      return;
    }

    let tabla = `
      <div class="table-responsive">
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha nacimiento</th>
              <th>Sexo</th>
              <th>País</th>
              <th>Dirección</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            ${imprimirFilas()}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("idTablaPacientes").innerHTML = tabla;
  }
});
