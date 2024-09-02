const url = 'modificarCuentas.json'

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        data.forEach(modCuentas => {
            const contenedor = document.querySelector('.fondo--main');

            const div = document.createElement('div');
            div.classList.add("card--modCuentas");
            div.innerHTML = `
            <header id="card--titles">
                <h3 class="nombre--usuario">${modCuentas.usuario}</h3>
                <h3 class="nombre--tipoCuenta">${modCuentas.cuenta}</h3>
            </header>
            <div id="container--modCuentas">
                <img src="${modCuentas.imagen}" alt="img-cuenta" id="img--modCuentas">
                <p class="descripcion--cuenta">${modCuentas.descripcion}</p>
            </div>
        </div>
        `
            contenedor.append(div);
        });
        data();
    })
    .catch(error => {
    });