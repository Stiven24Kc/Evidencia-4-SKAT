// 1. Agregar TailwindCSS desde CDN al <head>
const tailwindScript = document.createElement("script");
tailwindScript.src = "https://cdn.tailwindcss.com";

// 2. Una vez cargado Tailwind, construir el sitio
tailwindScript.onload = () => {
  document.body.className = "bg-white text-gray-800";

  // Header
  const header = document.createElement("header");
  header.className = "bg-black text-white";
  header.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-3xl font-bold">SKAT</h1>
      <nav class="flex space-x-6">
        <a href="index.html" class="hover:text-gray-400">Inicio</a>
        <a href="ropa.html" class="hover:text-gray-400">Buscar</a>
        <a href="suscripcion.html" class="hover:text-gray-400">suscribirse</a>
      </nav>
    </div>
  `;
  document.body.appendChild(header);

  // Hero Section
  const hero = document.createElement("section");
  hero.className = "bg-[url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center";
  hero.innerHTML = `
    <div class="bg-black bg-opacity-50 p-6 rounded">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Nueva Colección 2025</h2>
      <p class="text-lg mb-6">Moda urbana y estilo que te representa</p>
      <a href="ropa.html" class="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200">Explorar ahora</a>
    </div>
  `;
  document.body.appendChild(hero);

  // Productos
  const productos = document.createElement("section");
  productos.className = "py-16 px-4 max-w-7xl mx-auto";
  productos.innerHTML = `
    <h3 class="text-3xl font-bold text-center mb-12">Productos Destacados</h3>
    <div class="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-8">
      <div class="flex-1 min-w-[280px] max-w-[300px] border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img src="./IMG/chaqueta%20negra.jpeg" alt="Producto 1" class="w-full h-64 object-cover">
        <div class="p-4 flex flex-col">
          <h4 class="text-xl font-semibold">Chaqueta Negra</h4>
          <p class="text-gray-600 mt-2 flex-1">Perfecta para el invierno urbano.</p>
          <p class="text-lg font-bold mt-3">$79.99</p>
        </div>
      </div>
      <div class="flex-1 min-w-[280px] max-w-[300px] border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img src="./IMG/sudadera%20Skat.jpeg" alt="Producto 2" class="w-full h-64 object-cover">
        <div class="p-4 flex flex-col">
          <h4 class="text-xl font-semibold">Sudadera SKAT</h4>
          <p class="text-gray-600 mt-2 flex-1">Estilo casual y cómodo.</p>
          <p class="text-lg font-bold mt-3">$49.99</p>
        </div>
      </div>
      <div class="flex-1 min-w-[280px] max-w-[300px] border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=800&q=80" alt="Producto 3" class="w-full h-64 object-cover">
        <div class="p-4 flex flex-col">
          <h4 class="text-xl font-semibold">Gorra Logo SKAT</h4>
          <p class="text-gray-600 mt-2 flex-1">Accesorio esencial para cualquier outfit.</p>
          <p class="text-lg font-bold mt-3">$19.99</p>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(productos);

  // Footer
  const footer = document.createElement("footer");
  footer.className = "bg-black text-white py-6 mt-12";
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p>&copy; 2025 SKAT. Todos los derechos reservados.</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="https://www.instagram.com/" class="hover:text-gray-400">Instagram</a>
        <a href="https://es-la.facebook.com/" class="hover:text-gray-400">Facebook</a>
        <a href="https://www.wonder.legal/mx/modele/terminos-condiciones" class="hover:text-gray-400">Términos</a>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
};

// Agregar Tailwind al <head>
document.head.appendChild(tailwindScript);