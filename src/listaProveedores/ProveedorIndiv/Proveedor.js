



/*document.addEventListener('DOMContentLoaded', function () {
    const perfilDetalle = document.getElementById('perfil-detalle');
    const cerrarPerfil = document.getElementById('cerrar-perfil');

    // Función para cargar los datos desde el JSON
    async function cargarDatos() {
        const response = await fetch('listaProveedores.json');
        return await response.json();
    }

    // Mostrar perfil del médico
    async function mostrarPerfil(medicoId) {
        const medicos = await cargarDatos();
        const medico = medicos.find(m => m.id === medicoId);

        if (medico) {
            document.getElementById('perfil-foto').src = medico.foto;
            document.getElementById('perfil-datos').innerHTML = `
          <h2>${medico.nombre}</h2>
          <p><strong>Especialidad:</strong> ${medico.especialidad}</p>
          <p><strong>Ubicación:</strong> ${medico.ubicacion}</p>
          <p><strong>Reseñas:</strong> ${medico.reseñas}</p>
          <p><strong>Contacto:</strong> ${medico.contacto}</p>
        `;
            perfilDetalle.classList.add('mostrar');
        }
    }

    // Manejar clic en el botón "Ver perfil"
    document.querySelectorAll('.btn-ver-perfil').forEach(btn => {
        btn.addEventListener('click', function () {
            const medicoId = this.dataset.id;
            mostrarPerfil(medicoId);
        });
    });

    // Cerrar el perfil
    cerrarPerfil.addEventListener('click', function () {
        perfilDetalle.classList.remove('mostrar');
    });
});
*/