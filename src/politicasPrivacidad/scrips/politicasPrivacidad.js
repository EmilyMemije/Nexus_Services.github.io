
// llamada de los contenedores
const ap=document.getElementById('container-avisoPrivacidad');

//asignacion de vista de los contenedores
ap.style.visibility='visible';

//array donde se almacenaran todas las constantes

const Global=[ap];
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
    ap.style.visibility='hidden';

    Global[Posicion].style.visibility='visible'
}

/*function Autoplay()
{
  
    intervalo=setInterval(Adelante,5000);
    
}*/

/*Autoplay()*/
Bmission.addEventListener('click',Adelante)
Bvission.addEventListener('click',Atras)