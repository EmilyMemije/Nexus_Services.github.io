document.addEventListener("DOMContentLoaded", function() {
    // URL de la API
    const apiUrl = '/src/admiServicios/json/index.json'; 

    // Función para crear las tarjetas de servicios
    function crearTarjetaServicio(servicio) {
        // Crear los elementos HTML
        //Crea el Div principal
        const servicioDiv = document.createElement('div');
        servicioDiv.className = 'service';
        //Crea el contenedor de la imagen
        const img = document.createElement('img');
        img.src = servicio.imagen;
        img.alt = servicio.nombre;
        img.className = 'service-icon';
        //crea el div donde se encontraran la descripcion
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'service-details';
        //crea el titulo de la descripcion
        const nombre = document.createElement('h3');
        nombre.textContent = servicio.nombre;
        //crea el parrafo de la descripcion
        const descripcion = document.createElement('p');
        descripcion.textContent = `Descripción: ${servicio.descripcion}`;
        //crea el div que contiene el precio del producto
        const priceDiv = document.createElement('div');
        priceDiv.className = 'service-price';
        const precio = document.createElement('p');
        precio.textContent = `Precio: ${servicio.precio}`;
        // crea el div principal que contendra los dias y el parrafo de dias
        const contentDays=document.createElement('div');
        contentDays.className='ContentDats';
        // crea un div que contendra el dia de la semana
        const daysDiv = document.createElement('div');
        daysDiv.className = 'service-days';
        //crea el parrafo que contendra "dias de atencion"
        const parafday = document.createElement('p');
        parafday.textContent=("dias de atención");
        //se crea un forEach que recorre un array dentro del js y crea un div que contenga esa informacion
        servicio.dias.forEach(dia => {
            //crea un div que contiene el dia de la semana
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.textContent = dia;
            //inserta los divs en daysDiv
            daysDiv.appendChild(dayDiv);
        });

        // Añadir elementos al DOM
        // añade el nombre descripcion y precio en los divs creados
        detailsDiv.appendChild(nombre);
        detailsDiv.appendChild(descripcion);
        priceDiv.appendChild(precio);
        //ingresa todos los divs en el contenedor principal
        servicioDiv.appendChild(img);
        servicioDiv.appendChild(detailsDiv);
        servicioDiv.appendChild(priceDiv);
        //ingresa contentDays en el contenedor principal
        servicioDiv.appendChild(contentDays);
        //inserta parafday en el contenedor contentDays
        contentDays.appendChild(parafday);
        contentDays.appendChild(daysDiv);

        // Añadir la tarjeta al contenedor de servicios
        document.querySelector('.services').appendChild(servicioDiv);
    }

    function obtenerDatosYGuardarEnLocalStorage() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Guardar los datos en el localStorage
                localStorage.setItem('servicioData', JSON.stringify(data));
                // Crear las tarjetas de servicio a partir de los datos almacenados
                data.forEach(servicio => {
                    crearTarjetaServicio(servicio);
                });
            })
            .catch(error => console.error('Error al cargar los servicios:', error));
    }

    // Función para obtener los servicios desde la API
    function obtenerServiciosDesdeLocalStorage() {
        const servicios = JSON.parse(localStorage.getItem('servicioData')) || [];
        servicios.forEach(servicio => {
            crearTarjetaServicio(servicio);
        });
    }

    // Llamar a la función para obtener y mostrar los servicios
    if (localStorage.getItem('servicioData')) {
        obtenerServiciosDesdeLocalStorage();
    } else {
        // Si no hay datos en el `localStorage`, los obtenemos de la API
        obtenerDatosYGuardarEnLocalStorage();
    }
});
