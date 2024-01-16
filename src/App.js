// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Semana from './pages/Semana';
import Semana2 from './pages/Semana2';
import Semana3 from './pages/Semana3';
import Semana4 from './pages/Semana4';
import Semana5 from './pages/Semana5';
import Semana7 from './pages/Semana7';
import Semana9 from './pages/Semana9';
import Semana10 from './pages/Semana10';
import Semana12 from './pages/Semana12';
import Semana13 from './pages/Semana13';
import Informacion from './pages/Informacion';
import Trabajos from './pages/Trabajos';
import Conclusion from './pages/Conclusion';
import './styles/App.css'; // Crear este archivo para estilos globales

// ... (importaciones)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Utiliza el componente Semana y pasa la semana como parámetro */}
        <Route path="/semana1" element={<Semana semana={1} />} />
        <Route path="/semana2" element={<Semana2 semana={2} />} />
        <Route path="/semana3" element={<Semana3 semana={3} />} />
        <Route path="/semana4" element={<Semana4 semana={4} />} />
        <Route path="/semana5" element={<Semana5 semana={5} />} />
        <Route path="/semana7" element={<Semana7 semana={7} />} />
        <Route path="/semana9" element={<Semana9 semana={9} />} />
        <Route path="/semana10" element={<Semana10 semana={10} />} />
        <Route path="/semana12" element={<Semana12 semana={12} />} />
        <Route path="/semana13" element={<Semana13 semana={13} />} />
        {/* Agrega rutas para las demás páginas */}
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/trabajos" element={<Trabajos />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </Router>
  );
};

export default App;

