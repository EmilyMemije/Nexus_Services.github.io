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

//* asignacion de eventos
Bmission.addEventListener('click',()=>{
    mission.style.visibility='visible';
    vission.style.visibility='hidden';
    valor.style.visibility='hidden';
    we.style.visibility='hidden';
})

Bvission.addEventListener('click',()=>{
    mission.style.visibility='hidden';
    vission.style.visibility='visible';
    valor.style.visibility='hidden';
    we.style.visibility='hidden';
})

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

