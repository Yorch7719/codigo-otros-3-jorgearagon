// === Definir los productos disponibles ====

const productos = [ // Se actualizan todas las direcciones.
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./imagenes/zapato-negro.jpeg"}, // Se agrega la direccion correcta y actualizada. Tambien se agrega un zapato negro en carpeta de imagenes.
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./imagenes/taco-azul.jpg"}, 
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./imagenes/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./imagenes/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./imagenes/zapato-rojo.jpg"}
]
// === Elementos del DOM ===
const li = document.getElementById("lista-de-productos") // Corregimos y usamos getElementById
const $i = document.querySelector('.input') || document.querySelector('input'); // Obtenemos el input correcto de busqueda.

// Refactor: creamos una funcion para crear elementos de HTML en cada producto. 
function crearProducto(producto) {
  const d = document.createElement("div");
  d.classList.add("producto");

  const ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = producto.nombre;

  const imagen = document.createElement("img");
  imagen.setAttribute('src', producto.img);

  d.appendChild(ti)
  d.appendChild(imagen)

  return d;
}

// Mostramos todos los productos al cargar
productos.forEach(p => li.appendChild(crearProducto(p)));

// Tenemos que Escuchar el clic para hacer el filtro
const botonDeFiltro = document.querySelector("button");
  
botonDeFiltro.onclick = function (){
  // Limpaiamos toda la lista antes de mostrar los resultados filtrados
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  const texto = $i.value;
  console.log(texto);

  // Hacemos la busqueda sin importar el texto (mayúsculas)
  const productosFiltrados = filtrado(productos, texto );

  productosFiltrados.forEach(p => li.appendChild(crearProducto(p)));
}

// Hacemos el filtrado por tipo o color, sin importar mayúsculas
const filtrado = (productos = [], texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto.toLowerCase()) ||
    item.color.toLowerCase().includes(texto.toLowerCase())
  );
}
  

  