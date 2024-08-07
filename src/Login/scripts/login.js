// Mando a llamar el boton para desabilitarlo desde javascript
const buttonLogin = document.getElementById('login');
buttonLogin.disabled = true;

//Expresion regular
const emailGmailRegex = /^[a-zA-Z0-9._\*\-]+@gmail\.com$/;
const emailHotmailRegex = /^[a-zA-Z0-9._\*\-]+@hotmail\.com$/;

const passwordRegex = /^[a-zA-Z0-9$%&_\@#!.\-]{8,}$/;


// Mando a llamar el input para poder evaluarlo y cumplir con la regex
const emailInput = document.getElementById('email-login');
const passwordInput = document.getElementById('password--login');

// Crear un evento para el input, el cual va a evaluar el patron regex y en caso de cumplir con el patron el boton se habilitara.

emailInput.addEventListener('input', (event) =>{
    const email = event.target.value;

    // Sentencia condicional para evaluar el valor del input, si se cumple se habilita el boton, en caso contrario, sigue deshabilitado
    if(emailGmailRegex.test(email) === true || emailHotmailRegex.test(email) === true ){
        passwordInput.addEventListener('input', (event) =>{
            const password = event.target.value;
        
            // Sentencia condicional para evaluar el valor del input, si se cumple se habilita el boton, en caso contrario, sigue deshabilitado
            if(passwordRegex.test(password) === true ){
                buttonLogin.disabled = false;
            } else {
                buttonLogin.disabled = true;
            }
        });
    } else {
        buttonLogin.disabled = true;
    }
});