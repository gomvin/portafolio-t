// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 1 - FUNDAMENTOS DE LA TECNOLOGIA WEB</h1>
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
          <strong>Tecnologías de Desarrollo de Software:</strong>
          <br />
          <strong>Definición:</strong> Conjunto de herramientas y enfoques utilizados para crear software.
          <br />adaptadas a las demandas del mercado y la evolución digital de los procesos empresariales.
          
        </p>
        <p>
          <strong>Tecnologías Web:</strong>
          <br />
          <strong>Definición:</strong> Conjunto de tecnologías centradas en el desarrollo de software web,
          <br />incluyendo lenguajes de marcado, estilos, protocolos, y programación.
          
        </p>
        <p>
          <strong>HTML (HyperText Markup Language):</strong>
          <br />
          <strong>Definición:</strong> Lenguaje utilizado para describir y definir el contenido de una página 
          <br />web en un formato bien estructurado.
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br />- Identificación del número IP del equipo: ipconfig
          <br />- Comprobación de la conectividad del servidor: ping 192.168.1.1
          <br />- Verificación del recorrido de servidores: tracert youtube.com
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        las tecnologías de desarrollo de software abarcan una amplia gama de herramientas y enfoques, 
        <br />cada uno con sus ventajas y desafíos.
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        
        <Link to={`/semana2`} style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Siguiente Semana</Link>
      </div>
    </div>
  );
};

export default Semana;
