const registrar = document.getElementById('registrarse');

registrar.addEventListener('click', () => {
    const nombreUsuario = document.getElementById('nombre--registro').value;
    const telefono = "0";
    const correoElectronico = document.getElementById('correo--registro').value;
    const contrasena = document.getElementById('contraseña--registro').value;
    const confirmcontrasena = document.getElementById('conf-contraseña--registro').value;
    //const nuevoEspecialidad = document.getElementById('especialidad');
    const idRoll = 3;//1 admin 2 cliente 3proveedor

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