document.getElementById('actualizar').addEventListener('click', function () {
    // Se oculta
    document.getElementById('container--historial').classList.add('hidden');
    document.getElementById('container--boton').classList.add('hidden');
    // Se vuelve visible
    document.getElementById('container--actualizar').classList.remove('hidden');
});

//Expresion regular
const emailGmailRegex = /^[a-zA-Z0-9._\*\-]+@gmail\.com$/;
const emailHotmailRegex = /^[a-zA-Z0-9._\*\-]+@hotmail\.com$/;
const telefonoRegex = /^[0-9]{10}$/;
const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
const direccionRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s,.#-]+$/;

// Llamados de los id de los inputs
const nombreActualizacion = document.getElementById('nombre');
const direccionActualizacion = document.getElementById('direccion');
const correoActualizacion = document.getElementById('correoElectronico');
const telefonoActualizacion = document.getElementById('celular');

// Mensaje de error
const errorNombre = document.getElementById('nombre-error');
const errorDireccion = document.getElementById('direccion-error');
const errorCorreo = document.getElementById('correo-error');
const errorTelefono = document.getElementById('celular-error');

// Validaciones del form de Actualizar datos
nombreActualizacion.addEventListener('input', function () {
    const nombre = this.value;

    if (nombreRegex.test(nombre)) {
        // Es válido, esconder el mensaje de error
        errorNombre.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        errorNombre.textContent = 'Por favor, ingresa tu nombre completo.';
        errorNombre.style.color = '#dc3545'; // Rojo para indicar error
    }
});

direccionActualizacion.addEventListener('input', function () {
    const direccion = this.value;

    if (direccionRegex.test(direccion)) {
        // Es válido, esconder el mensaje de error
        errorDireccion.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        errorDireccion.textContent = 'Por favor, ingresa tu alcaldía, Ciudad.';
        errorDireccion.style.color = '#dc3545'; // Rojo para indicar error
    }
});

correoActualizacion.addEventListener('input', function () {
    const email = this.value;

    if (emailGmailRegex.test(email) === true || emailHotmailRegex.test(email) === true) {
        // Es válido, esconder el mensaje de error
        errorCorreo.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        errorCorreo.textContent = 'Por favor, ingresa un correo electrónico válido.';
        errorCorreo.style.color = '#dc3545'; // Rojo para indicar error
    }
});

telefonoActualizacion.addEventListener('input', function () {
    const telefono = this.value;

    if (telefonoRegex.test(telefono)) {
        // Es válido, esconder el mensaje de error
        errorTelefono.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        errorTelefono.textContent = 'El número debe tener exactamente 10 dígitos.';
        errorTelefono.style.color = '#dc3545'; // Rojo para indicar error
    }
});

document.getElementById('guardar').addEventListener('click', function () {
    let formIsValid = true;

    if (nombreActualizacion.value === '') {
        formIsValid = false;
        errorNombre.textContent = 'El campo de nombre no puede estar vacío.';
        errorNombre.style.color = '#dc3545';
    }

    if (direccionActualizacion.value === '') {
        formIsValid = false;
        errorDireccion.textContent = 'El campo de dirección no puede estar vacío.';
        errorDireccion.style.color = '#dc3545';
    }

    if (correoActualizacion.value === '') {
        formIsValid = false;
        errorCorreo.textContent = 'El campo de correo no puede estar vacío.';
        errorCorreo.style.color = '#dc3545';
    }

    if (telefonoActualizacion.value === '') {
        formIsValid = false;
        errorTelefono.textContent = 'El campo de teléfono no puede estar vacío.';
        errorTelefono.style.color = '#dc3545';
    }

    if (!formIsValid) {
        return;
    }

    // Obtener los valores de los inputs del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('correoElectronico').value;
    var telefono = document.getElementById('celular').value;
    var direccion = document.getElementById('direccion').value;

    // Actualizar la información en la sección de perfil
    document.getElementById('name').textContent = nombre;
    document.getElementById('email').textContent = email;
    document.getElementById('telefono').textContent = telefono;
    document.getElementById('dire').textContent = direccion;


    // Guardar los datos actualizados en localStorage
    localStorage.setItem('nombreActualizado', nombre);
    localStorage.setItem('emailActualizado', email);
    localStorage.setItem('telefonoActualizado', telefono);
    localStorage.setItem('direccionActualizado', direccion);

    // Si quieres ocultar el formulario después de guardar
    document.getElementById('container--actualizar').classList.add('hidden');
    document.getElementById('container--historial').classList.remove('hidden');
    document.getElementById('container--boton').classList.remove('hidden');
});