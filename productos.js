export const todosLosProductos = [
  {
    id: 1,
    nombre: "Camiseta Oversize- Sekushīna geisha",
    precio: "$80.000 COP",
    descripcion: "Camiseta Oversize, de material Burda, con un diseño unico estilo Oni",
    imagen: "IMG/cuarta imagen.png",
    tipo: "camisetas",
    material: "Burda",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"]
  },
  {
    id: 2,
    nombre: "Hoddie Haruto",
    materiales: [
      { nombre: "Monaco", precio: "$90.000" },
      { nombre: "Antártico Licrado", precio: "$105.000" }
    ],
    descripcion: "Hoodie cálido y resistente, con diseño japonés.",
    imagen: "IMG/Hoodie 1.jpg",
    tipo: "hoodies",
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"]
  },
  {
    id: 3,
    nombre: "Pad Mouse Gamer",
    precio: "$30.000",
    descripcion: "Accesorio moderno, edición limitada.",
    imagen: "IMG/Pad mouse 1.jpg",
    tipo: "accesorios",
    material: "Acrílico resistente",
    tamaño: ["20 x 50"],
    colores: ["Personalizado"]
  },
  {
    id: 4,
    nombre: "Camiseta Oversize - Geisha oni",
    precio: "$80.000",
    descripcion: "Misteriosa profundidad del universo; belleza sutil que no puede describirse con palabras.",
    imagen: "IMG/tercera imagen.png",
    tipo: "camisetas",
    material: "Burda",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"]
  },
  {
    id: 5,
    nombre: "Hoodie Negro Oni",
    materiales: [
      { nombre: "Monaco", precio: "$90.000" },
      { nombre: "Antártico Licrado", precio: "$105.000" }
    ],
    descripcion: "Hoodie Negro con diseño Oni de edición limitada.",
    imagen: "IMG/Hoodie 3.jpg",
    tipo: "hoodies",
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"]
  },
 {
    id: 6,
    nombre: "Pad Mouse",
    precio: "$15.000",
    descripcion: "Mouse pad con diseño japonés. Elige entre forma redonda o rectangular.",
    imagen: "IMG/Mouse pad 1.jpg",
    tipo: "accesorios",
    material: "Acrílico resistente",
    colores: ["Personalizado"],
    forma: ["Redondo 20x20", "Rectangular 18x22"]
  },
  {
    id: 7,
    nombre: "Camiseta Oversize - Oni Original",
    precio: "$80.000",
    descripcion: "Camiseta Original de Oni, de material Burda, con un diseño unico estilo Oni",
    imagen: "IMG/Quinta imagen.jpeg",
    tipo: "camisetas",
    material: "Burda",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"]
  },
  {
    id: 8,
    nombre: "Camiseta Oversize - Kōri no Kokoro",
    precio: "$80.000",
    descripcion: "Camiseta Original de Oni, de material Burda, con un diseño unico estilo Oni.",
    imagen: "IMG/Sexta imagen.jpeg",
    tipo: "camisetas",
    material: "Burda",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"]
  },
  {
    id: 9,
    nombre: "Hoodie Blanco - Neon Seirei",
    descripcion: "Hoodie blanco con diseño Oni de edición limitada.",
    imagen: "IMG/Hoodie 2.jpg",
    tipo: "hoodies",
    materiales: [
      { nombre: "Monaco", precio: "$90.000" },
      { nombre: "Antartido licrado", precio: "$105.000" }
    ],
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"]
  }
];
let carrito = [];
// Función para filtrar productos según el tipo

function filtrarProductos(tipo) {
  const contenedor = document.getElementById("productos-container");
  contenedor.innerHTML = "";

  const filtrados = tipo ? todosLosProductos.filter(p => p.tipo === tipo) : todosLosProductos;

  filtrados.forEach(producto => {
    const item = document.createElement("a");
    item.href = `compra.html?producto=${producto.id}`;
    item.className = "product-item";
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <p>${producto.nombre}</p>
      <p>${producto.precio}</p>
      <button class="cta" onclick="event.preventDefault(); agregarAlCarrito('${producto.nombre}', '${producto.precio}')">Agregar al carrito</button>
    `;
    contenedor.appendChild(item);
  });

  document.querySelectorAll(".cta").forEach(btn => btn.classList.remove("filtro-activo"));
  if (tipo === "camisetas") {
    document.getElementById("btn-camisetas").classList.add("filtro-activo");
  } else if (tipo === "hoodies") {
    document.getElementById("btn-hoodies").classList.add("filtro-activo");
  } else if (tipo === "accesorios") {
    document.getElementById("btn-accesorios").classList.add("filtro-activo");
  } else {
    document.getElementById("btn-todos").classList.add("filtro-activo");
  }
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  guardarCarrito();
  actualizarContador();
  mostrarCarrito();
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarContador() {
  const contador = document.getElementById("contador-carrito");
  if (contador) contador.textContent = carrito.length;
}

function mostrarCarrito() {
  let panel = document.getElementById('carrito-panel');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'carrito-panel';
    panel.style.cssText = `
      position: fixed;
      top: 70px;
      right: 20px;
      width: 300px;
      background: #1c1c1c;
      color: white;
      border-radius: 10px;
      padding: 15px;
      z-index: 1000;
      box-shadow: 0 0 10px #000;
    `;
    document.body.appendChild(panel);
  }

  panel.innerHTML = `
    <h3>Carrito</h3>
    <ul id="lista-carrito" style="list-style:none; padding:0; max-height:200px; overflow-y:auto;">
      ${carrito.map((item, i) => `
        <li style="margin-bottom: 10px;">
          ${item.nombre} - ${item.precio}
          <button onclick="eliminarDelCarrito(${i})" style="float:right; background:red; color:white; border:none; border-radius:5px; cursor:pointer;">X</button>
        </li>`).join('')}
    </ul>
    <button onclick="pagarAhora()" style="width:100%; padding:10px; margin-top:10px; background:#a020f0; color:white; border:none; border-radius:8px; cursor:pointer;">Pagar ahora</button>
  `;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  actualizarContador();
  mostrarCarrito();
}

function pagarAhora() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const mensaje = encodeURIComponent(
    "Hola quiero realizar el pago de estos productos:\n" +
    carrito.map(p => `- ${p.nombre} - ${p.precio}`).join('\n') +
    "\n\n¿Cuáles son los métodos de pago por favor?"
  );
  window.open(`https://wa.me/573151774787?text=${mensaje}`, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
  const tipo = new URLSearchParams(window.location.search).get("tipo") || "";
  filtrarProductos(tipo);

  const guardado = localStorage.getItem("carrito");
  if (guardado) {
    carrito = JSON.parse(guardado);
    actualizarContador();
  }

  const icono = document.getElementById("icono-carrito");
  if (icono) {
    icono.addEventListener("click", () => {
      const panel = document.getElementById("carrito-panel");
      if (panel && panel.style.display !== 'none') {
        panel.style.display = 'none';
      } else {
        mostrarCarrito();
        if (panel) panel.style.display = 'block';
      }
    });
  }
});

// Exponer al contexto global
window.filtrarProductos = filtrarProductos;
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.pagarAhora = pagarAhora;
