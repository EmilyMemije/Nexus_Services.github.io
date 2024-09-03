const apiUrl = 'index.json';
document.addEventListener("DOMContentLoaded", function () {

    function crearTarjetaServicio(servicio) {
        const servicioDiv = document.createElement('div');
        servicioDiv.className = 'service';
        servicioDiv.dataset.id = servicio.id; // Añadir ID al dataset para identificar el servicio

        const img = document.createElement('img');
        img.src = servicio.imagen;
        img.alt = servicio.nombre;
        img.className = 'service-icon';

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'service-details';

        const nombre = document.createElement('h3');
        nombre.textContent = servicio.nombre;

        const descripcion = document.createElement('p');
        descripcion.textContent = `Descripción: ${servicio.descripcion}`;

        const priceDiv = document.createElement('div');
        priceDiv.className = 'service-price';

        const precio = document.createElement('p');
        precio.textContent = `Precio: ${servicio.precio}`;

        const contentDays = document.createElement('div');
        contentDays.className = 'ContentDays';

        const daysDiv = document.createElement('div');
        daysDiv.className = 'service-days';

        const parafday = document.createElement('p');
        parafday.textContent = "Días de atención";

        servicio.dias.forEach(dia => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.textContent = dia;
            daysDiv.appendChild(dayDiv);
        });

        // Botón de eliminar que se muestra solo en modo eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = '';
        eliminarBtn.className = 'eliminar-btn';
        eliminarBtn.style.display = 'none'; // Oculto por defecto

        eliminarBtn.addEventListener('click', function (e) {
            e.stopPropagation(); // Evitar que el evento se propague al contenedor
            eliminarServicio(servicioDiv, servicio.id);
        });

        // Botón de actualización que se muestra solo en modo actualizar
        const actualizarBtn = document.createElement('button');
        actualizarBtn.textContent = '';
        actualizarBtn.className = 'actualizar-btn';
        actualizarBtn.style.display = 'none'; // Oculto por defecto

        actualizarBtn.addEventListener('click', function (e) {
            e.stopPropagation(); // Evitar que el evento se propague al contenedor
            const id = servicioDiv.dataset.id; // Obtener el ID del dataset del servicio
            window.location.href = `ActualizarSer.html?${id}`;
        });

        servicioDiv.appendChild(img);
        servicioDiv.appendChild(detailsDiv);
        detailsDiv.appendChild(nombre);
        detailsDiv.appendChild(descripcion);
        priceDiv.appendChild(precio);
        servicioDiv.appendChild(priceDiv);
        servicioDiv.appendChild(contentDays);
        contentDays.appendChild(parafday);
        contentDays.appendChild(daysDiv);
        servicioDiv.appendChild(eliminarBtn);
        servicioDiv.appendChild(actualizarBtn);

        document.querySelector('.services').appendChild(servicioDiv);
    }

    function obtenerDatosYGuardarEnLocalStorage() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                let i = 0;  // Usar un contador si los IDs no son únicos
                data.forEach(servicio => {
                    // Generar un ID único si no existe o se basa en el índice
                    const servicioId = servicio.id ? servicio.id : `servicio-${i}`;

                    // Verificación en consola
                    console.log(`Guardando servicio con ID: ${servicioId}`);

                    // Guardar cada servicio individualmente en localStorage
                    localStorage.setItem(`servicioData-${servicioId}`, JSON.stringify(servicio));

                    // Crear la tarjeta del servicio
                    crearTarjetaServicio(servicio);

                    i++;  // Incrementar el contador
                });
            })
            .catch(error => console.error('Error al cargar los servicios:', error));
    }

    function obtenerServiciosDesdeLocalStorage() {
        // Obtener todas las claves del localStorage
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('servicioData-')) {
                const servicio = JSON.parse(localStorage.getItem(key));
                crearTarjetaServicio(servicio);
            }
        });
    }

    function eliminarServicio(servicioDiv, id) {
        // Eliminar la tarjeta del DOM
        if (servicioDiv) {
            servicioDiv.remove();
        }

        // Eliminar el servicio del localStorage
        localStorage.removeItem(`servicioData-${id}`);
    }

    let modoEliminar = false;
    let modoActualizar = false;

    document.querySelector('.menu-button:nth-child(3)').addEventListener('click', function () {
        modoEliminar = !modoEliminar;
        modoActualizar = false;
        document.querySelectorAll('.eliminar-btn').forEach(btn => {
            btn.style.display = modoEliminar ? 'block' : 'none';
        });
        document.querySelectorAll('.actualizar-btn').forEach(btn => {
            btn.style.display = 'none';
        });
    });

    document.querySelector('.menu-button:nth-child(4)').addEventListener('click', function () {
        modoActualizar = !modoActualizar;
        modoEliminar = false;
        document.querySelectorAll('.actualizar-btn').forEach(btn => {
            btn.style.display = modoActualizar ? 'block' : 'none';
        });
        document.querySelectorAll('.eliminar-btn').forEach(btn => {
            btn.style.display = 'none';
        });
    });

    if (Object.keys(localStorage).some(key => key.startsWith('servicioData-'))) {
        obtenerServiciosDesdeLocalStorage();
    } else {
        obtenerDatosYGuardarEnLocalStorage();
    }
});

