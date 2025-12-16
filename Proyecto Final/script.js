const botonesAgregar = document.querySelectorAll(".agregar-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");
const btnVaciar = document.getElementById("vaciar-carrito");

let carrito = [];
let total = 0;

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        carrito.push({ nombre, precio });
        total += precio;

        actualizarCarrito();
    });
});

function actualizarCarrito() {
    listaCarrito.innerHTML = "";

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button onclick="eliminarProducto(${index})">❌</button>
        `;
        listaCarrito.appendChild(li);
    });

    totalTexto.textContent = `Total: $${total}`;
}

function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

btnVaciar.addEventListener("click", () => {
    carrito = [];
    total = 0;
    actualizarCarrito();
});

