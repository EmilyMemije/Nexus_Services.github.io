document.addEventListener('DOMContentLoaded', function() {
    // Cargar imagen de perfil desde localStorage si existe
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        document.getElementById('profileImage').src = savedImage;
    }

    document.getElementById('uploadButton').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });

    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                document.getElementById('profileImage').src = imageUrl;
                // Guardar imagen en localStorage
                localStorage.setItem('profileImage', imageUrl);
            };
            reader.readAsDataURL(file);
        }
    });
});