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
const form = document.getElementById('form--login');

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

class usuario{
    constructor(correo, contraseña){
        this.email = correo;
        this.password = contraseña;
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    fetch(`loginAdmin.json`)
        .then(response => response.json())
        .then(data => {
            let loginExitoso = false;
            data.forEach(usuarioData =>{ 
                //Se aguarda los datos del JSON al las variables correo, contraseña}
                const { correo, contraseña} = usuarioData;
                //Se aguarda la informacion obtenida del JSO en la Clase Usuario
                const usuarioLogin = new usuario( correo, contraseña);
                
                // Aqui se hace la comparacion de lo que tenemos en la clase con el valor de input
                if(usuarioLogin.email === emailInput.value && usuarioLogin.password === passwordInput.value ){
                    loginExitoso = true;
                    alert("Se hizo login");
                    //ya que se cumple la condicion hace el action del form
                    event.target.submit();
                }
            })
            if (!loginExitoso) {
                //si el login no es correcto entonces se limpia los inputs
                alert("Correo o contraseña incorrecto");
                emailInput.value = '';
                passwordInput.value = '';
                buttonLogin.disabled = true;
            }
        })
        .catch(error => {
            alert (`Hubo un error al cargar los datos`);
            console.error(`Èrror el cargar`, error);
        });
});
