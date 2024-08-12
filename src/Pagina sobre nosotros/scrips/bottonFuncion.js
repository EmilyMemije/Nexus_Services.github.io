// llamada de los botones
const Bmission=document.getElementById('mis');
const Bvission=document.getElementById('vis');


// llamada de los contenedores
const mission=document.getElementById('container-mision');
const vission=document.getElementById('container-vision');
const valor=document.getElementById('container--valores');
const we=document.getElementById('container-acercaDeNosotros');

//asignacion de vista de los contenedores
mission.style.visibility='hidden';
vission.style.visibility='hidden';
valor.style.visibility='hidden';
we.style.visibility='visible';

//array donde se almacenaran todas las constantes

const Global=[mission,vission,valor,we];
let posicion=0;
let intervalo;

// funciones para mover los botones

function Adelante()
{
    if (posicion>= Global.length -1)
    {
        posicion=0;
    }
    else
    {
        posicion++;
    }

    Mostrar (posicion);
}

function Atras()
{
    if (posicion <= 0)
        {
            posicion= Global.length-1;
        }
        else
        {
            posicion--;
        }

        Mostrar(posicion);
}

function Mostrar(Posicion)
{
    mission.style.visibility='hidden';
    vission.style.visibility='hidden';
    valor.style.visibility='hidden';
    we.style.visibility='hidden';

    Global[Posicion].style.visibility='visible'
}

/*function Autoplay()
{
  
    intervalo=setInterval(Adelante,5000);
    
}*/

/*Autoplay()*/
Bmission.addEventListener('click',Adelante)
Bvission.addEventListener('click',Atras)


//funcionalidad boton flotante

window.onscroll = function() {//
    const contenedor = document.querySelector('.contenedor-flotante');
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    const topPos = 20; // Ajusta la distancia desde la parte superior
    
    // Mantiene la posición fija del contenedor flotante
    if (offset > topPos) {
        contenedor.style.top = `${offset + 20}px`; // Mueve el contenedor segun el scroll
    } else {
        contenedor.style.top = `${topPos}20px`; // Mantén la posición inicial
    }
};
document.addEventListener('DOMContentLoaded', function() {
    const metodosPago = document.querySelectorAll('input[name="pago"]');
    const camposTarjeta = document.getElementById('camposTarjeta');
    const camposOtrosPagos = document.getElementById('camposOtrosPagos');
    const casillaTyC = document.getElementById('casillaTyC');
    const botonDonar = document.getElementById('botonDonar');

    metodosPago.forEach(metodo => {
        metodo.addEventListener('change', function() {
            if (this.value === 'tarjeta') {
                camposTarjeta.style.display = 'block';
                camposOtrosPagos.style.display = 'none';
            } else {
                camposTarjeta.style.display = 'none';
                camposOtrosPagos.style.display = 'block';
            }
        });
    });

    casillaTyC.addEventListener('change', function() {
        botonDonar.disabled = !this.checked;
    });

    // Aquí se puede agregar funcionalidad adicional para la selección del monto de donación y el envío del formulario
});


