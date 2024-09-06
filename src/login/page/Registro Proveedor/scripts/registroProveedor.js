//Expresion regular
const emailGmailRegex = /^[a-zA-Z0-9._\*\-]+@gmail\.com$/;
const emailHotmailRegex = /^[a-zA-Z0-9._\*\-]+@hotmail\.com$/;
// const passwordRegex = /^[a-zA-Z0-9$%&_\@#!.\-]{8,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%&_\@#!.\-])[A-Za-z\d$%&_\@#!.\-]{8,}$/;
const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;


// Mando a llamar el input para poder evaluarlo y cumplir con la regex
const emailInput = document.getElementById('correo--registro');
const passwordInput = document.getElementById('contraseña--registro');
const passwordConfInput = document.getElementById('conf-contraseña--registro');
const nombreInput = document.getElementById('nombre--registro');
const nuevoEspecialidad = document.getElementById('especialidad');
//

nombreInput.addEventListener('input', function () {
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

nuevoEspecialidad.addEventListener('change', function () {
    const especialidad = this.value;
    const Error = document.getElementById('especialidad-error');

    if (especialidad !== "") {
        // Es válido, esconder el mensaje de error
        Error.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        Error.textContent = 'Por favor, selecciona una opción';
        Error.style.color = '#dc3545'; // Rojo para indicar error
    }
});

emailInput.addEventListener('input', function () {
    const email = this.value;
    const Error = document.getElementById('correo-error');

    if (emailGmailRegex.test(email) === true || emailHotmailRegex.test(email) === true) {
        // Es válido, esconder el mensaje de error
        Error.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        Error.textContent = 'Por favor, ingresa un correo electrónico válido.';
        Error.style.color = '#dc3545'; // Rojo para indicar error
    }
});

passwordInput.addEventListener('input', function () {
    const password = this.value;
    const Error = document.getElementById('contraseña-error');

    if (passwordRegex.test(password) === true) {
        // Es válido, esconder el mensaje de error
        Error.textContent = '';
        passwordConfInput.addEventListener('input', function () {
            const passwordconf = this.value;
            const Error2 = document.getElementById('contraseñaConf-error');
            if (password === passwordconf) {
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
        Error.style.width = 408;
        Error.style.color = '#dc3545'; // Rojo para indicar error
    }
});

// Crear variables para los formularios
const registroFormulario = document.querySelector('#registrarseForm');

//Se crea evento en formulario para Registrar nuevos Usuarios
registroFormulario.addEventListener('submit', () => {
    const telefono = "2";
    const idRoll = 3; // 1 admin, 2 cliente, 3 proveedor
    const user = {
        username: nombreInput.value,
        telefono: telefono,
        email: emailInput.value,
        password: passwordInput.value,
        passwordconfirm: passwordConfInput.value,
        idrol: idRoll
    };

    fetch('http://localhost:8081/api/v1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            console.log('El usuario se ha registrado con éxito', data);
        })
        .catch(error => {
            console.error('Error en el registro:', error);
        });


});

// const procesaTodo = (event)=>{
//     event.preventDefault();
//     const datos = new FormData(event.target);
    
//     const datosCompletos = Object.fromEntries(datos.entries());
//     console.log(JSON.stringify(datosCompletos));
// }

// registrarseForm.addEventListener('submit', procesaTodo);




    