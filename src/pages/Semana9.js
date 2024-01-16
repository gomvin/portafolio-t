// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana9 = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 9 - ENRUTADORES Y ESTILOS EN REACT</h1>
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
          <strong>Estilos CSS en React:</strong>
          <br />
          <strong>Definición:</strong> Los estilos se pueden definir en archivos CSS separados 
          <br />y se pueden utilizar archivos de módulos CSS con la extensión *.module.css
        </p>
        <p>
          <strong>Librerías de Estilos en Componentes:</strong>
          <br />
          <strong>Definición:</strong> Algunas librerías CSS recodifican sus estilos en componentes React,
          <br />lo que implica la aplicación de estilos mediante componentes específicos.
          
        </p>
        <p>
          <strong>Librería Tailwind CSS en React:</strong>
          <br />
          <strong>Definición:</strong> Se instala Tailwind CSS y sus dependencias a través de npm
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br />- Instalar React Router utilizando los comandos NPM mencionados.
          <br />- Organizar la estructura del directorio, creando un directorio "pages"
          <br />- Crear componentes de navegación y páginas
          <br />- Aplicar estilos en React utilizando diferentes métodos
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        Se destaca la introducción a librerías de estilos en componentes, específicamente Tailwind CSS,
        <br />ofreciendo una alternativa moderna para la aplicación de estilos en proyectos React.
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        <Link to={`/semana7`} style={{ marginRight: '10px', backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Anterior Semana</Link>
        <Link to={`/semana10`} style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Siguiente Semana</Link>
      </div>
    </div>
  );
};

export default Semana9;
