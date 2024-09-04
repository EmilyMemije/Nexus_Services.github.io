const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const botonDonar = document.getElementById('donate-btn');
const checkboxTerminos = document.getElementById('terms-checkbox');
const alertaPersonalizada = document.getElementById('customAlert');
const subtotalSpan = document.getElementById('subtotal');
const totalSpan = document.getElementById('total');

// Expresiones regulares
const expresiones = {
    nombreCompleto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tarjeta: /^(4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/,
    nombreTitular: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    fechaVen: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
    cvv: /^[0-9]{3}$/
};

// Objeto para controlar la validación de campos
const campos = {
    NombreCompleto: false,
    Correo: false,
    tarjeta: false,
    NombreTitular: false,
    fechaVen: false,
    CVV: false
};

// Función para validar el formulario
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "NombreCompleto":
        case "NombreTitular":
            validarCampo(expresiones.nombreCompleto, e.target, e.target.name);
            break;
        case "Correo":
            validarCampo(expresiones.correo, e.target, 'Correo');
            break;
        case "tarjeta":
            validarCampo(expresiones.tarjeta, e.target, 'tarjeta');
            mostrarIconoTarjeta(e.target.value);
            break;
        case "fechaVen":
            validarCampo(expresiones.fechaVen, e.target, 'fechaVen');
            break;
        case "CVV":
            validarCampo(expresiones.cvv, e.target, 'CVV');
            break;
    }
};

