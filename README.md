# Filtro de Productos en JavaScript

Este proyecto es una pequeña aplicación web que muestra una lista de productos (en este caso, zapatos y botas). El usuario puede escribir un color o tipo en un campo de búsqueda y hacer clic en el botón “Filtrar” para ver únicamente los productos que coincidan con la búsqueda.

---

## 📁 Estructura del proyecto
│
├── filtro.html

├── filtro.css

├── filtro.js

├── imagenes/

│ ├── bota-azul.jpg

│ ├── bota-negra.jpg

│ ├── taco-azul.jpg

│ ├── taco-negro.jpg

│ └── zapato-rojo.jpg

└── README.md


- **filtro.html**: Archivo HTML principal que contiene el input, botón y el contenedor donde se mostrarán los productos.
- **filtro.css**: Estilos básicos para el diseño de la página y los productos.
- **filtro.js**: Lógica en JavaScript para:
  1. Cargar la lista completa de productos.
  2. Filtrar los productos según el texto ingresado (por color o tipo).
  3. Renderizar dinámicamente los resultados en pantalla.
- **imagenes/**: Carpeta que contiene las imágenes de cada producto (zapatillas y botas).

---

## 🚀 Cómo usar este proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone git@github.com:Yorch7719/codigo-otros-3-jorgearagon.git
   cd codigo-otros-3-jorgearagon

Abrir en el navegador:

Simplemente abre el archivo filtro.html con tu navegador favorito.
Por ejemplo, desde la terminal (en macOS o Linux):

open filtro.html

O en Windows:
start filtro.html

Filtrar productos:

Escribe un color (por ejemplo: “azul”, “negro”, “rojo”) o un tipo (“zapato” o “bota”) en el campo de texto.

Haz clic en el botón Filtrar.

Verás cómo la lista de productos se actualiza mostrando únicamente aquellos que coinciden con el texto ingresado.

---

## 🛠️ Tecnologías y herramientas
HTML5: Estructura de la página.

CSS3: Estilos básicos y diseño responsivo con Flexbox.

JavaScript (Vanilla JS): Lógica de filtrado y manipulación del DOM.

Git & GitHub: Control de versiones y hospedaje del código.

---

## 📝 Cambios y mejoras incluidas
Correcciones en el HTML:

Se corrigió la ruta a filtro.js.

Se añadió la clase input en el campo de búsqueda para seleccionarlo fácilmente en JS.

Se especificó lang="es" en la etiqueta <html> para mejor accesibilidad.

Optimización en CSS:

Uso de flex-wrap: wrap y gap en el contenedor de productos para mejor adaptabilidad.

Ajustes en el tamaño de cada producto para mantener proporciones.

Refactor en JavaScript:

Se corrigió getElementsByName → getElementById("lista-de-productos") para apuntar correctamente al contenedor.

Se creó la función crearProducto(producto) para evitar duplicar código al generar cada tarjeta de producto.

El filtrado ahora ignora mayúsculas/minúsculas (se usa toLowerCase()).

Se añade un mensaje “No se encontraron productos.” si la búsqueda no arroja resultados.

Se utiliza .trim() en el valor del input para evitar espacios al inicio/final.

Comentarios que explican cada bloque y la razón de cada cambio.
