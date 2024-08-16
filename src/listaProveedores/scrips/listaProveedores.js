
document.addEventListener("DOMContentLoaded", function() {

const option = document.querySelector('#Servicio');
const optionStar=document.querySelector('#review');
const container=document.querySelector(".container");


function CrearTarjeta(servicio)
{
//div
const divbox = document.createElement('div');
divbox.className = 'box';

const titulocard = document.createElement('h2');
titulocard.textContent=servicio.Titulo;

const img=document.createElement('img');
img.src=servicio.Img;
img.alt = servicio.nombre;


//div
const textocard = document.createElement('div');
textocard.className = 'textcard';

const especialidad = document.createElement('p');
especialidad.textContent=servicio.Especialidad;

const ubicacion = document.createElement('p');
ubicacion.textContent=servicio.Ubicación;

const btn1=document.createElement('button');
btn1.textContent="btn1";
const btn2=document.createElement('button');
btn2.textContent="btn2";

/*seccion donde se crean las estrellas*/

const estrella=document.createElement('p');
estrella.textContent=servicio.Estrellas;
        
container.appendChild(divbox);
divbox.appendChild(titulocard);
divbox.appendChild(img);
divbox.appendChild(textocard);
textocard.appendChild(especialidad);
textocard.appendChild(estrella);
textocard.appendChild(ubicacion);
textocard.appendChild(btn1);
textocard.appendChild(btn2);

divbox.dataset.especialidad=servicio.Especialidad;
divbox.dataset.estrella=servicio.Estrellas;
}

function obtenerServicios() {
    fetch('listaProveedores.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(servicio => {
                console.log(servicio);
                    CrearTarjeta(servicio);
            });
        })
        .catch(error => console.error('Error al obtener los servicios:', error));
}

function filtro()
{
    option.addEventListener("change",e=>{
    const selection=e.target.value;
    const tarjetas = container.querySelectorAll('.box');
    console.log(selection);
    tarjetas.forEach(tarjeta => {
        // Mostrar todas las tarjetas si 'Todos' está seleccionado
        if (selection==="Especialidad")
        {
            tarjeta.style.display = 'flex';
        }
        else if (tarjeta.dataset.especialidad === selection) {
            tarjeta.style.display = 'flex';
        } else {
            tarjeta.style.display = 'none';
        }
    })
})
}

function filtro2()
{
    optionStar.addEventListener("change",e=>{
    const selection=e.target.value;
    const tarjetas = container.querySelectorAll('.box');
    console.log(selection);
    tarjetas.forEach(tarjeta => {
        // Mostrar todas las tarjetas si 'Todos' está seleccionado
        if (selection==="Calificado")
        {
            tarjeta.style.display = 'flex';
        }
        else if (tarjeta.dataset.estrella === selection) {
            tarjeta.style.display = 'flex';
        } else {
            tarjeta.style.display = 'none';
        }
    })
})
}

filtro();
filtro2();
//option.addEventListener("change",filtro);
obtenerServicios();
})

