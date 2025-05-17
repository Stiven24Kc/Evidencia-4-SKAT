const app = document.getElementById('app');

// Crear y añadir elementos al DOM
function crearSuscripcion() {
  // Header
  const header = document.createElement('h1');
  header.textContent = 'SKAT - Suscripción';
  header.className = 'text-3xl font-bold mb-6 text-center';

  // Formulario
  const form = document.createElement('form');
  form.className = 'space-y-4';

  const campos = [
    { label: 'Nombre completo', id: 'nombre', type: 'text', required: true },
    { label: 'Correo electrónico', id: 'email', type: 'email', required: true },
    { label: 'Teléfono', id: 'telefono', type: 'tel', required: false }
  ];

  campos.forEach(({ label, id, type, required }) => {
    const div = document.createElement('div');

    const labelEl = document.createElement('label');
    labelEl.setAttribute('for', id);
    labelEl.textContent = label;
    labelEl.className = 'block font-medium mb-1';

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    input.required = required;
    input.className = 'w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500';

    div.appendChild(labelEl);
    div.appendChild(input);
    form.appendChild(div);
  });

  const boton = document.createElement('button');
  boton.type = 'submit';
  boton.textContent = 'Suscribirse';
  boton.className = 'bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition';

  form.appendChild(boton);

  // Mensaje de éxito
  const mensaje = document.createElement('div');
  mensaje.id = 'mensaje';
  mensaje.className = 'mt-6 text-green-600 font-semibold hidden';

  // Datos guardados
  const seccionDatos = document.createElement('section');
  seccionDatos.id = 'datosGuardados';
  seccionDatos.className = 'mt-8';

  const tituloDatos = document.createElement('h3');
  tituloDatos.textContent = 'Datos guardados';
  tituloDatos.className = 'text-xl font-semibold mb-2';

  const datosJSON = document.createElement('pre');
  datosJSON.id = 'datosJSON';
  datosJSON.className = 'bg-gray-100 p-4 rounded text-sm overflow-auto';

  seccionDatos.appendChild(tituloDatos);
  seccionDatos.appendChild(datosJSON);

  app.appendChild(header);
  app.appendChild(form);
  app.appendChild(mensaje);
  app.appendChild(seccionDatos);

  // Función para mostrar datos guardados
  function mostrarDatos() {
    const datos = localStorage.getItem('suscriptor');
    if (datos) {
      datosJSON.textContent = datos;
      seccionDatos.style.display = 'block';
    } else {
      datosJSON.textContent = '';
      seccionDatos.style.display = 'none';
    }
  }

  mostrarDatos();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const telefono = form.telefono.value.trim();

    if (!nombre || !email) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }

    const suscriptor = { nombre, email, telefono };

    localStorage.setItem('suscriptor', JSON.stringify(suscriptor));

    mensaje.textContent = '¡Gracias por suscribirte!';
    mensaje.classList.remove('hidden');

    mostrarDatos();

    form.reset();
  });
}

// Inicializar app
crearSuscripcion();