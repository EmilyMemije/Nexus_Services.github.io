document.addEventListener('DOMContentLoaded', function() {
    // Cargar imagen de perfil desde localStorage si existe
    const savedImage = localStorage.getItem('foto--perfil--usuario');
    if (savedImage) {
        document.getElementById('foto--perfil--usuario').src = savedImage;
    }

    document.getElementById('cambiar--foto').addEventListener('click', function() {
        document.getElementById('cargar--imagen--usuario').click();
    });

    document.getElementById('cargar--imagen--usuario').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                document.getElementById('foto--perfil--usuario').src = imageUrl;
                // Guardar imagen en localStorage
                localStorage.setItem('foto--perfil--usuario', imageUrl);
            };
            reader.readAsDataURL(file);
        }
    });
});