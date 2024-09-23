function toggleProductos(tituloCategoria) {
    const listaProductos = tituloCategoria.nextElementSibling;
    const todasLasListas = document.querySelectorAll('.productos-lista'); // Selecciona todas las listas de productos

    // Cierra todas las listas de productos
    todasLasListas.forEach(lista => {
        if (lista !== listaProductos) { // Evita cerrar la lista seleccionada
            lista.style.display = 'none';
        }
    });

    // Alterna la visibilidad de la lista seleccionada
    listaProductos.style.display = (listaProductos.style.display === 'none' || listaProductos.style.display === '') ? 'block' : 'none';
}