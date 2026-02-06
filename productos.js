const productosJSON = `[
  {
    "id": "TSH01",
    "nombre": "SauceFest",
    "descripcion": "Recordatori del festival de la SauceGang.",
    "precioBase": 19.95,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro", "mostaza"],
    "imagenes": {
      "blanco": "img/saucefest.png",
      "negro": "img/saucefest_black.png",
      "mostaza": "img/saucefest_mostaza.png"
    },
    "tags": ["nuevo"]
  },
  {
    "id": "TSH02",
    "nombre": "DonKbron WorldTour Hoodie",
    "descripcion": "Un gran record de la gira mundial de DonKbron.",
    "precioBase": 21.50,
    "tallas": ["S", "M", "L", "XL", "XXL"],
    "colores": ["gris", "negro"],
    "imagenes": {
      "gris": "img/hoodieWhite.png",
      "negro": "img/hoodieWhite_Black.png"
    },
    "tags": ["retro"]
  },
  {
    "id": "TSH03",
    "nombre": "Coche Archivado",
    "descripcion": "Un coche que solo conocen los expertos archivados.",
    "precioBase": 22.90,
    "tallas": ["M", "L", "XL"],
    "colores": ["azul", "negro"],
    "imagenes": {
      "azul": "img/coche.png",
      "negro": "img/coche_BLACK.png"
    },
    "tags": ["edicion-especial"]
  },
  {
    "id": "TSH04",
    "nombre": "Anime Sauce",
    "descripcion": "Eladio no distingue de cultures.",
    "precioBase": 24.00,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro"],
    "imagenes": {
      "blanco": "img/archivosEladioT-shirt.png",
      "negro": "img/archivosEladioT-shirt_BLACK.png"
    },
    "tags": ["premium"]
  }
]
`;


const productos = JSON.parse(productosJSON);

function createArticle(producto) {
  const article = document.createElement("article");
  article.id = producto.id;
  return article;
}

function createImagen(producto, color) {
  const img = document.createElement("img");
  img.src = producto.imagenes[color];
  img.alt = producto.nombre + " - " + color;
  return img;
}

function createTitle(producto) {
  const h2 = document.createElement("h2");
  h2.textContent = producto.nombre;
  return h2;
}

function createDescripcion(producto) {
  const p = document.createElement("p");
  p.textContent = producto.descripcion;
  return p;
}

function createTalles(producto) {
  const select = document.createElement("select");
  select.name = "talla";
  
  producto.tallas.forEach(talla => {
    const option = document.createElement("option");
    option.value = talla;
    option.textContent = talla;
    select.appendChild(option);
  });
  
  return select;
}

function createColores(producto) {
  const select = document.createElement("select");
  select.name = "color";
  
  producto.colores.forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    select.appendChild(option);
  });
  
  return select;
}

function createButton(producto) {
  const button = document.createElement("button");
  button.textContent = "Añadir al carrito";
  button.addEventListener("click", () => {
    alert(`Producto añadido al carrito: ${producto.nombre}`);
  });
  
  return button;
}

function appendElements(article, elements) {
  elements.forEach(el => article.appendChild(el));
}

function muestraProductos() {
  const container = document.getElementById("productos-container");

  productos.forEach(producto => {
    const article = createArticle(producto);
    
    appendElements(article, [
      createImagen(producto, producto.colores[0]),
      createTitle(producto),
      createDescripcion(producto),
      createTalles(producto),
      createColores(producto),
      createButton(producto)
    ]);
    
    container.appendChild(article);
  });
}

function init() {
  muestraProductos();
}
