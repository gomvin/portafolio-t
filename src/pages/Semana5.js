// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana5 = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 5 - REACT</h1>
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
          <strong>React :</strong>
          <br />
          <strong>Definición:</strong> Conjunto de herramientas esenciales para el desarrollo con React JS.
          
        </p>
        <p>
          <strong>Babel JS:</strong>
          <br />
          <strong>Definición:</strong> Compilador de JavaScript que transforma código moderno a una forma
          <br />que los navegadores y Node.js pueden entender.
        </p>
        <p>
          <strong>ESLint:</strong>
          <br />
          <strong>Definición:</strong> Herramienta para encontrar y corregir problemas en el código JavaScript.
        </p>
        <p>
          <strong>Vite:</strong>
          <br />
          <strong>Definición:</strong> Herramienta de desarrollo frontend agnóstica que simplifica la construcción de proyectos.
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br />- Comience por incluir tres scripts de la version 17, los dos primeros nos permiten
escribir codigo React
          <br />- Agregar la etiqueta div
          <br />- Agregar la etiqueta script
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        Evaluación positiva de cómo estas herramientas abordan desafíos en el desarrollo de aplicaciones React
        <br />Se destaca la importancia de herramientas clave como Babel, Parcel y Webpack.
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        <Link to={`/semana4`} style={{ marginRight: '10px', backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Anterior Semana</Link>
        <Link to={`/semana7`} style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Siguiente Semana</Link>
      </div>
    </div>
  );
};

export default Semana5;
