document.getElementById('app').innerHTML = `
  <div class="max-w-6xl mx-auto px-4 py-12">
    <header class="flex justify-between items-center mb-12">
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
          <span class="text-white font-bold">R</span>
        </div>
        <div>
          <h1 class="text-xl font-bold text-gray-900">Resonancias</h1>
          <p class="text-xs text-purple-600">Maestrías Cristalinas</p>
        </div>
      </div>
      <nav class="hidden md:flex space-x-6">
        <a href="#inicio" class="text-gray-700 hover:text-purple-600 font-medium">Inicio</a>
        <a href="#formacion" class="text-gray-700 hover:text-purple-600 font-medium">Formación</a>
        <a href="#contacto" class="text-gray-700 hover:text-purple-600 font-medium">Contacto</a>
      </nav>
    </header>

    <section id="inicio" class="text-center py-16">
      <div class="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-8">
        🌟 Todo es vibración de amor
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Maestrías
        <span class="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Cristalinas
        </span>
      </h2>
      <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Un camino de transformación a través del lenguaje sagrado de los Cristales. 
        Formación completa para convertirte en un maestro sanador energético.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button onclick="document.getElementById('contacto').scrollIntoView({behavior: 'smooth'})"
          class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg">
          Clase Gratuita
        </button>
        <button onclick="document.getElementById('formacion').scrollIntoView({behavior: 'smooth'})"
          class="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white">
          Ver Programas
        </button>
      </div>
    </section>

    <section id="formacion" class="py-16">
      <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">Nuestros Programas</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-2xl shadow-lg">
          <h4 class="text-xl font-bold text-gray-900 mb-3">Iniciación Cristalina</h4>
          <p class="text-gray-600 mb-4">Descubre los fundamentos de la sanación con cristales.</p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center space-x-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>3 módulos</span>
            </li>
            <li class="flex items-center space-x-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>Meditaciones guiadas</span>
            </li>
            <li class="flex items-center space-x-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>Certificado digital</span>
            </li>
          </ul>
          <button class="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold">
            Inscribirse
          </button>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-lg">
          <h4 class="text-xl font-bold text-gray-900 mb-3">Despertar Energético</h4>
          <p class="text-gray-600 mb-4">Profundiza en técnicas avanzadas de canalización.</p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center space-x-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>4 módulos</span>
            </li>
            <li class="flex items-center space-x-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>Clases en vivo</span>
            </li>
            <li class="flex items-center space-x-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>Comunidad privada</span>
            </li>
          </ul>
          <button class="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold">
            Inscribirse
          </button>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-lg">
          <h4 class="text-xl font-bold text-gray-900 mb-3">Maestría Superior</h4>
          <p class="text-gray-600 mb-4">Conviértete en un maestro sanador certificado.</p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center space-x-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>6 módulos + proyecto</span>
            </li>
            <li class="flex items-center space-x-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>Mentorías individuales</span>
            </li>
            <li class="flex items-center space-x-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>Certificación oficial</span>
            </li>
          </ul>
          <button class="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold">
            Inscribirse
          </button>
        </div>
      </div>
    </section>

    <section id="contacto" class="py-16">
      <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Accede a tu Clase Gratuita</h3>
        <form class="space-y-4">
          <input type="text" placeholder="Nombre completo" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required>
          <input type="email" placeholder="Correo electrónico" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required>
          <input type="tel" placeholder="WhatsApp (opcional)" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
          <button type="submit"
            class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg">
            Acceder a Clase Gratuita
          </button>
        </form>
        <p class="text-xs text-gray-500 text-center mt-4">
          Tu información está segura. Nunca compartiremos tus datos.
        </p>
      </div>
    </section>

    <footer class="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
      <p>&copy; 2024 Resonancias en salud y vida®. Todo es vibración de amor.</p>
    </footer>
  </div>

`;
