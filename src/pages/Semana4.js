// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana4 = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 4 - JAVASCRIPT Y ECMASCRIPT</h1>
        </div>
        <div className="portada-numeros">
          <NixieDisplay value={randomValue.toString()} />
          {/* Ajusta el estilo del botón y acércalo a los números random */}
          <div className="home-button" style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '40px', marginTop: '0px' }}>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <div className="semana-item codigo-animado">
        <NixieTube />
        <h3>Definiciones</h3>
        <p>
          <strong>JavaScript:</strong>
          <br />
          <strong>Definición:</strong> Lenguaje de programación script dinámico, multi-paradigma, basado en prototipos,
          <br />que soporta estilos de programación funcional, orientada a objetos e imperativa.
        </p>
        <p>
          <strong>ECMAScript:</strong>
          <br />
          <strong>Definición:</strong> Estándar de JavaScript. ECMAScript 2015 (también conocido como ES6)
          <br />es una versión importante del estándar, y las versiones posteriores se lanzan anualmente.
        </p>
        <p>
          <strong>Node.js:</strong>
          <br />
          <strong>Definición:</strong> Entorno de ejecución para JavaScript construido con el motor V8 de Chrome.
          <br />Permite ejecutar JavaScript en el servidor y sigue algunas especificaciones de CommonJS.
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br />- Lenguaje dinámico y versátil que ha evolucionado más allá de su uso inicial en la web.
          <br />- Estándar que rige la evolución de JavaScript, con versiones anuales desde ECMAScript.
          <br />- Entorno de ejecución para JavaScript en el servidor
          <br />- Sintaxis influenciada por varios lenguajes
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        Se genera versatilidad para aplicaciones más allá de la web y 
        <br />Flexibilidad y familiaridad con otros lenguajes.
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        <Link to={`/semana3`} style={{ marginRight: '10px', backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Anterior Semana</Link>
        <Link to={`/semana5`} style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Siguiente Semana</Link>
      </div>
    </div>
  );
};

export default Semana4;
