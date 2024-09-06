// Expresiones regulares
const emailGmailRegex = /^[a-zA-Z0-9._\*\-]+@gmail\.com$/;
const emailHotmailRegex = /^[a-zA-Z0-9._\*\-]+@hotmail\.com$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%&_\@#!.\-])[A-Za-z\d$%&_\@#!.\-]{8,}$/;
const telefonoRegex = /^[0-9]{10}$/;
const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;

// Inputs
const emailInput = document.getElementById('correo--registroU');
const passwordInput = document.getElementById('contraseña--registroU');
const passwordConfInput = document.getElementById('conf-contraseña--registroU');
const telefonoInput = document.getElementById('telefono--registroU');
const nombreInput = document.getElementById('nombre--registroU');

// Mensajes de error
const errores = {
    nombre: false,
    telefono: false,
    email: false,
    password: false,
    passwordConfirm: false
};

function validarNombre() {
    const nombre = nombreInput.value;
    const errorElement = document.getElementById('nombre-error');

    if (nombreRegex.test(nombre)) {
        errorElement.textContent = '';
        errores.nombre = false;
    } else {
        errorElement.textContent = 'Por favor, ingresa tu nombre completo.';
        errorElement.style.color = '#dc3545';
        errores.nombre = true;
    }
}

function validarTelefono() {
    const telefono = telefonoInput.value;
    const errorElement = document.getElementById('telefono-error');

    if (telefonoRegex.test(telefono)) {
        errorElement.textContent = '';
        errores.telefono = false;
    } else {
        errorElement.textContent = 'El número debe tener exactamente 10 dígitos.';
        errorElement.style.color = '#dc3545';
        errores.telefono = true;
    }
}

function validarEmail() {
    const email = emailInput.value;
    const errorElement = document.getElementById('correo-error');

    if (emailGmailRegex.test(email) || emailHotmailRegex.test(email)) {
        errorElement.textContent = '';
        errores.email = false;
    } else {
        errorElement.textContent = 'Por favor, ingresa un correo electrónico válido.';
        errorElement.style.color = '#dc3545';
        errores.email = true;
    }
}

function validarPassword() {
    const password = passwordInput.value;
    const errorElement = document.getElementById('contraseña-error');

    if (passwordRegex.test(password)) {
        errorElement.textContent = '';
        errores.password = false;
        validarPasswordConfirm();
    } else {
        errorElement.textContent = 'La contraseña debe tener al menos una letra mayúscula, una minúscula, un número, un símbolo y al menos 8 caracteres.';
        errorElement.style.color = '#dc3545';
        errores.password = true;
    }
}

function validarPasswordConfirm() {
    const password = passwordInput.value;
    const passwordConf = passwordConfInput.value;
    const errorElement = document.getElementById('contraseñaConf-error');

    if (password === passwordConf) {
        errorElement.textContent = '';
        errores.passwordConfirm = false;
    } else {
        errorElement.textContent = 'La contraseña no coincide.';
        errorElement.style.color = '#dc3545';
        errores.passwordConfirm = true;
    }
}

// Agregar listeners a los inputs
nombreInput.addEventListener('input', validarNombre);
telefonoInput.addEventListener('input', validarTelefono);
emailInput.addEventListener('input', validarEmail);
passwordInput.addEventListener('input', validarPassword);
passwordConfInput.addEventListener('input', validarPasswordConfirm);

// Formulario y submit
const registroFormulario = document.querySelector('#registrarseUsuarioForm');

registroFormulario.addEventListener('submit', (event) => {
    validarNombre();
    validarTelefono();
    validarEmail();
    validarPassword();
    validarPasswordConfirm();

    // Si hay algún error, evitar el envío del formulario
    if (errores.nombre || errores.telefono || errores.email || errores.password || errores.passwordConfirm) {
        event.preventDefault();
        alert('Por favor, corrige los errores antes de continuar.');
    } else {
        const idRoll = 2; // 1 admin, 2 cliente, 3 proveedor
        const user = {
            username: nombreInput.value,
            telefono: telefonoInput.value,
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
    }
});
