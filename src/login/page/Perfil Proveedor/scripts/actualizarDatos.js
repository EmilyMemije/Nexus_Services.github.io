//se crea una funcion que al presionar el boton de actualizar datos muestra el apartado de actualizar datos 

document.getElementById('updateButton').addEventListener('click', function() {
    document.getElementById('container--servicios').classList.add('hidden');
    document.getElementById('container--actualizar').classList.remove('hidden');
});

/*
document.getElementById('guardar').addEventListener('click', function() {
    document.getElementById('container--actualizar').classList.add('hidden');
    document.getElementById('container--servicios').classList.remove('hidden');
});
*/

//Expresion regular
const emailGmailRegex = /^[a-zA-Z0-9._\*\-]+@gmail\.com$/;
const emailHotmailRegex = /^[a-zA-Z0-9._\*\-]+@hotmail\.com$/;
const telefonoRegex = /^[0-9]{10}$/;
const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
const direccionRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s.,#\-\/]+$/;


// Mensaje de error
const errorNombre = document.getElementById('nombre-error');
const errorDireccion = document.getElementById('direccion-error');
const errorCorreo = document.getElementById('correo-error');
const errorTelefono = document.getElementById('celular-error');


//es la funcion con la que los datos se actualizan en el perfil
function guardarDatos() {
    // se crean las constantes con los datos que ingresa el usuario
    const nombreActualizado = document.getElementById('nameAct').value;
    const direccionActualizada = document.getElementById('direccionAct').value;
    const especialidadActualizada = document.getElementById('especialidadAct').value;
    const correoActualizado = document.getElementById('correoElectronicoAct').value;
    const celularActualizado = document.getElementById('celularAct').value;
    let isValid = true;


    // Validar el nombre
    if (!nombreRegex.test(nombreActualizado)) {
        errorNombre.textContent = "Nombre inválido.";
        errorNombre.style.color = '#dc3545';
        isValid = false;
    } else {
        errorNombre.textContent = "";
    }

    // Validar la dirección
    if (!direccionRegex.test(direccionActualizada)) {
        errorDireccion.textContent = "Dirección inválida.";
        errorDireccion.style.color = '#dc3545';
        isValid = false;
    } else {
        errorDireccion.textContent = "";
    }

    // Validar el correo
    if (!emailGmailRegex.test(correoActualizado) && !emailHotmailRegex.test(correoActualizado)) {
        errorCorreo.textContent = "Correo electrónico inválido.";
        errorCorreo.style.color = '#dc3545';
        isValid = false;
    } else {
        errorCorreo.textContent = "";
    }

    // Validar el teléfono
    if (!telefonoRegex.test(celularActualizado)) {
        errorTelefono.textContent = "Teléfono inválido.";
        errorTelefono.style.color = '#dc3545';
        isValid = false;
    } else {
        errorTelefono.textContent = "";
    }

    // Si todos los datos son válidos, guardar en localStorage
    if (isValid) {
        localStorage.setItem('nombre', nombreActualizado);
        localStorage.setItem('direccion', direccionActualizada);
        localStorage.setItem('correo', correoActualizado);
        localStorage.setItem('celular', celularActualizado);

    // se llama la funcion actualizar perfil
    actualizarPerfil();
    }
}
//funcion para en la que se guardan los datos de las const a ls y actualiza datos del perfil  
function actualizarPerfil() {
    const nombreGuardado = localStorage.getItem('nombre');
    const especialidadGuardada = localStorage.getItem('especialidad');
    const correoGuardado = localStorage.getItem('correo');
    const celularGuardado = localStorage.getItem('celular');
    

    if (nombreGuardado) {
        document.getElementById('name').textContent = nombreGuardado;
    }
    if (especialidadGuardada) {
        document.getElementById('especialidad').textContent = especialidadGuardada;
    }
    if (correoGuardado) {
        document.getElementById('email').textContent = correoGuardado;
    }
    if (celularGuardado) {
        document.getElementById('telefono').textContent = celularGuardado;
    }
}
// funcion para que al precionar el boton, los datos ungresadoes en el formulario se guarden
document.getElementById('guardar').addEventListener('click', guardarDatos);
//funcion para que al actualizar la pag los datos del LS siguan en el apartado del perfil
window.addEventListener('DOMContentLoaded', actualizarPerfil);
