import React from 'react';    

const Gasto = ({gasto}) => (
  <li className="gastos">
    <p>
      {gasto.nombreGasto}
      <span>${gasto.cantidadGasto}</span>
    </p>

  </li>
);

export default Gasto;