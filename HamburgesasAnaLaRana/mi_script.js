let usuarios_registrados = JSON.parse(localStorage.getItem('usuarios_registrados')) || [];


function iniciarSesion() {
    alert("Iniciando sesión...")
    
    // Obtener las credenciales del formulario
    let nombre = document.getElementById('nombre').value;
    let contrasena = document.getElementById('contrasena').value;

    // Obtener el usuario registrado desde localStorage
    let usuarioRegistrado = JSON.parse(localStorage.getItem('usuarios_registrados'));

    if (usuarioRegistrado && usuarioRegistrado.contrasena === contrasena && usuarioRegistrado.nombre === nombre) {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'index_conuser.html';
        alert('Bienvenido ' + usuarioRegistrado.nombre);
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
            localStorage.setItem('usuarios_registrados', JSON.stringify(nuevoUsuario));

            alert('¡Registro exitoso!');
            window.location.href = 'index.html';
        }
    }
}

function añadir_al_carrito_menu(){
     // Crea un diccionario con los elementos seleccionados
    let pedido = {
        tipo: 'menu',
        entrante: obtenerValorSeleccionado('entrante'),
        burger: obtenerValorSeleccionado('burger'),
        bebida: obtenerValorSeleccionado('bebida'),
        postre: obtenerValorSeleccionado('postre'),
        comentarios: document.querySelector('textarea[name="comentarios"]').value,
        precio: 12.50
    };

    // Recupera el carrito de pedidos existente o crea uno nuevo si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito_pedidos')) || [];

    // Agrega el nuevo pedido al carrito
    carrito.push(pedido);

    // Guarda el carrito actualizado en el localStorage
    localStorage.setItem('carrito_pedidos', JSON.stringify(carrito));
    alert('Pedido añadido al carrito.');

    window.location.href = 'index_conuser.html';
    return false;
    };


// Función para obtener el valor seleccionado de un grupo de radio buttons
function obtenerValorSeleccionado(nombreGrupo) {
    let opciones = document.getElementsByName(nombreGrupo);
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            return opciones[i].value;
        }
    }
    return null; // En caso de que no haya ninguna opción seleccionada
}

function añadir_al_carrito_combo() {
    alert("Añadiendo al carrito...");

    // Obtiene el combo seleccionado
    let comboSeleccionado = document.querySelector('input[name="combo_nombre"]:checked');
    // Verifica si se ha seleccionado algún combo
    if (comboSeleccionado){
        // Crea un diccionario con los elementos del combo seleccionado
        let pedido = {
            tipo: 'combo',
            combo_nombre: comboSeleccionado.value,
            combo_detalle: obtenerDetalleCombo(comboSeleccionado.value),
            precio: 14.50
        };
        alert("he entrado en el if")
        // Recupera el carrito de pedidos existente o crea uno nuevo si no existe
        let carrito = JSON.parse(localStorage.getItem('carrito_pedidos')) || [];

        // Agrega el nuevo pedido al carrito
        carrito.push(pedido);

        // Guarda el carrito actualizado en el localStorage
        localStorage.setItem('carrito_pedidos', JSON.stringify(carrito));
        alert('Combo añadido al carrito.');

        
    }
    else {
        alert('Por favor, selecciona un combo.');
    }
    // Redirige a la página index_conuser.html
    window.location.href = 'index_conuser.html';
    return false;
}

// Función auxiliar para obtener el detalle del combo según el nombre del combo
function obtenerDetalleCombo(nombreCombo) {
    switch (nombreCombo) {
        case 'comboClasico':
            return ['Hamburguesa: Clásica con Queso', 'Acompañamiento: Patatas Fritas', 'Bebida: Refresco de cola', 'Postre: Helado'];
        case 'comboVegetariano':
            return ['Hamburguesa: Vegetariana', 'Acompañamiento: Ensalada', 'Bebida: Té helado', 'Postre: Brownie'];
        case 'comboDobleCarne':
            return ['Hamburguesa: Doble Carne completa', 'Acompañamiento: Papas Fritas', 'Bebida: Coca-Cola', 'Postre: Tarta de Manzana'];
        case 'comboPollo':
            return ['Hamburguesa: Pollo a la Parrilla', 'Acompañamiento: Anillos de Cebolla', 'Bebida: Limonada', 'Postre: Helado de Vainilla'];
        case 'comboEspecial':
            return ['Hamburguesa: Especial de la Casa', 'Acompañamiento: Papas Fritas', 'Bebida: Batido de Chocolate', 'Postre: Tiramisú'];
        case 'comboPicante':
            return ['Hamburguesa: Picante con Jalapeños', 'Acompañamiento: Palitos de Zanahoria', 'Bebida: Agua Mineral', 'Postre: Sorbete de Limón'];
        default:
            return [];
    }
}

