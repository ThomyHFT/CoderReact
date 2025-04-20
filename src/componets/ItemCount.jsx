import React, { useState } from 'react';
import "../styles/itemCount.css"


const ItemCount = ({ stock = 10 }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };


  return (
    <div className="item-count">
      <button className="count-btn" onClick={restar}>−</button>
      <span className="count-value">{contador}</span>
      <button className="count-btn" onClick={sumar}>+</button>
    
    </div>
  );
};

export default ItemCount;
