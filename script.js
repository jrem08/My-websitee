// Objeto con las traducciones
const translations = {
    es: {
      title: "Bienvenido a mi sitio web",
      description: "Este es un sitio de ejemplo que tiene soporte para varios idiomas."
    },
    en: {
      title: "Welcome to my website",
      description: "This is an example site that supports multiple languages."
    }
  };
  
  // Función para cambiar el idioma
  function changeLanguage(language) {
    // Verifica que el idioma esté en el objeto translations
    if (translations[language]) {
      document.getElementById("title").innerText = translations[language].title;
      document.getElementById("description").innerText = translations[language].description;
  
      // Cambiar el estilo de los botones para mostrar cuál está activo
      document.getElementById("btn-es").style.backgroundColor = language === 'es' ? '#0056b3' : '#007BFF';
      document.getElementById("btn-en").style.backgroundColor = language === 'en' ? '#0056b3' : '#007BFF';
    }
  }
  
  // Configuración inicial (cargar en español por defecto)
  window.onload = function() {
    changeLanguage('es');
  }