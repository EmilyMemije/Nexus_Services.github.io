window.addEventListener('pageshow', function (event) {
    if (event.persisted || performance.getEntriesByType('navigation')[0].type === 'back_forward') {
        document.getElementById('form--login').reset(); // Resetea el formulario
    }
});

// Opción adicional: Resetea el formulario al cargar la página
window.addEventListener('load', function () {
    document.getElementById('form--login').reset();
});
//Expresion regular
const emailGmailRegex = /^[a-zA-Z0-9._\*\-]+@gmail\.com$/;
const emailHotmailRegex = /^[a-zA-Z0-9._\*\-]+@hotmail\.com$/;

const passwordRegex = /^[a-zA-Z0-9$%&_\@#!.\-]{8,}$/;


// Mando a llamar el input para poder evaluarlo y cumplir con la regex
const emailInput = document.getElementById('email-login');
const passwordInput = document.getElementById('password--login');
const form = document.getElementById('form--login');
// const errorEmail = document.getElementById('email-error');
const errorLogin = document.getElementById('login--error');

emailInput.addEventListener('input', (event) => {
    const email = event.target.value;

    // Sentencia condicional para evaluar el valor del input, si se cumple se habilita el boton, en caso contrario, sigue deshabilitado
    if (emailGmailRegex.test(email) === true || emailHotmailRegex.test(email) === true) {
        // Es válido, esconder el mensaje de error
        errorLogin.textContent = '';
    } else {
        // Mostrar un mensaje de error si no cumple con la longitud
        // errorEmail.textContent = 'Por favor, ingresa un correo electrónico válido.';
        // errorEmail.style.color = '#dc3545'; // Rojo para indicar error
    }
});

passwordInput.addEventListener('input', (event) => {
    const password = event.target.value;

    if (passwordRegex.test(password)) {
        // Si la contraseña cumple con la regex, aplicar estilo normal
        passwordInput.classList.add('valid');
        passwordInput.classList.remove('invalid');
    } else {
        // Si no cumple con la regex, aplicar estilo tenue
        passwordInput.classList.add('invalid');
        passwordInput.classList.remove('valid');
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const url = `http://localhost:8081/api/v1/usercorreo/email?nexusmail=${emailInput.value}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let loginExitoso = false;
            if (data.email === emailInput.value && data.password === passwordInput.value) {
                loginExitoso = true;
                // Guarda el correo del usuario en localStorage
                localStorage.setItem('usuarioLogueado', data.username);
                localStorage.setItem('emailActualizado', data.email);
                localStorage.setItem('telefonoActualizado', data.telefono);
                //ya que se cumple la condicion hace el action del form
                event.target.submit();
            }
            if (!loginExitoso) {
                //si el login no es correcto entonces se limpia los inputs
                errorLogin.textContent = 'Correo o contraseña incorrecto';
                errorLogin.style.color = '#dc3545'; // Rojo para indicar error
                emailInput.value = '';
                passwordInput.value = '';
            }
        })
        .catch(error => {
            alert(`Hubo un error al cargar los datos`);
            console.error(`Èrror el cargar`, error);
        });
});
