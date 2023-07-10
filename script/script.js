const articulos = [
  new Producto("🥛", 1, "Leche", 250),
  new Producto("🩳", 2, "Pan", 500),
  new Producto("🥤", 3, "Yogurt", 150),
  new Producto("🥚", 4, "Huevos", 800),
  new Producto("🍖", 5, "Carne", 1500),
  new Producto("🍚", 6, "Azucar", 700),
  new Producto("🧉", 7, "Yerba", 600),
  new Producto("🥔", 8, "Papa", 400),
  new Producto("💧", 9, "Agua", 100),
  new Producto("🧀", 10, "Queso", 1300),
];

function buscarProducto(codigo) {
  return articulos.find((producto) => producto.codigo === parseInt(codigo));
}
function comprar() {
  const lista = new Compra();
  function agregarProductoAlCarrito() {
    let codigo = prompt("Ingresa el código de tu articulo:");
    let productoElegido = buscarProducto(codigo);
    if (productoElegido) {
      lista.agregarProducto(productoElegido);
      console.log(
        `✅ ${productoElegido.nombre.toUpperCase()} se agregó al carrito correctamente.`
      );
      let respuesta = confirm("¿Quieres agregar otro articulo?");
      if (respuesta === true) {
        agregarProductoAlCarrito();
      } else {
        lista.mostrarCarrito();
        const metodoPago = prompt(
          "¿Cómo desea pagar? Ingrese 'efectivo' o 'tarjeta'"
        );
        lista.terminarCompra(metodoPago);
      }
    } else {
      alert("⛔️ Error en el codigo elegido. Elegir nuevamente");
      agregarProductoAlCarrito();
    }
  }

  agregarProductoAlCarrito();
}
//Ejecutar por consola la funcion COMPRAR()
