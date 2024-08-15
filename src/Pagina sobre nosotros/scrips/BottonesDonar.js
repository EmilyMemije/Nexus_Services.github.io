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
const checkboxTerminos = document.getElementById('terms-checkbox');
const botonDonar = document.getElementById('donate-btn');

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
        window.location.href = "/src/paginaPrincipal/paginaPrincipal.html";// Cambia esta ruta
    }, 5000);
});