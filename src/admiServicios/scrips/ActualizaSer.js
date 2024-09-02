const Service = document.querySelector('#Services');
const Section = document.querySelector('#Section3');
const Des = document.querySelector('#Description');
const price = document.querySelector('#price');
const buttons = document.querySelectorAll('#days button');
const selectedDaysContainer = document.createElement('div'); // Contenedor para los días seleccionados
selectedDaysContainer.className = 'container-day';
const allDaysCheckbox=document.querySelector('#AllDays');
const upload=document.querySelector('#upload');
const img = document.createElement('img');
const nombre = document.createElement('h3');
const descripcion = document.createElement('p');
const precio = document.createElement('p');
const apiUrl = '../src/admiServicios/json/index.json'; 
// Asegúrate de que los días se muestren horizontalmente
selectedDaysContainer.style.display = 'flex'; 
selectedDaysContainer.style.flexWrap = 'wrap'; // Opcional, si deseas que los días salten a una nueva línea si se desbordan

/*Función que crea la tarjeta*/
function crearTarjetaServicio() {
    // Crear los elementos HTML
    const servicioDiv = document.createElement('div');
    servicioDiv.className = 'service';

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'service-details';


    Des.addEventListener('change', e => {
        descripcion.textContent = e.target.value;
    });

    const priceDiv = document.createElement('div');
    priceDiv.className = 'service-price';
    
    price.addEventListener('change', e => {
        precio.textContent = `Precio:$ ${e.target.value}`;
        if(e.target.value=='')
        {
            precio.textContent="Ingrese un costo";
        }
    });
    

    const contentDays = document.createElement('div');
    contentDays.className = 'ContentDays';

    // Función para crear un div por cada día seleccionado
    function actualizarDiasSeleccionados() {
        selectedDaysContainer.innerHTML = ''; // Limpiar el contenedor de días seleccionados

        buttons.forEach(button => {
            const day = button.textContent.trim();

            if (button.classList.contains('active')) {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'selected-day';
                dayDiv.textContent = day;
                selectedDaysContainer.appendChild(dayDiv);
            }
        });

        contentDays.appendChild(selectedDaysContainer);
    }

    // Añadir funcionalidad para seleccionar días y crear un div para cada día
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            actualizarDiasSeleccionados();
        });
    });

    allDaysCheckbox.addEventListener('change', function () {
        const allSelected = this.checked; // Verifica si el checkbox está marcado o no
    
        buttons.forEach(button => {
            if (allSelected) {
                button.classList.add('active'); // Selecciona todos los botones
            } else {
                button.classList.remove('active'); // Deselecciona todos los botones
            }
        });
    
        actualizarDiasSeleccionados(); // Actualiza la lista de días seleccionados
    });

    // Añadir elementos al DOM
    detailsDiv.appendChild(nombre);
    detailsDiv.appendChild(descripcion);
    priceDiv.appendChild(precio);
    contentDays.appendChild(selectedDaysContainer);
    servicioDiv.appendChild(img);
    servicioDiv.appendChild(detailsDiv);
    servicioDiv.appendChild(priceDiv);
    servicioDiv.appendChild(contentDays);

    Section.appendChild(servicioDiv);
}

crearTarjetaServicio();