const abrirMenu= document.querySelector('.abrir');
const cerrarMenu = document.querySelector('.cerrar');
const menuPags = document.querySelector('.container--menus');

abrirMenu.addEventListener("click", (e)=>{
    const menuAbierto = document.querySelector('#menu--desplegable');
    menuAbierto.classList.toggle('noactive');
    menuPags.classList.toggle('noactive');

})

cerrarMenu.addEventListener("click", (e)=>{
    const menuCerrado = document.querySelector('#menu--desplegable');
    menuCerrado.classList.toggle('noactive');
    menuPags.classList.toggle('noactive');
})


/// funcion del apartado de buscar
let Buscado="";
const SerchButtom=document.querySelector('#BotonSarch');
SerchButtom.addEventListener('click',()=>{
    let compara=document.querySelector('#Sarch').value.toLowerCase();
    console.log(compara);
   if(compara==="psicologia")
    {
        console.log("ingrese")
        Buscado="Psicología";
    }
    else if(compara==="psicología")
    {
        console.log("ingrese")
        Buscado="Psicología";
    }
    localStorage.setItem('idBuscado',Buscado);

    window.location.href = '../../src/listaProveedores/listaProveedores.html';
})

   


