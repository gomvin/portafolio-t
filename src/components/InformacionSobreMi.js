// InformacionSobreMi.js
import React from 'react';

const InformacionSobreMi = () => {
  // Puedes modificar y agregar logros según sea necesario
  const logros = [
    {
      logro: 'Logro 1: React',
      imagen: 'logo192.png', // Imagen del logro
    },
    
    {
      logro: 'Logro 2: CSS',
      imagen: 'css.png', // Imagen del logro
    },
    {
      logro: 'Logro 3: HTML',
      imagen: 'html.png', // Imagen del logro
    },
    {
      logro: 'Logro 4: Next.js',
      imagen: 'nextjs.png', // Imagen del logro
    },
    {
      logro: 'Logro 5: JavaScript',
      imagen: 'javascript.png', // Imagen del logro
    },
  ];

  return (
    <div className="info-sobre-mi">
      <h2>Información sobre mí</h2>
      <div className="descripcion-container">
        <p>Soy una persona que posee de una gran creatividad y de entusiasmo</p>
        <p />y de entusiasmo para aprender todas las herramientas que requiera mi carrera.
        <p />Puedo manejarme en entornos de alta presion y puedo maniobrar muy bien en los trabajos grupales.
        <p />
        <img src="/taype.jpg" alt="Mi Foto" className="imagen-principal" />
      </div>
      <h3>Logros</h3>
      <ul>
        {logros.map((item, index) => (
          <li key={index}>
            <p />
           
            <img src={`/${item.imagen}`} alt={`Imagen Logro ${index + 1}`} className="imagen-logro" />
            <p />
            
            {item.logro}
          </li>
        ))}
      </ul>
      {/* Agrega más contenido según sea necesario */}
    </div>
  );
};

export default InformacionSobreMi;
