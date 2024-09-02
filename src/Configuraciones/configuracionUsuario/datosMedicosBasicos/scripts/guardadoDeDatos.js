// Gaurdado de Datos Médicos del usuario

// Expresion regular (Formato)
const tipoSanguineoRegex = /^[aboABO+-]+$/;
const alergiasRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
const estaturaRegex = /^[0-9]{3}$/;
const pesoRegex = /^[0-9]{3}$/;

// Llamado de inputs por id
const tipoSanguineoActualizacion = document.getElementById('tipoSanguineo');
const alergiasActualizacion = document.getElementById('alergias');
const estaturaActualizacion = document.getElementById('estatura');
const pesoActualizacion = document.getElementById('peso');

// Mensaje de error
const errorTipoSanguineo = document.getElementById('tipoSanguineo-error');
const errorAlergias = document.getElementById('alergias-error');
const errorEstatura = document.getElementById('estatura-error');
const errorPeso = document.getElementById('peso-error');

// Validaciones para guardar Datos
tipoSanguineoActualizacion.addEventListener('input', function () {
    const tipoSanguineo = this.value;

    if (tipoSanguineoRegex.test(tipoSanguineo)) {
        // Válido -> esconder el mensaje de error
        errorTipoSanguineo.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        errorTipoSanguineo.textContent = 'Ingresa aquí tu tipo de sangre';
        errorTipoSanguineo.style.color = '#dc3545'; // Rojo para indicar error
    }
});

alergiasActualizacion.addEventListener('input', function () {
    const alergias = this.value;

    if (alergiasRegex.test(alergias)) {
        // Válido -> esconder el mensaje de error
        errorAlergias.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        errorAlergias.textContent = 'En el caso de que tengas alguna alergia, ingresala aquí';
        errorAlergias.style.color = '#dc3545'; // Rojo para indicar error
    }
});

estaturaActualizacion.addEventListener('input', function () {
    const estatura = this.value;

    if (estaturaRegex.test(estatura)) {
        // Válido -> esconder el mensaje de error
        errorEstatura.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        errorEstatura.textContent = 'Ingresa tu estatura en centímetros por favor';
        errorEstatura.style.color = '#dc3545'; // Rojo para indicar error
    }
});

pesoActualizacion.addEventListener('input', function () {
    const peso = this.value;

    if (pesoRegex.test(peso)) {
        // Válido -> esconder el mensaje de error
        errorPeso.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        errorPeso.textContent = 'Ingresa tu peso en kilogramos por favor';
        errorPeso.style.color = '#dc3545'; // Rojo para indicar error
    }
});

document.getElementById('guardar').addEventListener('click', function () {
    let formIsValid = true;

    if (tipoSanguineoActualizacion.value === '') {
        formIsValid = false;
        errorTipoSanguineo.textContent = 'El campo de Tipo de sangre no puede estar vacío.';
        errorTipoSanguineo.style.color = '#dc3545';
    }

    if (alergiasActualizacion.value === '') {
        formIsValid = false;
        errorAlergias.textContent = 'El campo de alergias no puede estar vacío.';
        errorAlergias.style.color = '#dc3545';
    }

    if (estaturaActualizacion.value === '') {
        formIsValid = false;
        errorEstatura.textContent = 'El campo de estatura no puede estar vacío.';
        errorEstatura.style.color = '#dc3545';
    }

    if (pesoActualizacion.value === '') {
        formIsValid = false;
        errorPeso.textContent = 'El campo de peso no puede estar vacío.';
        errorPeso.style.color = '#dc3545';
    }

    if (!formIsValid) {
        return;
    }

    // Obtener los valores de los inputs del formulario
    var tipoSanguineo = document.getElementById('tipoSanguineo').value;
    var alergias = document.getElementById('alergias').value;
    var estatura = document.getElementById('estatura').value;
    var  peso = document.getElementById('peso').value;

    // Guardar los datos actualizados en localStorage
    localStorage.setItem('tipoSanguineoActualizado', tipoSanguineo);
    localStorage.setItem('alergiasActualizado', alergias);
    localStorage.setItem('estaturaActualizado', estatura);
    localStorage.setItem('pesoActualizado', peso);

});
