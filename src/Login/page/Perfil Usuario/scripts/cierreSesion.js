document.getElementById('cerrarSesion').addEventListener('click', function() {
    // Limpiar el localStorage
    // localStorage.removeItem('usuarioLogueado');
    // localStorage.removeItem('nombreActualizado');
    // localStorage.removeItem('emailActualizado');
    // localStorage.removeItem('telefonoActualizado');
    // localStorage.removeItem('correoActualizado');
    localStorage.clear();
});