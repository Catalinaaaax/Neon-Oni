// Helper para asignar ratings aleatorios altos
const getRandomHighRating = () => {
  const ratings = [4.8, 4.9, 5.0];
  return ratings[Math.floor(Math.random() * ratings.length)];
};

export const todosLosProductos = [
  {
    id: 1,
    nombre: "Camiseta Oversize- Sekushīna geisha",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Oversize con un diseño unico estilo Oni, disponible en diferentes materiales.",
    imagen: "IMG/cuarta imagen.png",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  
  {
    id: 2,
    nombre: "Hoddie Haruto",
    materiales: [
      { nombre: "Monaco", precio: "$85.000" },
      { nombre: "Antártico Licrado", precio: "$90.000" }
    ],
    descripcion: "Hoodie cálido y resistente, con diseño japonés.",
    imagen: "IMG/Hoodie 1.jpg",
    tipo: "hoodies",
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 3,
    nombre: "Pad Mouse Gamer",
    precio: "$25.000",
    descripcion: "Accesorio moderno, edición limitada.",
    imagen: "IMG/Pad mouse 1.jpg",
    tipo: "accesorios",
    material: "Acrílico resistente",
    tamaño: ["20 x 50"],
    colores: ["Personalizado"],
    rating: getRandomHighRating()
  },
  {
    id: 4,
    nombre: "Camiseta Oversize - Geisha oni",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Misteriosa profundidad del universo; belleza sutil que no puede describirse con palabras.",
    imagen: "IMG/tercera imagen.png",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 5,
    nombre: "Hoodie Negro Oni",
    materiales: [
      { nombre: "Monaco", precio: "$85.000" },
      { nombre: "Antártico Licrado", precio: "$90.000" }
    ],
    descripcion: "Hoodie Negro con diseño Oni de edición limitada.",
    imagen: "IMG/Hoodie 3.jpg",
    tipo: "hoodies",
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
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
    forma: ["Redondo 20x20", "Rectangular 18x22"],
    rating: getRandomHighRating()
  },
  {
    id: 7,
    nombre: "Camiseta Oversize - Oni Original",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Original de Oni, de material Burda, con un diseño unico estilo Oni",
    imagen: "IMG/Quinta imagen.jpeg",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 8,
    nombre: "Camiseta Oversize - Kōri no Kokoro",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Original de Oni, de material Burda, con un diseño unico estilo Oni.",
    imagen: "IMG/Sexta imagen.jpeg",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 9,
    nombre: "Hoodie Blanco - Neon Seirei",
    descripcion: "Hoodie blanco con diseño Oni de edición limitada.",
    imagen: "IMG/Hoodie 2.jpg",
    tipo: "hoodies",
    materiales: [
      { nombre: "Monaco", precio: "$85.000" },
      { nombre: "Antartido licrado", precio: "$90.000" }
    ],
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
   {
    id: 10,
    nombre: "Pad Mouse Gamer de Naruto",
    precio: "$25.000",
    descripcion: "Mouse pad con diseño japonés. Elige entre forma redonda o rectangular.",
    imagen: "IMG/Naruto.jpg",
    tipo: "accesorios",
    material: "Acrílico resistente",
    colores: ["Personalizado"],
    forma: ["Rectangular 20x50"],
    rating: getRandomHighRating()
  },
    {
    id: 11,
    nombre: "Pad Mouse de Pikachu",
    precio: "$15.000",
    descripcion: "Mouse pad con diseño japonés. Elige entre forma redonda o rectangular.",
    imagen: "IMG/Picachu.png",
    tipo: "accesorios",
    material: "Acrílico resistente",
    colores: ["Personalizado"],
    forma: ["Redondo 20x20", "Rectangular 18x22"],
    rating: getRandomHighRating()
  },
   {
    id: 12,
    nombre: "Pad Mouse de Death Note",
    precio: "$15.000",
    descripcion: "Mouse pad con diseño japonés. Elige entre forma redonda o rectangular.",
    imagen: "IMG/Death Note1.png",
    tipo: "accesorios",
    material: "Acrílico resistente",
    colores: ["Personalizado"],
    forma: ["Redondo 20x20", "Rectangular 18x22"],
    rating: getRandomHighRating()
  },
  {
    id: 13,
    nombre: "Pad Mouse de Dragon Ball",
    precio: "$15.000",
    descripcion: "Mouse pad con diseño japonés. Elige entre forma redonda o rectangular.",
    imagen: "IMG/Goku.png",
    tipo: "accesorios",
    material: "Acrílico resistente",
    colores: ["Personalizado"],
    forma: ["Redondo 20x20", "Rectangular 18x22"],
    rating: getRandomHighRating()
  },
    {
    id: 14,
    nombre: "Pad Mouse de One Piece",
    precio: "$15.000",
    descripcion: "Mouse pad con diseño japonés. Elige entre forma redonda o rectangular.",
    imagen: "IMG/One Piece.png",
    tipo: "accesorios",
    material: "Acrílico resistente",
    colores: ["Personalizado"],
    forma: ["Redondo 20x20", "Rectangular 18x22"],
    rating: getRandomHighRating()
  },
    {
    id: 15,
    nombre: "Pad Mouse de Stitch",
    precio: "$15.000",
    descripcion: "Mouse pad con diseño japonés. Elige entre forma redonda o rectangular.",
    imagen: "IMG/Stich.png",
    tipo: "accesorios",
    material: "Acrílico resistente",
    colores: ["Personalizado"],
    forma: ["Redondo 20x20", "Rectangular 18x22"],
    rating: getRandomHighRating()
  },
    {
    id: 16,
    nombre: "Pad Mouse de Naruto",
    precio: "$15.000",
    descripcion: "Mouse pad con diseño japonés. Elige entre forma redonda o rectangular.",
    imagen: "IMG/Naruto1.png",
    tipo: "accesorios",
    material: "Acrílico resistente",
    colores: ["Personalizado"],
    forma: ["Redondo 20x20", "Rectangular 18x22"],
    rating: getRandomHighRating()
  },
  {
    id: 17,
    nombre: "Camiseta Oversize - zoro",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta de Zoro, única y fabulosa.",
    imagen: "IMG/Camiseta zoro.jpeg",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 18,
    nombre: "Camiseta Oversize - Luna Demon Slayer",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta de Zoro, única y fabulosa.",
    imagen: "IMG/Camiseta Luna Demon Slayer.jpeg",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 19,
    nombre: "Camiseta Oversize - Tanjiro",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Encarna la determinación del cazador de demonios con esta camiseta oversize de Tanjiro. Un diseño vibrante que captura la esencia de su valentía, perfecta para cualquier fan de Kimetsu no Yaiba.",
    imagen: "IMG/Camiseta Tanjiro.jpeg",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 20,
    nombre: "Camiseta Oversize - Luna Demon Slayer",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta de Tanjiro, única y fabulosa.",
    imagen: "IMG/Camiseta Luna Demon Slayer 2.jpeg",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 21,
    nombre: "Hoodie - Nezuko",
    descripcion: "Hoodie único nezuko, cálido y resistente",
    imagen: "IMG/Hoodie Nezuko.jpeg",
    tipo: "hoodies",
    materiales: [
      { nombre: "Monaco", precio: "$85.000" },
      { nombre: "Antartido licrado", precio: "$90.000" }
    ],
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 22,
    nombre: "Camiseta Oversize - Inosuke Hashibira",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta de Inosuke Hashibira, única y fabulosa.",
    imagen: "IMG/Camiseta Inosuke Hashibira.png",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 23,
    nombre: "Camiseta Oversize - Rengoku",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta de Rengoku, única y fabulosa.",
    imagen: "IMG/Camiseta Rengoku.png",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 24,
    nombre: "Camiseta Oversize - shinobu kocho",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta de shinobu kocho, única y fabulosa.",
    imagen: "IMG/Camiseta shinobu kocho.png",
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 25,
    nombre: "Camiseta Oversize - Tanjiro",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta de Tanjiro, única y fabulosa.",
    imagen: "IMG/Camiseta Tanjiro 2.png",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  
  {
    id: 27,
    nombre: "Camiseta Oversize - Nezuko Kamado",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta de Nezuko Kamado, única y fabulosa.",
    imagen: "IMG/Nezuko Kamado.png",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 28,
    nombre: "Camiseta Oversize - Máscara Oni",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta de una máscara oni, en tornasol, diseño exclusivo!.",
    imagen: "IMG/Mascara Oni.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  }, 
  {
    id: 29,
    nombre: "Camiseta Oversize - Umi",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Overzise Umi, un diseño unico al estilo Oni.",
    imagen: "IMG/Umi.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },  
  {
    id: 30,
    nombre: "Camiseta Oversize - One Piece",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Overzise Piece, diseños exclusivos al estilo Oni.",
    imagen: "IMG/one piece.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },  
  {
    id: 31,
    nombre: "Camiseta Oversize - Spy x Family",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Overzise Spy x family, diseños exclusivos al estilo Oni.",
    imagen: "IMG/Spy x family.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 32,
    nombre: "Camiseta Oversize - Studio Ghibli",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Overzise Studio ghibli, diseños exclusivos al estilo Oni.",
    imagen: "IMG/Studio ghibli.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 33,
    nombre: "Camiseta Oversize - The Legend of Zelda",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Overzise The Legend of Zelda, diseños exclusivos al estilo Oni.",
    imagen: "IMG/The Legend of Zelda.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 34,
    nombre: "Camiseta Oversize - Yor Spy x Family",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Overzise Yor Spy x Family, diseños exclusivos al estilo Oni.",
    imagen: "IMG/yor spy x family.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 35,
    nombre: "Camiseta Oversize - Zoro One Piece",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Overzise Zoro One Piece, diseños exclusivos al estilo Oni.",
    imagen: "IMG/Zoro 1.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
    {
    id: 36,
    nombre: "Camiseta Oversize - Zoro One Piece",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Overzise Zoro One Piece, diseños exclusivos al estilo Oni.",
    imagen: "IMG/Zoro 2.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
    {
    id: 37,
    nombre: "Camiseta Oversize - Zoro One Piece",
    materiales: [
      { nombre: "Burda", precio: "$65.000" },
      { nombre: "Scuba", precio: "$55.000" },
      { nombre: "Algodón licrado", precio: "$35.000" }
    ],
    descripcion: "Camiseta Overzise Zoro One Piece, diseños exclusivos al estilo Oni.",
    imagen: "IMG/zoro 3.jpeg",   
    tipo: "camisetas",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 38,
    nombre: "Hoodie - Dragón Oni",
    descripcion: "Hoodie Dragón Oni, cálido y resistente",
    imagen: "IMG/Dragon oni 2.jpeg",
    tipo: "hoodies",
    materiales: [
      { nombre: "Monaco", precio: "$85.000" },
      { nombre: "Antartido licrado", precio: "$90.000" }
    ],
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 39,
    nombre: "Hoodie - Dragón Oni",
    descripcion: "Hoodie Dragón Oni, cálido y resistente",
    imagen: "IMG/Dragon oni.jpeg",
    tipo: "hoodies",
    materiales: [
      { nombre: "Monaco", precio: "$85.000" },
      { nombre: "Antartido licrado", precio: "$90.000" }
    ],
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 40,
    nombre: "Hoodie  Oni",
    descripcion: "Domina la noche con este hoodie que presenta una imponente máscara Oni. Su diseño audaz y materiales de alta calidad te mantendrán abrigado mientras proyectas un estilo inconfundible.",
    imagen: "IMG/Hoodie Oni.jpeg",
    tipo: "hoodies",
    materiales: [
      { nombre: "Monaco", precio: "$85.000" },
      { nombre: "Antartido licrado", precio: "$90.000" }
    ],
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
  {
    id: 41,
    nombre: "Hoodie  Oni",
    descripcion: "Hoodie Oni, cálido y resistente",
    imagen: "IMG/Hoodie Oni 2.jpeg",
    tipo: "hoodies",
    materiales: [
      { nombre: "Monaco", precio: "$85.000" },
      { nombre: "Antartido licrado", precio: "$90.000" }
    ],
    tallas: ["S", "M", "L", "XL", "XXL"],
    colores: ["Negro", "Blanco", "Rojo", "Azul Petroleo", "Verde Militar", "Arena", "Camel", "Marfil"],
    rating: getRandomHighRating()
  },
];
let carrito = [];
// Función para filtrar productos según el tipo 

function filtrarProductos(tipo, busqueda = '') {
  const contenedor = document.getElementById("productos-container");
  // Si no existe el contenedor (por ejemplo, en index.html o compra.html), salir sin hacer nada
  if (!contenedor) return;
  contenedor.innerHTML = "";

  // 1. Invertir el array para mostrar los más nuevos primero
  const productosMostrados = [...todosLosProductos].reverse();

  // 2. Filtrar por tipo (categoría)
  let porTipo = tipo ? productosMostrados.filter(p => p.tipo === tipo) : productosMostrados;

  // 3. Filtrar por término de búsqueda
  const busquedaLower = busqueda.toLowerCase();
  const filtrados = porTipo.filter(p => p.nombre.toLowerCase().includes(busquedaLower));

  // Renderizar los productos filtrados
  filtrados.forEach(producto => {
    let precioParaMostrar;
    let nombreParaCarrito;
    let precioParaCarrito;

    if (producto.materiales && producto.materiales.length > 0) {
      const parsePrice = (priceStr) => parseInt(String(priceStr).replace(/\$|\./g, ''), 10);

      // Encontrar el material con el precio más bajo
      const materialMasBarato = producto.materiales.reduce((min, current) => {
        return parsePrice(current.precio) < parsePrice(min.precio) ? current : min;
      }, producto.materiales[0]);

      precioParaMostrar = `Desde ${materialMasBarato.precio}`;
      nombreParaCarrito = `${producto.nombre} (${materialMasBarato.nombre})`;
      precioParaCarrito = materialMasBarato.precio;
    } else {
      precioParaMostrar = producto.precio;
      nombreParaCarrito = producto.nombre;
      precioParaCarrito = producto.precio;
    }

    const safeCartName = nombreParaCarrito.replace(/'/g, "\\'");
    const safeCartPrice = String(precioParaCarrito || '').replace(/'/g, "\\'");

    const item = document.createElement("a");
    item.href = `compra.html?producto=${producto.id}`;
    item.className = "product-item";
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" decoding="async" width="300" height="300">
      <p>${producto.nombre}</p>
      <p>${precioParaMostrar}</p>
      <button class="cta" onclick="agregarAlCarrito(event, '${safeCartName}', '${safeCartPrice}')">Agregar al carrito</button>
    `;
    contenedor.appendChild(item);
  });

  document.querySelectorAll(".cta").forEach(btn => btn.classList.remove("filtro-activo"));
  const btnActivo = document.getElementById(`btn-${tipo || 'todos'}`);
  if (btnActivo) {
    btnActivo.classList.add("filtro-activo");
  } else if (tipo === "camisetas") { // Fallback por si el tipo no tiene botón
    document.getElementById("btn-camisetas").classList.add("filtro-activo");
  }
  else {
    document.getElementById("btn-todos").classList.add("filtro-activo");
  }
}

function agregarAlCarrito(eventOrItem, nombre, precio, imagenOrigen) {
  // Permitir llamadas de dos formas:
  // 1) Desde la grilla: agregarAlCarrito(event, nombre, precio)
  // 2) Desde compra.html: agregarAlCarrito(null, nombre, precio, imagenOrigen) o pasar directamente un objeto

  let item;
  let event = null;

  if (typeof eventOrItem === 'object' && eventOrItem && 'nombre' in eventOrItem) {
    // Llamada con objeto completo: { nombre, precio, talla, color, forma, material }
    item = eventOrItem;
  } else {
    event = eventOrItem || null;
    item = { nombre, precio };
  }

  // Inicializar carrito desde localStorage si no se ha cargado aún
  if (!Array.isArray(carrito) || carrito.length === 0) {
    try {
      const guardado = localStorage.getItem('carrito');
      if (guardado) carrito = JSON.parse(guardado) || [];
    } catch {}
  }

  // Animación si hay evento (grilla) o si se provee una imagen de origen (detalle)
  const cartIcon = document.getElementById('icono-carrito');
  if ((event || imagenOrigen) && cartIcon) {
    let productImage = null;
    if (event) {
      const productCard = event.target.closest('.product-item');
      if (productCard) productImage = productCard.querySelector('img');
    } else if (imagenOrigen instanceof HTMLElement) {
      productImage = imagenOrigen;
    }

    if (productImage) {
      const productImageRect = productImage.getBoundingClientRect();
      const cartIconRect = cartIcon.getBoundingClientRect();

      const flyingImage = document.createElement('img');
      flyingImage.src = productImage.src;
      flyingImage.className = 'flying-image';

      // Estilos iniciales (posición de la imagen del producto)
      flyingImage.style.left = `${productImageRect.left}px`;
      flyingImage.style.top = `${productImageRect.top}px`;
      flyingImage.style.width = `${productImageRect.width}px`;
      flyingImage.style.height = `${productImageRect.height}px`;
      flyingImage.style.opacity = '1';

      document.body.appendChild(flyingImage);
      // Forzar reflow para transición
      flyingImage.getBoundingClientRect();

      // Estilos finales (posición del carrito)
      flyingImage.style.left = `${cartIconRect.left + 15}px`;
      flyingImage.style.top = `${cartIconRect.top + 15}px`;
      flyingImage.style.width = '0px';
      flyingImage.style.height = '0px';
      flyingImage.style.opacity = '0';

      // Limpiar después de la animación
      setTimeout(() => {
        flyingImage.remove();
        cartIcon.classList.add('cart-jiggle-animation');
        setTimeout(() => cartIcon.classList.remove('cart-jiggle-animation'), 500);
      }, 800);
    }
  }

  // --- Lógica del carrito (se ejecuta siempre) ---
  carrito.push(item);
  guardarCarrito();
  actualizarContador();

  // Si el panel del carrito está visible, actualízalo en tiempo real.
  const panel = document.getElementById('carrito-panel');
  if (panel && panel.classList.contains('visible')) {
    renderizarContenidoCarrito();
  }
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarContador() {
  const contador = document.getElementById("contador-carrito");
  if (contador) contador.textContent = carrito.length;
}

function toggleCarritoPanel() {
  let panel = document.getElementById('carrito-panel');
  
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'carrito-panel';
    document.body.appendChild(panel);
  }

  // Si el panel está visible, lo ocultamos. Si no, lo mostramos.
  if (panel.classList.contains('visible')) {
    panel.classList.remove('visible');
  } else {
    renderizarContenidoCarrito();
    panel.classList.add('visible');
  }
}

function renderizarContenidoCarrito() {
  let panel = document.getElementById('carrito-panel');
  if (!panel) return; // No hacer nada si el panel no existe

  const total = carrito.reduce((acc, item) => {
    const price = parseInt(String(item.precio).replace(/\$|\./g, ''), 10);
    return acc + (isNaN(price) ? 0 : price);
  }, 0);

  const formatoPrecio = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });

  panel.innerHTML = `
    <div class="carrito-header">
      <h3>Carrito</h3>
      <button onclick="toggleCarritoPanel()" class="cerrar-carrito">&times;</button>
    </div>
    <ul id="lista-carrito">
      ${carrito.length === 0 ? '<li style="text-align:center; color:#888;">Tu carrito está vacío.</li>' : ''}
      ${carrito.map((item, i) => `
        <li style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 10px;">
          <span style="flex-grow:1;">${item.nombre} <br> <strong style="color:#70f6f2;">${item.precio}</strong></span>
          <button onclick="eliminarDelCarrito(${i})" style="background:none; border:none; color:#ff278e; font-size:1.2rem; cursor:pointer; padding: 5px 10px;">X</button>
        </li>`).join('')}
    </ul>
    <div class="carrito-footer">
      <div style="display:flex; justify-content:space-between; font-size:1.2rem; margin-bottom:1rem;">
        <strong>Total:</strong>
        <strong>${formatoPrecio.format(total)}</strong>
      </div>
      <button onclick="pagarAhora()" class="cta" style="width:100%;" ${carrito.length === 0 ? 'disabled' : ''}>Pagar ahora</button>
    </div>
  `;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  actualizarContador();
  renderizarContenidoCarrito(); // Solo actualiza el contenido, no lo muestra/oculta
}

function pagarAhora() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const total = carrito.reduce((acc, item) => acc + parseInt(String(item.precio).replace(/\$|\./g, ''), 10), 0);
  const formatoPrecio = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });

  const mensaje = encodeURIComponent(
    "Hola quiero realizar el pago de estos productos:\n" +
    carrito.map(p => `- ${p.nombre} - ${p.precio}`).join('\n') +
    "\n\n¿Cuáles son los métodos de pago por favor?"
  );
  window.open(`https://wa.me/573151774787?text=${mensaje}`, '_blank');
}

// Función para la animación de scroll
function activarObservadorScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-anim');
        observer.unobserve(entry.target); // Opcional: deja de observar el elemento una vez animado para mejorar el rendimiento.
      }
    });
  });
  document.querySelectorAll('.hidden-anim').forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  // Obtener tipo de la URL, si no existe, usar 'camisetas' por defecto
  const tipoInicial = new URLSearchParams(window.location.search).get("tipo") || "camisetas";
  filtrarProductos(tipoInicial);

  // Marcar el botón de filtro activo correcto al cargar
  document.querySelectorAll('.filtros-container .cta').forEach(btn => {
    btn.classList.remove('filtro-activo');
  });
  const btnActivo = document.getElementById(`btn-${tipoInicial}`);
  if (btnActivo) {
    btnActivo.classList.add('filtro-activo');
  }


  const guardado = localStorage.getItem("carrito");
  if (guardado) {
    carrito = JSON.parse(guardado);
    actualizarContador();
  }

  const icono = document.getElementById("icono-carrito");
  if (icono) {
    icono.addEventListener("click", toggleCarritoPanel);
  }

  // Activar la animación de scroll para los elementos que la usen
  activarObservadorScroll();
});

// Nueva función para manejar la búsqueda
function buscarProductos() {
    const busqueda = document.getElementById('search-input').value;
    // Encontrar el filtro de categoría activo actualmente
    const botonActivo = document.querySelector('.filtros-container .cta.filtro-activo');
    const tipoActivo = botonActivo ? botonActivo.id.replace('btn-', '') : 'todos';
    const tipoFinal = tipoActivo === 'todos' ? '' : tipoActivo;
    filtrarProductos(tipoFinal, busqueda);
}

// Exponer al contexto global
window.filtrarProductos = filtrarProductos;
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.pagarAhora = pagarAhora;
window.buscarProductos = buscarProductos;
window.toggleCarritoPanel = toggleCarritoPanel;