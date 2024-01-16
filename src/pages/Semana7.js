// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana7 = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 7 - JSX Y COMPONENTES EN REACT</h1>
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
          <strong>JSX (JavaScript Sintax Extension): </strong>
          <br />
          <strong>Definición:</strong> JSX es una extensión de sintaxis de JavaScript creada por Facebook para su uso con React.
          <br />Permite la creación de código reutilizable
        </p>
        <p>
          <strong>Programación basada en Componentes:</strong>
          <br />
          <strong>Definición:</strong> Es una rama de la ingeniería de software que se enfoca en descomponer
          <br />sistemas en componentes funcionales o lógicos con interfaces bien definidas para la comunicación entre ellos.
          
        </p>
        <p>
          <strong>Component Layout:</strong>
          <br />
          <strong>Definición:</strong> Un componente en React es código independiente y reutilizable, 
          <br />Cada componente se compone de código HTML, JavaScript y CSS.
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br />- Utilizar ReactDOM.render() para renderizar HTML en una página web.
          <br />- Escribir expresiones JSX dentro de llaves {} para ejecutar código JavaScript.
          <br />- Envolver múltiples líneas de HTML entre paréntesis para mantener la validez de JSX.
          <br />- Seguir las reglas XML para el cierre de elementos en JSX.
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        La introducción al concepto de programación basada en componentes y la práctica de dividir
        <br />sistemas en componentes reutilizables proporciona una visión valiosa de las mejores prácticas en el desarrollo de aplicaciones React.
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        <Link to={`/semana5`} style={{ marginRight: '10px', backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Anterior Semana</Link>
        <Link to={`/semana9`} style={{ backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Siguiente Semana</Link>
      </div>
    </div>
  );
};

export default Semana7;
