const usuario= localStorage.getItem('usuarioLogueado');
const email=localStorage.getItem('emailActualizado');
const tel=localStorage.getItem('telefonoActualizado');

const datosUsuario = document.querySelector(".datosPerfil"); 

const div= document.createElement('div');

div.classList.add("container--datos");
div.innerHTML=`
        <label id="name"> ${usuario} </label>
        <label id="email">${email}</label>
        <label id="telefono">${tel}</label>

`
datosUsuario.append(div);