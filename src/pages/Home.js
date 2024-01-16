// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import NixieTube from '../components/NixieTube';
import './Home.css';
import './Portada.css';
import InformacionSobreMi from '../components/InformacionSobreMi';
import Conclusiones from '../components/Conclusiones';


const semanasData = [


    {
        numero: '1',
        titulo: 'Semana 1',
        descripcion: 'FUNDAMENTOS DE LA TECNOLOGIA WEB',
        imagen: '/semana1.jpg',
    },
    {
        numero: '2',
        titulo: 'Semana 2',
        descripcion: 'HTML CSS',
        imagen: '/semana2.jpg',
    },
    {
        numero: '3',
        titulo: 'Semana 3',
        descripcion: 'LIBRERIAS',
        imagen: '/semana3.jpg',
    },
    {
        numero: '4',
        titulo: 'Semana 4',
        descripcion: 'JAVASCRIPT Y ECMASCRIPT',
        imagen: '/semana4.jpg',
    },
    {
        numero: '5',
        titulo: 'Semana 5',
        descripcion: 'REACT',
        imagen: '/semana5.jpg',
    },
    {
        numero: '7',
        titulo: 'Semana 7',
        descripcion: 'JSX Y COMPONENTES EN REACT',
        imagen: '/semana7.jpg',
    },
    {
        numero: '9',
        titulo: 'Semana 9',
        descripcion: 'ENRUTADORES Y ESTILOS EN REACT',
        imagen: '/semana9.jpg',
    },
    {
        numero: '10',
        titulo: 'Semana 10',
        descripcion: 'NEXT JS Y SERVERLESS',
        imagen: '/Semana10.jpg',
    },
    {
        numero: '12',
        titulo: 'Semana 12',
        descripcion: 'DESARROLLO SERVER SIDE',
        imagen: '/semana12.jpg',
    },
    
    {
        numero: '13',
        titulo: 'Semana 13',
        descripcion: 'DESARROLLO BACKEND Y SPRING FRAMEWORK',
        imagen: '/semana13.jpg',

    },
];

const PanelSemanas = () => {
    return (
      <div className="semana-container">
        {semanasData.map((semana) => (
          <div className="semana-item" key={semana.numero}>
            <NixieTube value={semana.numero} />
            <h3>{semana.titulo}</h3>
            <p>{semana.descripcion}</p>
            <Link to={`/semana${semana.numero}`}>Ir a la Semana {semana.numero}</Link>
          </div>
        ))}
      </div>
    );
  };

const Home = () => {



    return (
        <div className="home-container">
            <div className="fondo-portafolio"></div>
            <div className="portada">
                <div className="fondo-portafolio-portada"></div>
                <div className="engranaje-container">
                    <div className="engranaje"></div>
                </div>
                <div className="reloj-container">
                    <div className="reloj"></div>
                </div>
                <h1 className="parpadeante">KEVIN P.T.S.</h1>
                <div className="imagen-container">
                    <img className="imagen" src="/kevin.jpg" alt="Kevin" />
                </div>
            </div>
            <h2>Bienvenido a mi Portafolio</h2>
            <PanelSemanas />

            <InformacionSobreMi />
            <Conclusiones />
            
            
            

        </div>

        
    );
};

export default Home;