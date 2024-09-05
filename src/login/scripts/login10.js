const mostrarInfo = document.getElementById('login');

mostrarInfo.addEventListener('click', () => {
    const correoElectronico = document.getElementById('email-login').value;
    const url = `http://localhost:8081/api/v1/usercorreo/email?nexusmail=${correoElectronico}`;

    // fetch para método get
    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            localStorage.setItem('usuarioLogueado', data.username);
            localStorage.setItem('emailActualizado', data.email);
            localStorage.setItem('telefonoActualizado', data.telefono);
            
            
        })
        .catch(error => {
            userInfo.innerHTML = `
                Usuario no encontrado
            `
            console.error(error)
        })
})