// Modificación en el componente NixieDisplay.js

import React from 'react';

const NixieDisplay = ({ value }) => {
  // Asegurarse de que el primer dígito sea 0 o 1
  const primerDigito = Math.random() < 0.5 ? '0' : '1';

  // El segundo dígito es un punto
  const segundoDigito = '.';

  // El resto de los dígitos son aleatorios
  const numerosAleatorios = Math.floor(Math.random() * 100000000).toString();

  return (
    <div className="nixie-display">
      <span className="nixie-digit">{primerDigito}</span>
      <span className="nixie-digit">{segundoDigito}</span>
      {numerosAleatorios.split('').map((digito, index) => (
        <span key={index} className="nixie-digit">
          {digito}
        </span>
      ))}
    </div>
  );
};

export default NixieDisplay;
