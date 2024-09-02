const url = 'modificarServicios.json'

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        data.forEach(modServicios => {
            const contenedor = document.querySelector('.fondo--main');

            const div = document.createElement('div');
            div.classList.add("card--modServicios");
            div.innerHTML = `
            <header id="card--titles">
                <h3 class="nombre--usuario">${modServicios.usuario}</h3>
                <h3 class="nombre--tipoCuenta">${modServicios.cuenta}</h3>
            </header>
            <div id="container--modServicios">
                <img src="${modServicios.imagen}" alt="img-cuenta" id="img--modServicios">
                <p class="descripcion--cuenta">${modServicios.descripcion}</p>
            </div>
        </div>
        `
            contenedor.append(div);
        });
        data();
    })
    .catch(error => {
    });