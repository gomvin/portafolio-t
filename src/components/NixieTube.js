// components/NixieTube.js
import React from 'react';
import './NixieTube.css'; // Crea este archivo para los estilos de los tubos nixie

const NixieTube = ({ value }) => {
  return (
    <div className="nixie-tube">
      <span>{value}</span>
    </div>
  );
};

export default NixieTube;