// Función para obtener los ingredientes seleccionados (checkbox)
function obtenerIngredientesSeleccionados() {
    let ingredientesSeleccionados = [];
    let checkboxes = document.querySelectorAll('input[name^="ingredientes_"]:checked');
    checkboxes.forEach(function (checkbox) {
        ingredientesSeleccionados.push(checkbox.value);
    });
    return ingredientesSeleccionados;
}


// Función para añadir al carrito las hamburguesas personalizadas
function añadir_al_carrito_burger() {
    alert("Pedido enviado al carrito...");

    // Crea un diccionario con los elementos seleccionados
    let pedido = {
        tipo: 'burger',
        masa: obtenerValorSeleccionado('pan'),
        salsa: obtenerValorSeleccionado('salsa'),
        carne: obtenerValorSeleccionado('carne'),
        ingredientes: obtenerIngredientesSeleccionados(),
        tecnica: obtenerValorSeleccionado('tecnica'),
        presentacion: obtenerValorSeleccionado('presentacion'),
        bebida: obtenerValorSeleccionado('bebida'),
        postre: obtenerValorSeleccionado('postre'),
        comentarios: document.querySelector('textarea[name="comentarios"]').value,
        precio: 15
    };

    // Recupera el carrito de pedidos existente o crea uno nuevo si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito_pedidos')) || [];

    // Agrega el nuevo pedido al carrito
    carrito.push(pedido);

    // Guarda el carrito actualizado en el localStorage
    localStorage.setItem('carrito_pedidos', JSON.stringify(carrito));
    alert('Hamburguesa personalizada añadida al carrito.');

    // Redirige a la página index_conuser.html
    window.location.href = 'index_conuser.html';
    return false;
}
function cargarPedidosEnHTML() {
    // Obtengo la lista de pedidos desde el localStorage
    let listaPedidos = JSON.parse(localStorage.getItem('carrito_pedidos')) || [];

    // Obtengo la referencia al elemento <ul> donde se mostrarán los pedidos
    let listaPedidosElement = document.getElementById('lista-pedidos');

    // Limpio la lista actual para evitar duplicados
    listaPedidosElement.innerHTML = '';

    // Itero sobre la lista de pedidos y creo elementos <li> para cada uno
    listaPedidos.forEach(function (pedido) {
        // Crea un elemento <li> para mostrar el pedido
        let liElement = document.createElement('li');

        // Construyo el contenido del elemento <li> en base al tipo de pedido
        let contenidoPedido = '';

        if (pedido.tipo === 'burger') {
            contenidoPedido = `
                <strong>Tipo de Pedido:</strong> Hamburguesa Personalizada<br>
                <strong>Carne:</strong> ${pedido.carne}<br>
                <strong>Ingredientes:</strong> ${pedido.ingredientes}<br>
                <strong>Bebida:</strong> ${pedido.bebida}<br>
                <strong>Postre:</strong> ${pedido.postre}<br>
                <strong>Comentarios:</strong> ${pedido.comentarios}<br>
                <strong>Precio:</strong> €${pedido.precio.toFixed(2)}
            `;
        } else if (pedido.tipo === 'combo') {
            contenidoPedido = `
                <strong>Tipo de Pedido:</strong> Combo de Hamburguesa<br>
                <strong>Combo:</strong> ${pedido.combo_nombre}<br>
                <strong>Precio:</strong> €${pedido.precio}<br>
            `;
        } else if (pedido.tipo === 'menu') {
            contenidoPedido = `
                <strong>Tipo de Pedido:</strong> Menú Personalizado<br>
                <strong>Entrante:</strong> ${pedido.entrante}<br>
                <strong>Burger:</strong> ${pedido.burger}<br>
                <strong>Bebida:</strong> ${pedido.bebida}<br>
                <strong>Postre:</strong> ${pedido.postre}<br>
                <strong>Comentarios:</strong> ${pedido.comentarios}<br>
                <strong>Precio:</strong> €${pedido.precio.toFixed(2)}
            `;
        }

        liElement.innerHTML = contenidoPedido;

        // Agrego el elemento <li> a la lista de pedidos
        listaPedidosElement.appendChild(liElement);
    });

    // Actualizo el total mostrando la suma de los precios de los pedidos
    actualizarTotal();
}


// Función auxiliar para actualizar el total
function actualizarTotal() {
    let listaPedidos = JSON.parse(localStorage.getItem('carrito_pedidos')) || [];
    let total = listaPedidos.reduce((acumulador, pedido) => acumulador + pedido.precio, 0);
    document.getElementById('total').textContent = `Total: €${total.toFixed(2)}`;
}
