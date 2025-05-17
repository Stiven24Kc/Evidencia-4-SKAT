const productos = [
  {
    nombre: "Chaqueta Negra",
    descripcion: "Perfecta para el invierno urbano.",
    precio: "$79.99",
    imagen: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b715929539261c9286ba438d356fc03e.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
  },
  {
    nombre: "Sudadera SKAT",
    descripcion: "Estilo casual y cómodo.",
    precio: "$49.99",
    imagen: "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87093289_35_B.jpg?imwidth=2048&imdensity=1&ts=1734608065097"
  },
  {
    nombre: "Gorra Logo SKAT",
    descripcion: "Accesorio esencial para cualquier outfit.",
    precio: "$19.99",
    imagen: "https://perucho.pe/wp-content/uploads/2024/04/1-NEGRO-REAL.jpg"
  },
  {
    nombre: "Panalon diseño urbano",
    descripcion: "Perfecta para el invierno urbano.",
    precio: "$58.99",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8P6gG2Ft8_NLSuoiXM21IyIooLWEdJeqcUxR7mHr4NYzYK9nOeQPoXP8H6ywnNeQIs0&usqp=CAU"
  },
  {
    nombre: "Polo deportivo",
    descripcion: "comodo y transpirable.",
    precio: "$10.99",
    imagen: "https://oechsle.vtexassets.com/arquivos/ids/17837706/2605569.jpg?v=638507443637370000"
  },
  {
    nombre: "Boxer SKAT",
    descripcion: "Con algodon de alta calidad.",
    precio: "$5.99",
    imagen: "https://corseteriamagda.com/6280-medium_default/boxer-microfibra-corto-durafit-confort-total.jpg"
  }
];

function mostrarProductos(lista) {
  const container = document.getElementById('productosContainer');
  container.innerHTML = '';

  if (lista.length === 0) {
    container.innerHTML = '<p class="text-gray-600 col-span-full">No se encontraron productos.</p>';
    return;
  }

  lista.forEach(producto => {
    const card = `
      <div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-64 object-cover">
        <div class="p-4">
          <h4 class="text-xl font-semibold">${producto.nombre}</h4>
          <p class="text-gray-600 mt-2">${producto.descripcion}</p>
          <p class="text-lg font-bold mt-3">${producto.precio}</p>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function mostrarProductos(lista) {
  const container = document.getElementById('productosContainer');
  container.innerHTML = '';

  if (lista.length === 0) {
    container.innerHTML = '<p class="text-gray-600 col-span-full">No se encontraron productos.</p>';
    return;
  }

  lista.forEach(producto => {
    const card = `
      <div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-64 object-cover">
        <div class="p-4">
          <h4 class="text-xl font-semibold">${producto.nombre}</h4>
          <p class="text-gray-600 mt-2">${producto.descripcion}</p>
          <p class="text-lg font-bold mt-3">${producto.precio}</p>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function filtrarProductos() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(query)
  );
  mostrarProductos(filtrados);
}

function crearFooter() {
  const footer = document.createElement('footer');
  footer.className = 'bg-black text-white py-6 mt-12';
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p>&copy; 2025 SKAT. Todos los derechos reservados.</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-gray-400">Instagram</a>
        <a href="#" class="hover:text-gray-400">Facebook</a>
        <a href="#" class="hover:text-gray-400">Términos</a>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarProductos(productos);
  crearFooter();
});