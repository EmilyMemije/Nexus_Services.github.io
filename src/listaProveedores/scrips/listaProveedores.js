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

        // Contenedor para la tarjeta con ambas caras
        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        // Cara frontal
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';

        const titulocard = document.createElement('h2');
        titulocard.textContent = servicio.Titulo;

        //Contenedor de mi imagen e información del médico

        const infoContainer = document.createElement('div');
        infoContainer.className = 'info-container'

        const img = document.createElement('img');
        img.src = servicio.Img;
        img.alt = servicio.nombre;

        const textocard = document.createElement('div');
        textocard.className = 'textcard';

        const especialidad = document.createElement('p');
        especialidad.textContent = servicio.Especialidad;

        const ubicacion = document.createElement('p');
        ubicacion.textContent = servicio.Ubicacion;

        const estrella = document.createElement('p');
        estrella.textContent = servicio.Estrellas;

        //Sección de información adicional, que aparecerá al presionar botón "Más información"
        const masInfo = document.createElement('div');
        masInfo.className = 'masInfo';
        //masInfo.style.display = 'none'; //Inicialmente oculto

        const descripcion = document.createElement('p');
        descripcion.textContent = servicio.Descripcion;
        descripcion.className = 'descripcion';

        //Quitamos telefono a petición de un mentor
        /*const Telefono = document.createElement('p');
        Telefono.textContent = ("Teléfono: " + servicio.Telefono);*/

        const Email = document.createElement('p');
        Email.textContent = ("Correo: " + servicio.Email);

        const Direccion = document.createElement('p');
        Direccion.textContent = ("Consultorio: " + servicio.Direccion);

        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.textContent = 'Cerrar';

        //Contenedor para mis botones dentro de la tarjeta
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const btn1 = document.createElement('button');
        btn1.textContent = "Más información";
        btn1.className = 'moreInfo-btn';

        const btn2 = document.createElement('button');
        btn2.textContent = "Agendar Cita";
        btn2.className = 'agendarCita-btn';

        // Estructura cara frontal
        // Estructura del divbox
        textocard.appendChild(especialidad);
        textocard.appendChild(estrella);
        textocard.appendChild(ubicacion);

        infoContainer.appendChild(img);
        infoContainer.appendChild(textocard);

        buttonContainer.append(btn1, btn2);

        cardFront.appendChild(titulocard);
        cardFront.appendChild(infoContainer);
        cardFront.appendChild(buttonContainer);

        //divbox.appendChild(titulocard);
        //divbox.appendChild(infoContainer);
        //divbox.appendChild(buttonContainer);

        //Cara trasera
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';

        //Contenido del div "Más información"
        masInfo.append(descripcion, Direccion, Email, closeBtn);


        cardBack.appendChild(masInfo);

        // Caras al contenedor

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        divbox.appendChild(cardInner);

        divbox.dataset.especialidad = servicio.Especialidad;
        divbox.dataset.estrella = servicio.Estrellas;
        divbox.dataset.ubicacion = servicio.Ubicacion;

        container.appendChild(divbox);
    }

    //Botón de "Más información"

    function BotonMasInfo() {
        container.addEventListener('click', function (e) {
            //Botón de Más Información
            if (e.target.classList.contains('moreInfo-btn')) {
                const card = e.target.closest('.box');
                const cardInner = card.querySelector('.card-inner');
                cardInner.classList.add('flipped');
            }

            if (e.target.classList.contains('close-btn')) {
                const card = e.target.closest('.box');
                const cardInner = card.querySelector('.card-inner');
                cardInner.classList.remove('flipped');
            }

            //Botón "Agendar cita"
            if (e.target.classList.contains('agendarCita-btn')) {
                // Evita que el evento de clic también dispare la rotación de la tarjeta
                e.stopPropagation();
                window.location.href = '/src/servicios/servicios.html';
            }
        });
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

        //Llamar Boton de más información
        BotonMasInfo();

        // Verificar si hay más tarjetas para mostrar
        if (end >= cards.length || cards.length === 0) {
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
