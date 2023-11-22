let usuarios_registrados = []

function verificarInicioSesion() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Verificar las credenciales
    let usuarioEncontrado = usuarios_registrados.find(function (usuario) {
        return usuario.username === username && usuario.password === password;
    });

    if (usuarioEncontrado) {
        alert('¡Inicio de sesión exitoso!');
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
            usuarios_registrados.push({
                nombre: nombre,
                email: correo,
                direccion: direccion,
                telefono: telefono,
                contrasena: contrasena,
            });
            alert('¡Registro exitoso!');
        }
    }
}

