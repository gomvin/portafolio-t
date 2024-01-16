// Conclusiones.js
import React from 'react';

const Conclusiones = () => {
  // Puedes modificar y agregar bibliografía según sea necesario
  const bibliografia = [
    'Kent C. Dodds. (2021). "JavaScript & React Testing Library - The Complete Guide." En línea.',
    'Kyle Simpson. (2017). "You Don Know JS: Scope & Closures." O Reilly Media.',
    'Martin Fowler. (2002). "Patterns of Enterprise Application Architecture." Addison-Wesley.',
    'Chris Richardson. (2018). "Microservices Patterns: With examples in Java." Manning Publications.',
    'Craig Walls. (2016). "Spring in Action." Manning Publications.',
    'Sam Newman. (2015). "Building Microservices: Designing Fine-Grained Systems." O Reilly Media.',
    'Greg L. Turnquist. (2019). "Spring Boot: Up and Running: Building Cloud Native Java Microservices." O Reilly Media.',
  ];

  return (
    <div className="conclusiones-container">
      <h2>Información Final</h2>
      <div className="conclusion-container">
        <h3>Conclusión</h3>
        <p>La exploración de temas como React, herramientas de desarrollo,
          <p /> arquitecturas de aplicaciones web y el framework Spring revela la diversidad y 
          <p /> complejidad del desarrollo de software en la actualidad. Cada área abordada tiene sus propias
          <p /> características distintivas, pero algunos patrones y principios comunes subyacen en todo el espectro.</p>
      </div>
      <div className="reflexion-container">
        <h3>Reflexión</h3>
        <p>A lo largo de la exploración de temas que abarcan desde React y herramientas de desarrollo,
           <p />hasta arquitecturas de aplicaciones web y el framework Spring, se ha obtenido una visión integral
          <p />del panorama actual del desarrollo de software. Esta experiencia ha proporcionado una serie de aprendizajes y enfoques</p>
          < p/> como Aprendizajes en React y Desarrollo Frontend, Herramientas de Desarrollo y Eficiencia, Arquitecturas de Aplicaciones Web, 
          < p/>Spring Framework y Desarrollo Backend, Desarrollo de API REST y Spring Boot, etc.
          
          <p />El aprendizaje se ha llevado a cabo a través de la lectura de información detallada, 
          <p />documentación oficial y ejemplos prácticos. 
      </div>
      <div className="bibliografia-container">
        <h3>Bibliografía</h3>
        <ul>
          {bibliografia.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Agrega más contenido según sea necesario */}
    </div>
  );
};

export default Conclusiones;
