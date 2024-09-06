async function cargarDatosPerfil() {
    try {
        const correoUsuario = localStorage.getItem('usuarioLogueado');
        if (!correoUsuario) {
            throw new Error('No hay usuario logueado');
        }

        // Verificar si ya hay datos en localStorage
        const nombreGuardado = localStorage.getItem('usuarioLogueado');
        const emailGuardado = localStorage.getItem('emailActualizado');
        const telefonoGuardado = localStorage.getItem('telefonoActualizado');
        const direccionGuardado = localStorage.getItem('direccionActualizado');

        if (nombreGuardado && emailGuardado && telefonoGuardado && direccionGuardado) {
            document.getElementById('name').textContent = nombreGuardado;
            document.getElementById('email').textContent = emailGuardado;
            document.getElementById('telefono').textContent = telefonoGuardado;
            document.getElementById('dire').textContent = direccionGuardado;

            document.getElementById('nombre').value = nombreGuardado;
            document.getElementById('correoElectronico').value = emailGuardado;
            document.getElementById('celular').value = telefonoGuardado;
            document.getElementById('direccion').value = direccionGuardado;
        } else if(nombreGuardado && emailGuardado && telefonoGuardado){
            document.getElementById('name').textContent = nombreGuardado;
            document.getElementById('email').textContent = emailGuardado;
            document.getElementById('telefono').textContent = telefonoGuardado;
            document.getElementById('dire').textContent = direccionGuardado;
            document.getElementById('dire').textContent = 'Dirección no disponible';

            document.getElementById('nombre').value = nombreGuardado;
            document.getElementById('correoElectronico').value = emailGuardado;
            document.getElementById('celular').value = telefonoGuardado;
            document.getElementById('direccion').value = direccionGuardado;

            document.getElementById('nombre').value = nombreGuardado;
            document.getElementById('correoElectronico').value = emailGuardado;
            document.getElementById('celular').value = telefonoGuardado;
            document.getElementById('direccion').value = '';
        }
    } catch (error) {
        console.error('Error cargando los datos del perfil:', error);
    }
}

async function cargarDatosHistorial() {
    try {
        const response = await fetch('historialCitas.json'); // Ajusta la ruta según tu estructura de proyecto
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const datos = await response.json();

        // Obtener el contenedor donde se agregarán las tarjetas
        const contenedorHistorial = document.getElementById('historial--cards');

        // Limpiar el contenedor antes de agregar nuevas tarjetas
        contenedorHistorial.innerHTML = '';

        // Crear una tarjeta para cada objeto en el JSON
        datos.forEach(cita => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'product--card';

            tarjeta.innerHTML = `
                <div class="container--imagenServicio">
                    <div class="image--servicio">
                        <img src="${cita.imagen}" alt="Imagen del Servicio">
                    </div>
                </div>
                <div class="container--datosServicio">
                    <h2 id="servicio">${cita.servicio}</h2>
                    <div class="especialista">
                        <p>Nombre del especialista:</p>
                        <p id="name--especialista">${cita.nombre}</p>
                    </div>
                    <div class="price">
                        <p>Precio: $</p>
                        <p id="price-servicio">${cita.precio.toFixed(2)}</p>
                    </div>
                    <div class="fecha--hora">
                        <div class="fecha">
                            <p>Fecha del servicio:</p>
                            <p id="fecha--servicio">${cita.fecha}</p>
                        </div>
                        <div class="hora">
                            <p>Hora del servicio:</p>
                            <p id="hora--servicio">${cita.hora}</p>
                        </div>
                    </div>
                </div>
            `;

            // Agregar la tarjeta al contenedor
            contenedorHistorial.appendChild(tarjeta);
        });
    } catch (error) {
        console.error('Error cargando los datos del historial:', error);
    }
}

function cargarDatos() {
    cargarDatosHistorial();
    cargarDatosPerfil();
}

// Llamar a la función principal al cargar la página
window.onload = cargarDatos;

