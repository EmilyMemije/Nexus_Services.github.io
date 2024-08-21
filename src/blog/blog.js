document.querySelector('.boton-mas').addEventListener('click', function() {
    const hiddenImages = document.querySelector('.hidden-images');
    hiddenImages.classList.toggle('show');
    if (hiddenImages.style.display === "none"|| hiddenImages.style.display === "") {
        hiddenImages.style.display = "grid";
        this.textContent = "Ver menos";
    } else {
        hiddenImages.style.display = "none";
        this.textContent = "Ver más";
    }
});

