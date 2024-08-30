const tarjeta = document.querySelector('#tarjeta'),
	btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	formulario = document.querySelector('#formulario-tarjeta'),
	numeroTarjeta = document.querySelector('#tarjeta .numero'),
	nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	logoMarca = document.querySelector('#logo-marca'),
	firma = document.querySelector('#tarjeta .firma p'),
	mesExpiracion = document.querySelector('#tarjeta .mes'),
	yearExpiracion = document.querySelector('#tarjeta .year');
	ccv = document.querySelector('#tarjeta .ccv');

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('noactive');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/mastercard.png';
		logoMarca.appendChild(imagen);
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = '   ';
	}

	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});


// Traer Carrito

const productosEnCarritoLS =  JSON.parse(localStorage.getItem("Productos-en-carrito"));
const contenedor = document.getElementById("contenedor-servicios");
productosEnCarritoLS.forEach(servicios => {
    const nuevoElemento = document.createElement("div");
    contenedor.appendChild(nuevoElemento);
});

// Crear la tabla
const tabla = document.createElement('table');
const encabezado = document.createElement('thead');
const cuerpo = document.createElement('tbody');


// Fila del encabezado
const filaEncabezado = document.createElement('tr');
const celdaServicio = document.createElement('th');
celdaServicio.textContent = 'Servicio';
const celdaDescripcion = document.createElement('th');
celdaDescripcion.textContent = 'Descripción';
const celdaPrecio = document.createElement('th');
celdaPrecio.textContent = 'Precio';
filaEncabezado.appendChild(celdaServicio);
filaEncabezado.appendChild(celdaDescripcion);
filaEncabezado.appendChild(celdaPrecio);
encabezado.appendChild(filaEncabezado);

// Filas de los productos
productosEnCarritoLS.forEach(producto => {
	const fila = document.createElement('tr');
	const celdaServicio = document.createElement('td');
	celdaServicio.textContent = producto.servicio;
	const celdaDescripcion = document.createElement('td');
	celdaDescripcion.textContent = producto.descripcion;
	const celdaPrecio = document.createElement('td');
	celdaPrecio.textContent = `$${producto.precio * producto.cantidad}`;
	fila.appendChild(celdaServicio);
	fila.appendChild(celdaDescripcion);
	fila.appendChild(celdaPrecio);
	cuerpo.appendChild(fila);
    });
// Total
let total = 0;

// Crear las filas de los productos y calcular el total
productosEnCarritoLS.forEach(producto => {
  // ... (tu código existente)

  // Agregar el precio al total
    total += producto.precio * producto.cantidad;
});

// Crear la fila del total
const filaTotal = document.createElement('tr');
const celdaTotal = document.createElement('td');
celdaTotal.colSpan = 3;
celdaTotal.textContent = `Total: $${total.toFixed(2)}`;
filaTotal.appendChild(celdaTotal);
cuerpo.appendChild(filaTotal);

tabla.appendChild(encabezado);
tabla.appendChild(cuerpo);
contenedor.appendChild(tabla);