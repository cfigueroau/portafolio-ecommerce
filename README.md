# portafolio-ecommerce

La aplicación simula un flujo de compra básico, incluyendo un catálogo dinámico renderizado con JavaScript, una página de detalle de producto y un carrito de compras interactivo, todo estilizado con **Bootstrap 5**.

## 🚀 Funcionalidades Principales

* **Renderizado Dinámico (DOM):** Los productos se generan automáticamente desde un arreglo de objetos en JavaScript, cumpliendo con el requisito de carga dinámica de datos.
* **Navegación por Parámetros:** Al hacer clic en un producto, se redirige a `detalle_producto.html` pasando el ID por la URL (`?id=x`). El script captura este parámetro para mostrar la información específica de ese producto.
* **Carrito de Compras:** Contador en la barra de navegación que se actualiza en tiempo real al agregar productos mediante eventos del DOM.
* **Formato de Moneda Chilena:** Implementación de `toLocaleString('es-CL')` para mostrar los precios con separadores de miles y sin decimales (ej: $15.000).
* **Diseño Responsivo (Mobile First):** Utiliza el sistema de grillas de Bootstrap para asegurar una visualización correcta en móviles (≤ 420px) y escritorio (≥ 1024px).

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
* **CSS3:** Estilos personalizados y variables CSS para la identidad de marca.
* **Bootstrap 5.3:** Framework utilizado para la maquetación (Grid System), Navbar, Carousel y Cards.
* **JavaScript (ES6):** Lógica de negocio, manipulación del DOM y manejo de `URLSearchParams`.
* **Git/GitHub:** Control de versiones y repositorio remoto.

Desarrollado por [Claudio Figueroa](https://github.com/cfigueroau/portafolio-ecommerce).