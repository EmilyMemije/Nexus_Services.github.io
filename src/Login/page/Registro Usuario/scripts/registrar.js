//Expresion regular
const emailGmailRegex = /^[a-zA-Z0-9._\*\-]+@gmail\.com$/;
const emailHotmailRegex = /^[a-zA-Z0-9._\*\-]+@hotmail\.com$/;
// const passwordRegex = /^[a-zA-Z0-9$%&_\@#!.\-]{8,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%&_\@#!.\-])[A-Za-z\d$%&_\@#!.\-]{8,}$/;
const telefonoRegex = /^[0-9]{10}$/;
const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;


// Mando a llamar el input para poder evaluarlo y cumplir con la regex
const emailInput = document.getElementById('correo--registroU');
const passwordInput = document.getElementById('contraseña--registroU');
const passwordConfInput = document.getElementById('conf-contraseña--registroU');
const telefonoInput = document.getElementById('telefono--registroU');
const nombreInput = document.getElementById('nombre--registroU');

nombreInput.addEventListener('input', function() {
    const nombre = this.value;
    const Error = document.getElementById('nombre-error');
    
    if (nombreRegex.test(nombre)) {
        // Es válido, esconder el mensaje de error
        Error.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        Error.textContent = 'Por favor, ingresa tu nombre completo.';
        Error.style.color = '#dc3545'; // Rojo para indicar error
    }
});

telefonoInput.addEventListener('input', function() {
    const telefono = this.value;
    const Error = document.getElementById('telefono-error');
    
    if (telefonoRegex.test(telefono)) {
        // Es válido, esconder el mensaje de error
        Error.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        Error.textContent = 'El número debe tener exactamente 10 dígitos.';
        Error.style.color = '#dc3545'; // Rojo para indicar error
    }
});

emailInput.addEventListener('input', function() {
    const email = this.value;
    const Error = document.getElementById('correo-error');
    
    if(emailGmailRegex.test(email) === true || emailHotmailRegex.test(email) === true ) {
        // Es válido, esconder el mensaje de error
        Error.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        Error.textContent = 'Por favor, ingresa un correo electrónico válido.';
        Error.style.color = '#dc3545'; // Rojo para indicar error
    }
});

passwordInput.addEventListener('input', function() {
    const password = this.value;
    const Error = document.getElementById('contraseña-error');
    
    if(passwordRegex.test(password) === true ) {
        // Es válido, esconder el mensaje de error
        Error.textContent = '';
        passwordConfInput.addEventListener('input', function() {
            const passwordconf = this.value;
            const Error2 = document.getElementById('contraseñaConf-error');
                if(password === passwordconf) {
                    // Es válido, esconder el mensaje de error
                    Error2.textContent = '';
                } else {
                    // Mostrar un mensaje de error si no cumple con la longitud
                    Error2.textContent = 'La contraseña no coincide';
                    Error2.style.color = '#dc3545'; // Rojo para indicar error
                }
        });
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        Error.textContent = 'Por favor, la contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número, un símbolo y una longitud mínima de 8 caracteres.';
        Error.style.width= 408;
        Error.style.color = '#dc3545'; // Rojo para indicar error
    }
});

// Crear variables para los formularios
const registroFormulario = document.querySelector('#registrarseUsuarioForm');

//Se crea evento en formulario para Registrar nuevos Usuarios
registroFormulario.addEventListener('submit', () => {
   //se guarda el registro en localStorage
    localStorage.setItem("nombre--registro", nombreInput.value);
    localStorage.setItem("telefono", telefonoInput.value);
    localStorage.setItem("correo--registro", emailInput.value);
    localStorage.setItem("contraseña--registro", passwordInput.value);
    localStorage.setItem("conf-contraseña--registro", passwordConfInput.value);

    alert('¡Registro exitoso!');

    registroFormulario.reset();
/*
    const datosUsuario = { 
        nombre : nuevoNombre,
        apellidos : nuevoApellido,
        especialidad : nuevoEspecialidad,
        correo : nuevoEmail,
        contraseña : nuevoPassword
    }

    //--- Creando el fetch para enviar (POST) datos a una API
fetch(`registro.json`, {
    // Indicar el tipo de método HTTP
    method: 'POST',
    // Definir los headers
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    // Definir el cuerpo del Objeto que se va a enviar a la API
    body: JSON.stringify(datosUsuario)
})
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(error => console.error(error))*/


});