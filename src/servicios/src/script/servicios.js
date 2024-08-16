const url = 'servicio.json'

let serviciosjson = [];
let botonesAgServicio = document.querySelectorAll('.button--addCarrito');

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        serviciosjson = data;
        
        mostrarServicios(serviciosjson);
    })
    .catch(error => console.log(error));

const mostrarServicios = (serviciosjson) => {
    serviciosjson.forEach(serv => {
        const contenedor = document.querySelector('#fondo--main');
        
        const div = document.createElement('div');
        div.classList.add("card--Service");
        div.innerHTML = `
            <img src="${serv.image}" alt="img-service" id="img--service">
            <div id="contaier--service">
                <h3 class="nombre--servicio">${serv.servicio}</h3>
                <p class="descripcion--servicio">${serv.descripcion}</p>
                <div class="div-container--footer">
                <span class="stars">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                </span>
                <button class="button--addCarrito" id="${serv.id}" type="submit">
                    Add
                </button>
            </div>
        </div>
        `
        contenedor.append(div);

    })
    
    actualizarBtnId();
    
}


function actualizarBtnId() {
    botonesAgServicio = document.querySelectorAll('.button--addCarrito');

    botonesAgServicio.forEach(boton =>{
        boton.addEventListener('click', agregaAlCarrito);
    });
}

const productosenCarrito =[];

function agregaAlCarrito(e) {
    const idagregar = e.currentTarget.id;
    const servicioAgregado = serviciosjson.find(servicio => servicio.id === idagregar);    

    if (productosenCarrito.some(servicio => servicio.id === idagregar)) {
        const index = productosenCarrito.findIndex(servicio => servicio.id === idagregar);
        productosenCarrito[index].cantidad++;

    } else {
        servicioAgregado.cantidad = 1;
        productosenCarrito.push(servicioAgregado);
    }

    
    

    
    
    
    
}



/*-----Abrir y cerrar el carrito de compras-----*/
const abrirCarrito = document.querySelector('.compras');
const cerrarCarrito = document.querySelector('.cerrar--carrito');
/*-----Abrir el carrito de compras-----*/
abrirCarrito.addEventListener("click", (e) => {
    const carritoabierto = document.querySelector('#carrito--Servicios');
    carritoabierto.classList.toggle('Desactivate')
    abrirCarrito.classList.toggle('Desactivate')
});

/*-----Cerrar el carrito de compras-----*/
cerrarCarrito.addEventListener("click", (e) => {
    const carritolisto = document.querySelector('#carrito--Servicios');
    carritolisto.classList.toggle('Desactivate')
    abrirCarrito.classList.toggle('Desactivate')
});
