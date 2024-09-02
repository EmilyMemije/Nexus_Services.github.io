const url = 'servicio.json'



fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        productos = data;
        cargarProductos(productos);

    })
    .catch(error => console.log(error));

const contenedorProductos = document.querySelector('#fondo--main');

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add("card--Service");
        div.innerHTML = `
            <img src="${producto.image}" alt="img-service" id="img--service">
            <div id="contaier--service">
                <h3 class="nombre--servicio">${producto.servicio}</h3>
                <p class="descripcion--servicio">${producto.descripcion}</p>
                <div class="div-container--footer">
                <span class="stars">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                    <img src="./assets/estrella.svg" alt="" class="stars--calif">
                </span>
                <button class="button--addCarrito" id="${producto.id}" type="submit">
                    Add
                </button>
            </div>
        </div>
        `
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar()
}


let botonesAgregar = document.querySelectorAll('.button--addCarrito');
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll('.button--addCarrito');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregaAlCarrito);
    });
}


let productosEnCarrito = [];



function agregaAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
        
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarCarrito();
    //localStorage.setItem("Productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarCarrito() {
    productosEnCarrito = productosEnCarrito;
    agServiciosCarrito();
}


//const productosEnCarritoLS =  JSON.parse(localStorage.getItem("Productos-en-carrito"));


    /*-----Carga de elemntos al carrito-----*/
    const carritoVacio = document.querySelector('#contenedor--SAG');
    const fraseCarritoVacio = document.querySelector('.carrito--vacio');
    const btonPago = document.querySelector('#ir--a--pago');
    const totl = document.querySelector('#total');
    const pesos = document.querySelector('#pesos')
    const btonVaciarCarrito = document.querySelector('.vaciar--carritoBton');
    
    

function agServiciosCarrito() {
    if (productosEnCarrito) {
        carritoVacio.innerHTML = ''

        fraseCarritoVacio.classList.add('disabled');
        totl.classList.remove('disabled')
        pesos.classList.remove('disabled');
        btonPago.classList.remove('disabled')
        btonVaciarCarrito.classList.remove('disabled')
        
        productosEnCarrito.forEach(productos => {
            const div1 = document.createElement('div')
            div1.classList.add('cardSrvicio--agregado');
            div1.innerHTML = `
            <h3 class="titulo--especialidad">${productos.servicio}</h3>
            <div class="cont--cant--precio">
                <p class="cant--Serv">${productos.cantidad}</p>
                <p class="Costo--especialidad">$${productos.precio * productos.cantidad}</p>
            </div>
            <div class="bton--elim">
                <button class="eliminar" id="${productos.id}">X</button>
            </div>
            `
                carritoVacio.append(div1);
        })
    } else {
        totl.classList.add('disabled')
        pesos.classList.add('disabled');
        btonPago.classList.add('disabled')
        btonVaciarCarrito.classList.add('disabled')
    }
    actualizarbotonesEliminar();
    actualizarTotal();

    guardarEnLS();
}

function actualizarbotonesEliminar() {
    botonesEliminar = document.querySelectorAll('.eliminar');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton1 = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton1);
    
    productosEnCarrito.splice(index, 1);
    agServiciosCarrito();
}


btonVaciarCarrito.addEventListener('click', vaciarCarritoServicios);

function vaciarCarritoServicios() {
    productosEnCarrito.length = 0;
    agServiciosCarrito();
}

function actualizarTotal() {
    const totalCalculado =productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0); 
    pesos.innerText = `$${totalCalculado}`;
}

function guardarEnLS() {
    localStorage.setItem("Productos-en-carrito", JSON.stringify(productosEnCarrito));
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
