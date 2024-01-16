// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana12 = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 12 - DESARROLLO SERVER SIDE</h1>
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
          <strong>Arquitectura Cliente-Servidor:</strong>
          <br />
          <strong>Definición:</strong> La arquitectura cliente-servidor es fundamental en el desarrollo de aplicaciones web 
          <br />y se basa en la interacción entre un cliente y un servidor. 
        </p>
        <p>
          <strong>Arquitectura Multicapas - Multiples Paginas:</strong>
          <br />
          <strong>Definición:</strong> La arquitectura en capas divide sistemas complejos en partes o capas, como la capa de presentación,
          <br /> lógica de negocios y base de datos. 
          
        </p>
        <p>
          <strong>Servidores Web / Servicio Hosting / Cloud Hosting:</strong>
          <br />
          <strong>Definición:</strong> Los servidores web almacenan archivos de un sitio web y 
          <br />los transmiten a los usuarios mediante el protocolo HTTP.
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br />- Divide sistemas complejos en capas como presentación, lógica de negocios y base de datos.
          <br />- Divide la aplicación en capas independientes con puertos y adaptadores
          <br />- Almacenan y transmiten archivos de un sitio web utilizando servidores web
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        Se proporcionan definiciones claras y se destacan procedimientos esenciales.
        <br />Sin embargo, un análisis más detallado podría incluir ejemplos prácticos de implementación de estas arquitecturas.
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        <Link to={`/semana10`} style={{ marginRight: '10px', backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Anterior Semana</Link>
        <Link to={`/semana13`} style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Siguiente Semana</Link>
      </div>
    </div>
  );
};

export default Semana12;
