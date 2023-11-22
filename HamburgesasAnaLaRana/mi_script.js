let usuarios_registrados = JSON.parse(localStorage.getItem('usuarios_registrados')) || [];


function iniciarSesion() {
    alert("Iniciando sesión...")
    
    // Obtener las credenciales del formulario
    let nombre = document.getElementById('nombre').value;
    let contrasena = document.getElementById('contrasena').value;

    // Obtener el usuario registrado desde localStorage
    let usuarioRegistrado = JSON.parse(localStorage.getItem('usuarioActual'));

    if (usuarioRegistrado && usuarioRegistrado.contrasena === contrasena && usuarioRegistrado.nombre === nombre) {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'index_conuser.html';
    } else {
        alert('Error de inicio de sesión. Verifica tus credenciales.');
    }
}

function registrarUsuario() {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let contrasena = document.getElementById('contrasena').value;
    let confirmarContrasena = document.getElementById('confirmar_contrasena').value;
    if (confirmarContrasena === contrasena) {
    
        // Verificar si el usuario ya existe
        let usuarioExistente = usuarios_registrados.find(function (usuario) {
            return usuario.username === newUsername;
        });

        if (usuarioExistente) {
            alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
        } else {
            // Agregar nuevo usuario al array
            let nuevoUsuario = {
                nombre: nombre,
                email: correo,
                direccion: direccion,
                telefono: telefono,
                contrasena: contrasena,
            };

            // Guardar el nuevo usuario en localStorage
            localStorage.setItem('usuarioActual', JSON.stringify(nuevoUsuario));

            alert('¡Registro exitoso!');
            window.location.href = 'index.html';
        }
    }
}