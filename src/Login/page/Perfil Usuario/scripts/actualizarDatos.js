document.getElementById('actualizar').addEventListener('click', function() {
    document.getElementById('container--historial').classList.add('hidden');
    document.getElementById('container--actualizar').classList.remove('hidden');
});

document.getElementById('guardar').addEventListener('click', function() {
    document.getElementById('container--actualizar').classList.add('hidden');
    document.getElementById('container--historial').classList.remove('hidden');
});