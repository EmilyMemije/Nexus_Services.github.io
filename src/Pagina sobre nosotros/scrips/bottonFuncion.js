// llamada de los botones
const Bmission=document.getElementById('mis');
const Bvission=document.getElementById('vis');
const Bvalor=document.getElementById('val');
const Bwe=document.getElementById('nosotros');


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

    Global[posicion].style.visibility='visible'
}

function Autoplay()
{
  
    intervalo=setInterval(Adelante,100000);
    
}

Autoplay();







//asignacion de vista de los contenedores
/*mission.style.visibility='hidden';
vission.style.visibility='hidden';
valor.style.visibility='hidden';
we.style.visibility='visible';*/

//* asignacion de eventos
Bmission.addEventListener('click',Adelante)/*()=>{
   /* mission.style.visibility='visible';
    vission.style.visibility='hidden';
    valor.style.visibility='hidden';
    we.style.visibility='hidden';
})*/

Bvission.addEventListener('click',Atras)/*()=>{
   /* mission.style.visibility='hidden';
    vission.style.visibility='visible';
    valor.style.visibility='hidden';
    we.style.visibility='hidden';
})*/
/*
Bvalor.addEventListener('click',()=>{
    mission.style.visibility='hidden';
    vission.style.visibility='hidden';
    valor.style.visibility='visible';
    we.style.visibility='hidden';
})

Bwe.addEventListener('click',()=>{
    mission.style.visibility='hidden';
    vission.style.visibility='hidden';
    valor.style.visibility='hidden';
    we.style.visibility='visible';
})
*/
