let usuarios_registrados = []

function verificarInicioSesion(lista_usuarios) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Verificar las credenciales
    let usuarioEncontrado = lista_usuarios.find(function (usuario) {
        return usuario.username === username && usuario.password === password;
    });

    if (usuarioEncontrado) {
        alert('¡Inicio de sesión exitoso!');
    } else {
        alert('Error de inicio de sesión. Verifica tus credenciales.');
    }
}

function registrarUsuario(lista_usuarios) {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    // Verificar si el usuario ya existe
    var usuarioExistente = lista_usuarios.find(function (usuario) {
        return usuario.username === newUsername;
    });

    if (usuarioExistente) {
        alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
    } else {
        // Agregar nuevo usuario al array
        lista_usuarios.push({ username: newUsername, password: newPassword });
        alert('¡Registro exitoso!');
    }
}

