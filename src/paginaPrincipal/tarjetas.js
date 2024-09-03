const servicio1=document.getElementById('MG');
const servicio2=document.getElementById('PS');
const servicio3=document.getElementById('3');
const servicio4=document.getElementById('4');
const servicio5=document.getElementById('5');
const servicio6=document.getElementById('6');
const servicio7=document.getElementById('7');
const servicio8=document.getElementById('8');
const servicio9=document.getElementById('9');
const title=document.querySelector('#MédicoGeneral');
const title1=document.querySelector('#Psico');
const title2=document.querySelector('#Nutri');
const title3=document.querySelector('#Enfe');
const title4=document.querySelector('#Odon');
const title5=document.querySelector('#Pedi');
const title6=document.querySelector('#Endo');
const title7=document.querySelector('#Gine');
const title8=document.querySelector('#Derma');
const BTNvet=document.querySelector('#servicio-vete');
const valorBtn=document.querySelector('#servicio-vete').value;


servicio1.addEventListener('click',()=>{
    const seselecciono=title.textContent;
    console.log(seselecciono);
    localStorage.setItem('ServiCard', seselecciono);
})

servicio2.addEventListener('click',()=>{
    const seselecciono=title1.textContent;
    console.log(seselecciono);
    localStorage.setItem('ServiCard', seselecciono);
})

servicio3.addEventListener('click',()=>{
    const seselecciono=title2.textContent;
    console.log(seselecciono);
    localStorage.setItem('ServiCard', seselecciono);
})

servicio4.addEventListener('click',()=>{
    const seselecciono=title3.textContent;
    console.log(seselecciono);
    localStorage.setItem('ServiCard', seselecciono);
})

servicio5.addEventListener('click',()=>{
    const seselecciono=title4.textContent;
    console.log(seselecciono);
    localStorage.setItem('ServiCard', seselecciono);
})

servicio6.addEventListener('click',()=>{
    const seselecciono=title5.textContent;
    console.log(seselecciono);
    localStorage.setItem('ServiCard', seselecciono);
})

servicio7.addEventListener('click',()=>{
    const seselecciono=title6.textContent;
    console.log(seselecciono);
    localStorage.setItem('ServiCard', seselecciono);
})

servicio8.addEventListener('click',()=>{
    const seselecciono=title7.textContent;
    console.log(seselecciono);
    localStorage.setItem('ServiCard', seselecciono);
})

servicio9.addEventListener('click',()=>{
    const seselecciono=title8.textContent;
    console.log(seselecciono);
    localStorage.setItem('ServiCard', seselecciono);
})

BTNvet.addEventListener('click',()=>{
    console.log(valorBtn);
    localStorage.setItem('ServiCard', valorBtn);
})

