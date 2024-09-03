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
const Serch=document.querySelector('.search--imput');
const SerchButtom=document.querySelector('.botton');

SerchButtom.addEventListener('Click',()=>{
    const Buscado="";

    if(Serch.textContent==="Psicologia")
    {
        Buscado="Psicología";
        localStorage.setItem('Busqueda', Buscado);
    }
    if(Serch.textContent==="Psicología")
    {
         Buscado="Psicología";
         localStorage.setItem('Busqueda', Buscado);
    }

})

   


