// =========================================
// 1. "BASE DE DATOS" (Array de Objetos)
// =========================================
const productos = [
    {
        id: 1,
        nombre: "Filtro de Aceite Premium",
        precio: 15000,
        precioOriginal: 18100,        
        imagen: "assets/img/400x400/filtro_aceite.png", 
        categoria: "Mantenimiento",
        descripcion: "Filtro de aceite diseñado para maximizar la vida útil del motor, atrapando impurezas y garantizando un flujo constante de lubricación."
    },
    {
        id: 2,
        nombre: "Batería Alto Rendimiento",
        precio: 70000,
        precioOriginal: 95000,
        imagen: "assets/img/400x400/bateria.png",
        categoria: "Electricidad",
        descripcion: "Batería libre de mantenimiento con tecnología de larga duración. Ideal para vehículos con alta demanda energética y climas extremos."
    },
    {
        id: 3,
        nombre: "Juego de Pastillas de Freno",
        precio: 45000, 
        precioOriginal: 60000,
        imagen: "assets/img/400x400/pastillas_frenos.png",
        categoria: "Frenos",
        descripcion: "Pastillas de cerámica que ofrecen un frenado silencioso, menor generación de polvo y una resistencia superior al calor."
    },
    {
        id: 4,
        nombre: "Amortiguador Delantero",
        precio: 85000, 
        precioOriginal: 110000,
        imagen: "assets/img/400x400/amortiguador.png",
        categoria: "Suspensión",
        descripcion: "Amortiguador hidráulico reforzado para absorber impactos severos, mejorando la estabilidad, seguridad y confort en la conducción."
    }
];

// =========================================
// 2. LÓGICA DEL CARRITO 
// =========================================
let contadorCarrito = 0; 
const contadorElemento = document.getElementById("contador-carrito");

function agregarAlCarrito(idProducto) {
    contadorCarrito++;
    // Verificamos que el elemento exista antes de actualizarlo
    if (contadorElemento) {
        contadorElemento.innerText = contadorCarrito;
    }
    alert(`¡Producto agregado! Tienes ${contadorCarrito} items en el carrito.`);
}

// =========================================
// 3. RENDERIZADO HOME 
// =========================================
const contenedorProductos = document.getElementById("contenedor-productos");

function renderizarProductos() {
    // Si no existe el contenedor (estamos en otra página), no hacemos nada
    if (!contenedorProductos) return; 

    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {        
        // Formato chileno: sin decimales, con separador de miles
        const precioFinal = producto.precio.toLocaleString('es-CL');
        const precioOriginal = producto.precioOriginal.toLocaleString('es-CL');

        const tarjetaHTML = `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card card-producto h-100 p-2 position-relative">
                    <span class="position-absolute top-0 start-0 badge bg-danger m-2">-20%</span>

                    <a href="detalle_producto.html?id=${producto.id}" class="text-decoration-none">
                        <img src="${producto.imagen}" class="card-img-top rounded" alt="${producto.nombre}">
                    </a>
                    
                    <div class="card-body px-0">
                        <small class="text-muted text-uppercase" style="font-size: 0.75rem;">${producto.categoria}</small>
                        
                        <a href="detalle_producto.html?id=${producto.id}" class="text-decoration-none text-dark">
                            <h5 class="card-title mt-1 hover-effect-title">${producto.nombre}</h5>
                        </a>
                        
                        <div class="mb-2">
                            <span class="precio-actual">$${precioFinal}</span>
                            <span class="precio-original text-muted small text-decoration-line-through">$${precioOriginal}</span>
                        </div>
                        
                        <button class="btn btn-outline-danger w-100 btn-sm fw-bold" onclick="agregarAlCarrito(${producto.id})">
                            <i class="fas fa-shopping-cart me-1"></i> Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        contenedorProductos.innerHTML += tarjetaHTML;
    });
}

// =========================================
// 4. RENDERIZADO DETALLE PRODUCTO
// =========================================
const detalleContenedor = document.getElementById("detalle-producto");

function renderizarDetalle() {
    
    if (!detalleContenedor) return;
    
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get('id');

    // Usamos '==' para que coincida aunque uno sea string y el otro numero
    const producto = productos.find(p => p.id == idUrl);

    // Si no se encuentra el producto, mostrar mensaje de error
    if (!producto) {
        detalleContenedor.innerHTML = `
            <div class="col-12 text-center">
                <h3 class="text-danger">Producto no encontrado</h3>
                <a href="index.html" class="btn btn-dark mt-3">Volver a la tienda</a>
            </div>`;
        return;
    }

    // Renderizar la vista de detalle
    const precioFinal = producto.precio.toLocaleString('es-CL');
    const precioOriginal = producto.precioOriginal.toLocaleString('es-CL');
    
    detalleContenedor.innerHTML = `
        <div class="col-md-6 mb-4">
            <div class="border rounded p-4 text-center bg-white shadow-sm">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" style="max-height: 400px;">
            </div>
        </div>

        <div class="col-md-6">
            <small class="text-muted text-uppercase fw-bold">${producto.categoria}</small>
            <h1 class="fw-bold mb-3">${producto.nombre}</h1>
            
            <div class="mb-3">
                <span class="display-6 fw-bold text-danger">$${precioFinal}</span>
                <span class="text-muted text-decoration-line-through fs-5 ms-2">$${precioOriginal}</span>
            </div>

            <p class="lead text-secondary mb-4">
                ${producto.descripcion}
            </p>

            <div class="d-flex gap-3 mb-4">
                <button class="btn btn-danger btn-lg flex-grow-1" onclick="agregarAlCarrito(${producto.id})">
                    Agregar al Carrito
                </button>
            </div>

            <div class="alert alert-light border">
                <i class="fas fa-truck text-muted me-2"></i> Envío gratis a todo Chile
            </div>
        </div>
    `;
}

// =========================================
// 5. INICIALIZACIÓN
// =========================================
document.addEventListener("DOMContentLoaded", () => {    
    renderizarProductos(); 
    renderizarDetalle();   
});