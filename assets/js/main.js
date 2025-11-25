// (Array de Objetos)
const productos = [
    {
        id: 1,
        nombre: "Filtro de Aceite Premium",
        precio: 15000,
        precioOriginal: 18100,        
        imagen: "assets/img/400x400/filtro_aceite.png", 
        categoria: "Mantenimiento"
    },
    {
        id: 2,
        nombre: "Batería Alto Rendimiento",
        precio: 70000,
        precioOriginal: 95000,
        imagen: "assets/img/400x400/bateria.png",
        categoria: "Electricidad"
    },
    {
        id: 3,
        nombre: "Juego de Pastillas de Freno",
        precio: 45000, 
        precioOriginal: 60000,
        imagen: "assets/img/400x400/pastillas_frenos.png",
        categoria: "Frenos"
    },
    {
        id: 4,
        nombre: "Amortiguador Delantero",
        precio: 85000, 
        precioOriginal: 110000,
        imagen: "assets/img/fondo-gris.svg",
        categoria: "Suspensión"
    }
];

// 2. LÓGICA DEL CARRITO
let contadorCarrito = 0; 
const contadorElemento = document.getElementById("contador-carrito");

function agregarAlCarrito(idProducto) {
    contadorCarrito++;
    contadorElemento.innerText = contadorCarrito;
    alert(`¡Producto ID ${idProducto} agregado! Tienes ${contadorCarrito} items.`);
}

// 3. RENDERIZADO
const contenedor = document.getElementById("contenedor-productos");

function renderizarProductos() {
    contenedor.innerHTML = "";

    productos.forEach(producto => {        
        const precioFinal = producto.precio.toLocaleString('es-CL');
        const precioOriginal = producto.precioOriginal.toLocaleString('es-CL');

        const tarjetaHTML = `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card card-producto h-100 p-2 position-relative">
                    <span class="position-absolute top-0 start-0 badge bg-danger m-2">
                        -20%
                    </span>

                    <img src="${producto.imagen}" class="card-img-top rounded" alt="${producto.nombre}">
                    
                    <div class="card-body px-0">
                        <small class="text-muted text-uppercase" style="font-size: 0.75rem;">
                            ${producto.categoria}
                        </small>
                        <h5 class="card-title text-dark mt-1">${producto.nombre}</h5>
                        
                        <div class="mb-2">
                            <span class="precio-actual">$${precioFinal}</span>
                            
                            <span class="precio-original text-muted small text-decoration-line-through">
                                $${precioOriginal}
                            </span>
                        </div>
                        
                        <button class="btn btn-outline-danger w-100 btn-sm fw-bold" 
                                onclick="agregarAlCarrito(${producto.id})">
                            <i class="fas fa-shopping-cart me-1"></i> Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        contenedor.innerHTML += tarjetaHTML;
    });
}

// 4. INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
});