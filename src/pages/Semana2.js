// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana2 = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 2 - HTML CSS</h1>
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
          <strong>Open Web Platform:</strong>
          <br />
          <strong>Definición:</strong> Colección de tecnologías abiertas y estándares desarrollados por organismos como W3C,
          <br />Unicode Consortium, Internet Engineering Task Force y ECMA International.
          
        </p>
        <p>
          <strong>HTML (HyperText Markup Language):</strong>
          <br />
          <strong>Definición:</strong> Lenguaje de marcado que define la semántica y estructura del contenido de las páginas web.
          <br />Se basa en etiquetas y se guarda en archivos con extensiones .html o .htm.
          
        </p>
        <p>
          <strong>XML (Lenguaje Marcado eXtensible):</strong>
          <br />
          <strong>Definición:</strong> Estándar utilizado para almacenar e intercambiar información estructurada entre diferentes plataformas.
          <br />Define la estructura y el significado de los datos.
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br /> Comprende la organización de elementos HTML y la representación del contenido en el DOM.
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        Open Web Platform y sus tecnologías, como HTML y XML, ofrecen un marco robusto para el desarrollo web, 
        <br />impulsado por principios de apertura y colaboración.
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        <Link to={`/semana1`} style={{ marginRight: '10px', backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Anterior Semana</Link>
        <Link to={`/semana3`} style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Siguiente Semana</Link>
      </div>
    </div>
  );
};

export default Semana2;
