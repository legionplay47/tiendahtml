function showSection(id) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Función para agregar al carrito
function agregarAlCarrito(nombre, precio) {
    var carrito = document.getElementById('carrito-productos'); // Elemento donde se agregan los productos al carrito
    var nuevoProducto = `
        <tr>
            <td>${nombre}</td>
            <td>1</td>
            <td>$${precio.toFixed(2)}</td>
            <td>$${precio.toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(this)">Eliminar</button>
            </td>
        </tr>
    `;
    carrito.innerHTML += nuevoProducto;
    actualizarTotal(precio); // Actualiza el total
    mostrarMensaje("Producto Agregado");
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(btn) {
    var row = btn.parentNode.parentNode; // Acceder a la fila del producto
    var precio = parseFloat(row.cells[2].innerText.replace('$', '')); // Obtener precio del producto

    row.remove(); // Remover fila
    mostrarMensaje("Producto Eliminado");

    actualizarTotal(-precio); // Actualizar el total al eliminar
 
}

// Función para actualizar el total del carrito
function actualizarTotal(cambio) {
    var totalElem = document.getElementById('carrito-total');
    var total = parseFloat(totalElem.innerText.replace('Total: $', ''));
    total += cambio;
    totalElem.innerText = `Total: $${total.toFixed(2)}`;
}

// Función para finalizar compra
document.getElementById('finalizar-btn').addEventListener('click', function () {
    var carrito = document.getElementById('carrito-productos');
    carrito.innerHTML = ''; // Vaciar el carrito
    
        // Mostrar mensaje de compra finalizada
        mostrarMensaje("¡Compra finalizada!");
   
    
    

    // Reiniciar total
    document.getElementById('carrito-total').innerText = 'Total: $0.00';
});

function mostrarMensaje(mensaje) {
    var mensajeElement = document.createElement('div');
    mensajeElement.id = 'mensaje';
    mensajeElement.innerText = mensaje;
    mensajeElement.style.position = 'fixed';
    mensajeElement.style.top = '50%';
    mensajeElement.style.left = '50%';
    mensajeElement.style.transform = 'translate(-50%, -50%)';
    mensajeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    mensajeElement.style.color = 'white';
    mensajeElement.style.padding = '10px';
    mensajeElement.style.borderRadius = '5px';
    mensajeElement.style.zIndex = '1000';
    document.body.appendChild(mensajeElement);

    setTimeout(() => {
        mensajeElement.remove(); // Remover el mensaje después de 1 segundo
    }, 1000); // 1 segundos de visualización
}
