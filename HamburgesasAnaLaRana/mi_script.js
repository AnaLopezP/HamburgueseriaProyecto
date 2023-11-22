let usuarios_registrados = []

function verificarInicioSesion() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Verificar las credenciales
    let usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.username === username && usuario.password === password;
    });

    if (usuarioEncontrado) {
        alert('¡Inicio de sesión exitoso!');
    } else {
        alert('Error de inicio de sesión. Verifica tus credenciales.');
    }
}