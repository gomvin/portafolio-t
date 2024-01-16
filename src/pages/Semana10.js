// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana10 = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 10 - NEXT JS Y SERVERLESS</h1>
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
          <strong>SSR (Server Side Rendering):</strong>
          <br />
          <strong>Definición:</strong> Acronimo de Server Side Rendering.
          <br />
          <strong>Uso:</strong> Técnica para renderizar una aplicación de página única (SPA) en el servidor y enviarla al cliente.
        </p>
        <p>
          <strong>Server Side Rendering:</strong>
          <br />
          <strong>Definición:</strong> Técnica que consiste en renderizar una SPA en el 
          <br />servidor y enviarla al cliente. La SPA toma el control después de descargar e interpretar su código JavaScript.
          <br />
          <strong>Para qué sirve:</strong> Mejora el SEO y acelera la carga inicial del sitio.
        </p>
        <p>
          <strong>Next.js:</strong>
          <br />
          <strong>Definición:</strong> Framework de React fácil de usar y escalable que 
          <br />ofrece características mejoradas en velocidad de carga, experiencia del usuario, SSR y pre-renderizado estático.
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br />- Ejecutar npx create-next-app y proporcionar un nombre de proyecto.
          <br />- Navegar al directorio del proyecto (cd nombreProyecto).
          <br />- Instalar dependencias (npm install).
          <br />- Iniciar la aplicación (npm run dev).
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        la combinación de Server Side Rendering, React Server Components y Serverless 
        <br />Computing proporciona un enfoque integral para mejorar la eficiencia y rendimiento en el desarrollo web.
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        <Link to={`/semana9`} style={{ marginRight: '10px', backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Anterior Semana</Link>
        <Link to={`/semana12`} style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Siguiente Semana</Link>
      </div>
    </div>
  );
};

export default Semana10;
