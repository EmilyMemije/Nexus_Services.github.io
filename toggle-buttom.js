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
const SerchButtom=document.querySelector('#BotonSarch');
SerchButtom.addEventListener('click',()=>{
    const compara=document.querySelector('#Sarch').value;
    let Buscado="";
    console.log(compara);
   if(compara==="Psicologia")
    {
        console.log("ingrese")
        Buscado="Psicología";
    }
    else if(compara==="Psicología")
    {
        console.log("ingrese")
        Buscado="Psicología";
    }

    localStorage.setItem("idBuscado",Buscado);
})

   


