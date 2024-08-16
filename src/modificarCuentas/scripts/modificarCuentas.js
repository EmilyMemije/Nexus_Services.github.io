const url = 'servicio.json'

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        data.forEach(modCuenta => {
            const contenedor = document.querySelector('#fondo--main');

            const div = document.createElement('div');
            div.classList.add("card--modCuentas");
            div.innerHTML = `
            <img src="${modCuenta.image}" alt="img-cuenta" id="img--cuenta">
            <div id="contaier--service">
                <h3 class="nombre--servicio">${modCuenta.servicio}</h3>
                <p class="descripcion--servicio">${modCuenta.descripcion}</p>
                <div class="div-container--footer">
                <span class="stars">
                    <img src="../../assets/doctor.png" alt="" class="stars--calif">
                    <img src="../../assets/doctor.png" alt="" class="stars--calif">
                    <img src="../../assets/doctor.png" alt="" class="stars--calif">
                    <img src="../../assets/doctor.png" alt="" class="stars--calif">
                    <img src="../../assets/doctor.png" alt="" class="stars--calif">
                </span>
                <button class="button--addCarrito" id="${modCuenta.id}" type="submit">
                    Add
                </button>
            </div>
        </div>
        `
            contenedor.append(div);
        });

        data();
    })
    .catch(error => {
    });