const registrar = document.getElementById('registrarse');

registrar.addEventListener('click', () => {
    const nombreUsuario = document.getElementById('nombre--registroU').value;
    const telefono = document.getElementById('telefono--registroU').value;
    const correoElectronico = document.getElementById('correo--registroU').value;
    const contrasena = document.getElementById('contraseña--registroU').value;
    const confirmcontrasena = document.getElementById('conf-contraseña--registroU').value;
    const idRoll = 2;//1 admin 2 cliente 3 proveedor

    //console.log( telefono);

    // Crear mi objeto que interactúa con el backend
    const user = {
        username: nombreUsuario,
        telefono: telefono,
        email: correoElectronico,
        password: contrasena,
        passwordconfirm: confirmcontrasena,
        idrol: idRoll
    }

    // Comenzar con la llamada de la API (fetch, asynch-await, axios)
    //const url = `http://localhost:8081/api/v1`;

    fetch('http://localhost:8081/api/v1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('El usuario se ah registrado con exito', data);
        })
        .catch(error => {
            console.error(error);
        })

})