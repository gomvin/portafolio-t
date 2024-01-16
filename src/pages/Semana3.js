// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana3 = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 3 - LIBRERIAS</h1>
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
          <strong>Árbol DOM (Document Object Model):</strong>
          <br />
          <strong>Definición:</strong> Interfaz para documentos HTML y XML representada como un árbol de elementos.
          <br />Permite la lectura y manipulación del contenido, estructura y estilos de la página
        </p>
        <p>
          <strong>Árbol de Nodos (Node Tree):</strong>
          <br />
          <strong>Definición:</strong> Estructura del documento convertida por el DOM en un modelo de objeto.
          <br />La raíz es la etiqueta, las ramas son elementos anidados y las hojas son el contenido de esos elementos.
          
        </p>
        <p>
          <strong>BOM (Browser Object Model):</strong>
          <br />
          <strong>Definición:</strong> API de la ventana gráfica del navegador, estructurada jerárquicamente 
          <br />como un árbol con el objeto global window como raíz. 
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br />- inicia la manipulación del documento o los elementos de la página.
          <br />- El DOM proporciona propiedades y métodos para acceder y modificar elementos.
          <br />- Inicia con la solicitud HTML al servidor.
          <br />- Creación del DOM, solicitudes de recursos externos.
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        DOM y el ciclo de vida de una página web son conceptos fundamentales
        <br />para comprender y optimizar la interacción y representación de contenido en la web. 
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        <Link to={`/semana2`} style={{ marginRight: '10px', backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Anterior Semana</Link>
        <Link to={`/semana4`} style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Siguiente Semana</Link>
      </div>
    </div>
  );
};

export default Semana3;