// Función para validar un campo
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('Formulario_grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('Formulario_grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('Formulario_grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('Formulario_grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
};


// Función para mostrar el icono de la tarjeta
const mostrarIconoTarjeta = (numeroTarjeta) => {
    const iconoVisa = document.getElementById('visaRegex');
    const iconoMastercard = document.getElementById('mastercardRegex');
    const iconoAmex = document.getElementById('amexRegex');

    iconoVisa.style.display = 'none';
    iconoMastercard.style.display = 'none';
    iconoAmex.style.display = 'none';

    if (numeroTarjeta.startsWith('4')) {
        iconoVisa.style.display = 'block';
    } else if (numeroTarjeta.startsWith('5')) {
        iconoMastercard.style.display = 'block';
    } else if (numeroTarjeta.startsWith('3')) {
        iconoAmex.style.display = 'block';
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

checkboxTerminos.addEventListener('change', () => {
    botonDonar.disabled = !checkboxTerminos.checked;
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.NombreCompleto && campos.Correo && campos.tarjeta && campos.NombreTitular && campos.fechaVen && campos.CVV && checkboxTerminos.checked) {
        formulario.reset();

        document.querySelectorAll('.Formulario_grupo-correcto').forEach((icono) => {
            icono.classList.remove('Formulario_grupo-correcto');
        });
    }

});




// Obtener el valor guardado en el almacenamiento local
const valorBoton = localStorage.getItem('valorBoton');

// Asignar el valor al subtotal y total
document.getElementById('subtotal').textContent = valorBoton;
document.getElementById('total').textContent = valorBoton;


// Obtener el valor guardado en el almacenamiento local
const valorBoton1 = localStorage.getItem('valorBoton1');

// Asignar el valor al subtotal y total
document.getElementById('subtotal').textContent = valorBoton1;
document.getElementById('total').textContent = valorBoton1;

// Obtener el valor guardado en el almacenamiento local
const valorBoton15 = localStorage.getItem('valorBoton15');

// Asignar el valor al subtotal y total
document.getElementById('subtotal').textContent = valorBoton15;
document.getElementById('total').textContent = valorBoton15;


// Obtener el valor guardado en el almacenamiento local
const valorBoton2 = localStorage.getItem('valorBoton2');

// Asignar el valor al subtotal y total
document.getElementById('subtotal').textContent = valorBoton2;
document.getElementById('total').textContent = valorBoton2;



// Obtener el valor guardado en el almacenamiento local
const valorBoton50 = localStorage.getItem('valorBoton50');

// Asignar el valor al subtotal y total
document.getElementById('subtotal').textContent = valorBoton50;
document.getElementById('total').textContent = valorBoton50;



// Obtener el valor guardado en el almacenamiento local
const valorBoton1000 = localStorage.getItem('valorBoton1000');

// Asignar el valor al subtotal y total
document.getElementById('subtotal').textContent = valorBoton1000;
document.getElementById('total').textContent = valorBoton1000;


// Obtener el valor guardado en el almacenamiento local
const montoDonacion = localStorage.getItem('montoDonacion');

// Asignar el valor al subtotal y total si existe
if (montoDonacion) {
    document.getElementById('subtotal').textContent = montoDonacion;
    document.getElementById('total').textContent = montoDonacion;
} else {
    document.getElementById('subtotal').textContent = "0";
    document.getElementById('total').textContent = "0";
}


   // Obtener el valor guardado en el almacenamiento local
   const valorBo1 = localStorage.getItem('valorBoton');
   const valorBo01 = localStorage.getItem('valorBoton1');
   const valorBo15 = localStorage.getItem('valorBoton15');
   const valorBo2 = localStorage.getItem('valorBoton2');
   const valorBo50 = localStorage.getItem('valorBoton50');
   const valorBo1000 = localStorage.getItem('valorBoton1000');
   const montoDo = localStorage.getItem('montoDonacion');

   // Asignar el valor al subtotal y total
   if (valorBoton) {
       document.getElementById('subtotal').textContent = valorBo1;
       document.getElementById('total').textContent = valorBo1;
   } else if (valorBoton1) {
       document.getElementById('subtotal').textContent = valorBo01;
       document.getElementById('total').textContent = valorBo01;
   } else if (valorBoton15) {
       document.getElementById('subtotal').textContent = valorBo15;
       document.getElementById('total').textContent = valorBo15;
   } else if (valorBoton2) {
       document.getElementById('subtotal').textContent = valorBo2;
       document.getElementById('total').textContent = valorBo2;
   } else if (valorBoton50) {
       document.getElementById('subtotal').textContent = valorBo50;
       document.getElementById('total').textContent = valorBo50;
   } else if (valorBoton1000) {
       document.getElementById('subtotal').textContent = valorBo1000;
       document.getElementById('total').textContent = valorBo1000;
   } else if (montoDonacion) {
       document.getElementById('subtotal').textContent = montoDo;
       document.getElementById('total').textContent = montoDo;
   } else {
       document.getElementById('subtotal').textContent = "0";
       document.getElementById('total').textContent = "0";
   }

   // Limpiar el localStorage para futuras interacciones
   localStorage.clear();





   //MEtodos de pago

   document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const creditCardDetails = document.getElementById('credit-card-details');
    const otherPaymentDetails = document.getElementById('other-payment-details');
    const termsCheckbox = document.getElementById('terms-checkbox');
    const donateButton = document.getElementById('donate-btn');

    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.value === 'credit-card') {
                creditCardDetails.style.display = 'block';
                otherPaymentDetails.style.display = 'none';
            } else {
                creditCardDetails.style.display = 'none';
                otherPaymentDetails.style.display = 'block';
            }
        });
    });

    termsCheckbox.addEventListener('change', function() {
        donateButton.disabled = !this.checked;
    });
});

// Habilitar el botón de donación si los términos están aceptados
checkboxTerminos.addEventListener('change', function() {
    botonDonar.disabled = !checkboxTerminos.checked;
});

// Manejar el clic en el botón de donación
botonDonar.addEventListener('click', function() {
    // Mostrar la alerta personalizada
    const cajaAlerta = document.getElementById('customAlert');
    cajaAlerta.classList.remove('oculto');
    
    // Desactivar el botón para evitar múltiples clics
    botonDonar.disabled = true;
    
    // Esperar 5 segundos y redirigir a la página principal
    setTimeout(function() {
        cajaAlerta.classList.add('oculto');
        window.location.href = "../paginaPrincipal/paginaPrincipal.html";// Cambia esta ruta
    }, 5000);
});