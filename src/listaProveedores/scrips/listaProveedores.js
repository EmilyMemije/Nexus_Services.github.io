document.addEventListener("DOMContentLoaded", function () {

    const option = document.querySelector('#Servicio');
    const optionStar = document.querySelector('#review');
    const optionUbicacion = document.querySelector('#place');
    const container = document.querySelector(".container");
    const BotonCargarMas = document.querySelector("#boton-cargarMas");
    const BotonAtras = document.querySelector("#Atras");

    let paginaActual = 0;
    const cardsPorPag = 4; // Número de tarjetas que queramos visualizar por página
    let allCards = []; // Donde se almacenarán las tarjetas cargadas

    function CrearTarjeta(servicio) {
        const divbox = document.createElement('div');
        divbox.className = 'box';

        const titulocard = document.createElement('h2');
        titulocard.textContent = servicio.Titulo;

        const img = document.createElement('img');
        img.src = servicio.Img;
        img.alt = servicio.nombre;

        const textocard = document.createElement('div');
        textocard.className = 'textcard';

        const especialidad = document.createElement('p');
        especialidad.textContent = servicio.Especialidad;

        const ubicacion = document.createElement('p');
        ubicacion.textContent = servicio.Ubicacion;

        const btn1 = document.createElement('button');
        btn1.textContent = "Ver perfil";
        const btn2 = document.createElement('button');
        btn2.textContent = "Agendar Cita";

        const estrella = document.createElement('p');
        estrella.textContent = servicio.Estrellas;

        // Crear un contenedor para los botones
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        divbox.appendChild(titulocard);
        divbox.appendChild(img);
        divbox.appendChild(textocard);
        textocard.appendChild(especialidad);
        textocard.appendChild(estrella);
        textocard.appendChild(ubicacion);

        buttonContainer.appendChild(btn1);
        buttonContainer.appendChild(btn2);
        textocard.appendChild(buttonContainer);


        divbox.dataset.especialidad = servicio.Especialidad;
        divbox.dataset.estrella = servicio.Estrellas;
        divbox.dataset.ubicacion = servicio.Ubicacion;

        container.appendChild(divbox);
    }

    function displayCards(cards) {
        container.innerHTML = "";

        if (cards.length === 0) {
            const sinResultados = document.createElement('p');
            sinResultados.textContent = 'No se encontraron resultados';
            container.appendChild(sinResultados);
            return;
        }
        const start = paginaActual * cardsPorPag;
        const end = start + cardsPorPag;
        const cardsToShow = cards.slice(start, end);

        cardsToShow.forEach(servicio => CrearTarjeta(servicio));

        // Verificar si hay más tarjetas para mostrar
        if (end >= cards.length) {
            BotonCargarMas.style.display = "none"; // Ocultar el botón "Siguiente" si ya no hay tarjetas que mostrar
        } else {
            BotonCargarMas.style.display = "block";
        }

        // Mostrar u ocultar botón "Atrás"
        if (paginaActual > 0) {
            BotonAtras.style.display = "block";
        } else {
            BotonAtras.style.display = "none";
        }
    }

    async function obtenerServicios() {
        try {
            const response = await fetch('listaProveedores.json');
            const data = await response.json();
            allCards = data.cards; // Aquí almacenamos todas las tarjetas
            displayCards(allCards); // Acá mostramos las primeras

            //Filtro por Especialidad
            option.addEventListener("change", e => {
                const selection = e.target.value;
                paginaActual = 0; // Reiniciar a la primera página al filtrar
                if (selection === "Especialidad") {
                    allCards = data.cards;
                    displayCards(allCards);
                } else {
                    const tarjetasFiltradas = data.cards.filter(servicio => servicio.Especialidad === selection);
                    displayCards(tarjetasFiltradas);
                    allCards = tarjetasFiltradas;
                }
            });

            //Filtro Por Calificación (Estrellas)
            optionStar.addEventListener("change", e => {
                const selection = e.target.value;
                console.log(selection);
                paginaActual = 0; // Reiniciar a la primera página al filtrar
                if (selection === "Por Calificacion") {
                    allCards = data.cards;
                    displayCards(allCards);
                } else {
                    const tarjetasFiltradas = data.cards.filter(servicio => servicio.Estrellas === selection);
                    displayCards(tarjetasFiltradas);
                    allCards = tarjetasFiltradas;
                }
            });

            //Filtro por Ubicación
            optionUbicacion.addEventListener("change", e => {
                const selection = e.target.value;
                paginaActual = 0; // Reiniciar a la primera página al filtrar
                if (selection === "Más cercano") {
                    allCards = data.cards;
                    displayCards(allCards);
                } else {
                    const tarjetasFiltradas = data.cards.filter(servicio => servicio.Ubicacion === selection);
                    console.log('Tarjetas filtradas:', tarjetasFiltradas);
                    displayCards(tarjetasFiltradas);
                    allCards = tarjetasFiltradas;
                }
            });

        } catch (error) {
            console.error('Error al obtener los servicios:', error);
        }
    }

    //Función Botón Siguiente
    function CargarMas() {
        paginaActual++;
        displayCards(allCards);
    }

    //Función Botón Atrás
    function CargarMenos() {
        paginaActual--;
        displayCards(allCards);
    }

    //Asignación de evento para los botones Siguiente (CargarMas) y Atrás(CargarMenos)
    BotonCargarMas.addEventListener("click", CargarMas);
    BotonAtras.addEventListener("click", CargarMenos);

    // Inicializar la carga de servicios
    obtenerServicios();
});
