// pages/Semana10.js
import React from 'react';
import NixieTube from '../components/NixieTube';
import NixieDisplay from '../components/NixieDisplay';
import { Link } from 'react-router-dom';
import './Semana.css';  // Importa un archivo CSS para los estilos de la página

const Semana13 = () => {
  const randomValue = Math.floor(Math.random() * 100000000);

  return (
    <div className="semana-container" style={{ backgroundImage: 'url(/fondo_codigo.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="portada">
        <div className="portada-text">
          <h1>SEMANA 13 - DESARROLLO BACKEND Y SPRING FRAMEWORK</h1>
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
          <strong>Spring Framework:</strong>
          <br />
          <strong>Definición:</strong> Spring es un sólido framework para el desarrollo de aplicaciones empresariales
          <br />en Java, creado para estandarizar y resolver problemas en la programación. 
        </p>
        <p>
          <strong>Inversión de Control (IoC):</strong>
          <br />
          <strong>Definición:</strong> Cambio en el flujo de ejecución y vida de los objetos en comparación
          <br />con la programación tradicional. 
        </p>
        <p>
          <strong>Spring Boot:</strong>
          <br />
          <strong>Definición:</strong> Herramienta que simplifica la creación de proyectos con Spring Framework
          <br />eliminando la complejidad de configuraciones e integrando un servidor.
        </p>
        
      </div>
      
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Procedimientos y Resultados</h3>
        <p>
          <br />- IoC y DI en Spring representan un cambio en la forma de controlar la aplicación
          <br />- NEl contenedor de IoC en Spring (Spring Container) se encarga de la inyección de dependencia
          <br />- Los módulos de Spring proporcionan funcionalidades específicas
          <br />- Herramienta que simplifica la configuración y despliegue de proyectos Spring
          
        </p>
        
      </div>
      {/* Agrega los demás temas de manera similar */}
      {/* ... */}
      <div className="semana-item codigo-animado">
        <NixieTube/>
        <h3>Apreciación Crítica</h3>
        <p>
        Podría ser beneficioso incluir ejemplos prácticos adicionales
        <br />y considerar la inclusión de las últimas tendencias y actualizaciones en el desarrollo con Spring Framework.
          {/* ... Agrega el resto de la apreciación crítica */}
        </p>
      </div>

      {/* Botones de navegación con margen y color naranja */}
      <div className="botones-navegacion" style={{marginTop: '20px'}}>
        <Link to={`/semana12`} style={{ marginRight: '10px', backgroundColor: '#FFA500', padding: '10px', borderRadius: '5px' }}>Anterior Semana</Link>
        
      </div>
    </div>
  );
};

export default Semana13;
