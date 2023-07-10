class Producto {
  constructor(imagen, codigo, nombre, precio) {
    this.imagen = imagen;
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Compra {
  constructor() {
    this.cart = [];
  }

  agregarProducto(producto) {
    this.cart.push(producto);
  }

  obtenerSubtotal() {
    if (this.cart.length > 0) {
      return this.cart.reduce(
        (acumulador, producto) => acumulador + producto.precio,
        0
      );
    }
    return 0;
  }
  aplicarDescuento() {
    const subtotal = this.obtenerSubtotal();
    const descuento = subtotal * 0.1;
    return subtotal - descuento;
  }

  aplicarCargo() {
    const subtotal = this.obtenerSubtotal();
    const cargo = subtotal * 0.1;
    return subtotal + cargo;
  }

  mostrarCarrito() {
    console.table(this.cart);
  }

  terminarCompra(metodoPago) {
    let total;
    if (metodoPago === "efectivo") {
      total = this.aplicarDescuento();
      alert(
        `El precio total de su compra es de $ ${total.toFixed(
          2
        )} (10% de descuento aplicado por pago en efectivo).`
      );
      console.log(
        `El precio total de su compra es de $ ${total.toFixed(
          2
        )} (10% de descuento aplicado por pago en efectivo).`
      );
    } else if (metodoPago === "tarjeta") {
      total = this.aplicarCargo();
      alert(
        `El precio total de su compra es de $ ${total.toFixed(
          2
        )} (10% de cargo aplicado por uso de tarjeta).`
      );
      console.log(
        `El precio total de su compra es de $ ${total.toFixed(
          2
        )} (10% de cargo aplicado).`
      );
    } else {
      alert("⛔️ Método de pago no válido. La compra se ha cancelado.");
      console.log("Método de pago inválido");
      return;
    }

    if (confirm("¿Desea confirmar la compra?")) {
      alert("✅¡Gracias por tu compra! El pago se ha realizado exitosamente.");
      console.log("Compra confirmada");
    } else {
      alert("⛔️ La compra ha sido cancelada. No se realizará ningún cargo.");
      console.log("Compra cancelada");
    }
  }
}
