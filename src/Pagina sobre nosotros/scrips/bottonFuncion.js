// llamada de los botones
const Bmission=document.getElementById('mis');
const Bvission=document.getElementById('vis');

const container = document.getElementById('container-team');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let scrollAmount = 0;

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


const cardWidth = document.querySelector('.integrante').offsetWidth;
const scrollStep = cardWidth * 5 + 15; // Ajusta el desplazamiento para dos cards

prevButton.addEventListener('click', () => {
    container.scrollLeft -= scrollStep;
});

nextButton.addEventListener('click', () => {
    container.scrollLeft += scrollStep;
});

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
function redireccionarDonar50() {
    const valorBoton = 50;
    // Guardar el valor en el almacenamiento local del navegador
    localStorage.setItem('valorBoton', valorBoton);
    // Redireccionar a la segunda página
    window.location.href = "./donar.html";

}

function redireccionarDonar100() {
    const valorBoton1 = 100;
    // Guardar el valor en el almacenamiento local del navegador
    localStorage.setItem('valorBoton1', valorBoton1);
    // Redireccionar a la segunda página
    window.location.href = "./donar.html";
}

function redireccionarDonar150() {
    const valorBoton15 = 150;
    // Guardar el valor en el almacenamiento local del navegador
    localStorage.setItem('valorBoton15', valorBoton15);
    // Redireccionar a la segunda página
    window.location.href = "./donar.html";
}

function redireccionarDonar200() {
    const valorBoton2 = 200;
    // Guardar el valor en el almacenamiento local del navegador
    localStorage.setItem('valorBoton2', valorBoton2);
    // Redireccionar a la segunda página
    window.location.href = "./donar.html";
}

function redireccionarDonar500() {
    const valorBoton50 = 500;
    // Guardar el valor en el almacenamiento local del navegador
    localStorage.setItem('valorBoton50', valorBoton50);
    // Redireccionar a la segunda página
    window.location.href = "./donar.html";
}

function redireccionarDonar1000() {
    const valorBoton1000 = 1000;
    // Guardar el valor en el almacenamiento local del navegador
    localStorage.setItem('valorBoton1000', valorBoton1000);
    // Redireccionar a la segunda página
    window.location.href = "./donar.html";

}


function guardarMonto() {
    const montoDonacion = document.getElementById('montoDonacion').value;
    // Verificar si se ingresó un monto válido
    if (montoDonacion && !isNaN(montoDonacion)) {
        // Guardar el valor en el almacenamiento local del navegador
        localStorage.setItem('montoDonacion', montoDonacion);
        window.location.href = "./donar.html";
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
    
}

