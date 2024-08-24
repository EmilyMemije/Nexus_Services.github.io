
document.addEventListener("DOMContentLoaded", function () {

    const option = document.querySelector('#Servicio');
    const optionStar = document.querySelector('#review');
    const container = document.querySelector(".container");
    const BotonCargarMas = document.querySelector("#boton-cargarMas");
    const BotonAtras = document.querySelector("#Atras");

    let paginaActual = 0;
    const cardsPorPag = 4; //Número de tarjetas que queramos visualizar por página
    let allCards = []; //Donde se almacenarán las tarjetas cargadas

    function CrearTarjeta(servicio) {
        //div
        const divbox = document.createElement('div');
        divbox.className = 'box';

        const titulocard = document.createElement('h2');
        titulocard.textContent = servicio.Titulo;

        const img = document.createElement('img');
        img.src = servicio.Img;
        img.alt = servicio.nombre;


        //div
        const textocard = document.createElement('div');
        textocard.className = 'textcard';

        const especialidad = document.createElement('p');
        especialidad.textContent = servicio.Especialidad;

        const ubicacion = document.createElement('p');
        ubicacion.textContent = servicio.Ubicación;

        const btn1 = document.createElement('button');
        btn1.textContent = "Ver perfil";
        const btn2 = document.createElement('button');
        btn2.textContent = "Agendar Cita";

        /*onclick="location.href='/src/listaProveedores/listaProveedores.html'" */

        /*seccion donde se crean las estrellas*/

        const estrella = document.createElement('p');
        estrella.textContent = servicio.Estrellas;

        container.appendChild(divbox);
        divbox.appendChild(titulocard);
        divbox.appendChild(img);
        divbox.appendChild(textocard);
        textocard.appendChild(especialidad);
        textocard.appendChild(estrella);
        textocard.appendChild(ubicacion);
        textocard.appendChild(btn1);
        textocard.appendChild(btn2);

        divbox.dataset.especialidad = servicio.Especialidad;
        divbox.dataset.estrella = servicio.Estrellas;
    }

    function displayCards(cards) {
        container.innerHTML = "";
        const start = paginaActual * cardsPorPag;
        const end = start + cardsPorPag;
        const cardsToShow = cards.slice(start, end);

        cardsToShow.forEach(servicio => CrearTarjeta(servicio));

        //Verificar si hay más tarjetas para mostrar
        if (paginaActual * cardsPorPag >= cards.length) {
            BotonCargarMas.style.display = "none"; //Ocultar el botón si ya no hay tarjetas que mostrar
        } else {
            BotonCargarMas.style.display = "block";
        }

        //Mostrar u ocultar botón "Atrás"
        if (paginaActual > 0) {
            BotonAtras.style.display = "block";
        } else {
            BotonAtras.style.display = "none"
        }
    }


    async function obtenerServicios() {
        try {
            const response = await fetch('listaProveedores.json');
            const data = await response.json();
            allCards = data.cards; //Aquí almacenamos todas las tarjetas
            displayCards(allCards); //Acá mostramos las primeras
        } catch (error) {
            console.error('Error al obtener los servicios:', error);
        }
    }

    function CargarMas() {
        paginaActual++;
        displayCards(allCards);
    }

    BotonCargarMas.addEventListener("click", CargarMas);

    function CargarMenos() {
        paginaActual--;
        displayCards(allCards);
    }

    BotonAtras.addEventListener("click", CargarMenos);

    function filtro() {
        //container.innerHTML = "";
        option.addEventListener("change", e => {
            const selection = e.target.value;
            //const tarjetas = container.querySelectorAll('.box'); 
            container.innerHTML = "";
            console.log(selection);
            //allCards.forEach(tarjeta => {
                // Mostrar todas las tarjetas si 'Todos' está seleccionado
                const tarjetasFiltradas = allCards.filter(servicio => {
                    if (selection === "Especialidad") {
                        return true; // Mostrar todas las tarjetas
                    } else {
                        return servicio.Especialidad === selection;
                    }
                });

               displayCards(tarjetasFiltradas);
    })
}


    function filtro2() {
        optionStar.addEventListener("change", e => {
            const selection = e.target.value;
            const tarjetas = container.querySelectorAll('.box');
            console.log(selection);
            tarjetas.forEach(tarjeta => {
                // Mostrar todas las tarjetas si 'Todos' está seleccionado
                if (selection === "Calificado") {
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


/* ANTES DE MIS CAMBIOS


document.addEventListener("DOMContentLoaded", function() {

const option = document.querySelector('#Servicio');
const optionStar=document.querySelector('#review');
const container=document.querySelector(".container");
const CargarMas= document.getElementsByClassName("boton--sig");

let paginaRegular = 0;
const cardsPorPag = 4; //Número de tarjetas que queramos visualizar por página
let allCards= []; //Donde se almacenarán las tarjetas cargadas

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
btn1.textContent="Ver perfil";
const btn2=document.createElement('button');
btn2.textContent="Agendar Cita";

/*onclick="location.href='/src/listaProveedores/listaProveedores.html'" */

/*seccion donde se crean las estrellas*/
/*
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
/*
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

*/
