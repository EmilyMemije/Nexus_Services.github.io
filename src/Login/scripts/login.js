// Mando a llamar el boton para desabilitarlo desde javascript
const buttonLogin = document.getElementById('login');
buttonLogin.disabled = true;

/** Expresiones regulares (Regex)
 * Patrones de caracteres que se deben cumplir para realizar una acción.
 * Podemos validad expresiones regulares en cualquier lenguaje de programación
 */
// Crear regex para un correo con la forma email @gmail.com que puede recibir cualquier letra mayúscula o minúscula, cualquier número y los caracteres `.-_*`
const emailRegex = /^[a-zA-Z0-9._\*\-]+@gmail\.com$/; /*   /vive mi expresion regular/   */


// Mando a llamar el input para poder evaluarlo y cumplir con la regex
const emailInput = document.getElementById('email');

// Crear un evento para el input, el cual va a evaluar el patron regex y en caso de cumplir con el patron el boton se habilitara.

emailInput.addEventListener('input', (event) =>{
    const email = event.target.value;

    // Sentencia condicional para evaluar el valor del input, si se cumple se habilita el boton, en caso contrario, sigue deshabilitado
    if(emailRegex.test(email) === true){
        buttonLogin.disabled = false;
    } else {
        buttonLogin.disabled = true;
    }
});