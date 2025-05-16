import React, { useState } from 'react';
import "../styles/itemCount.css"


const ItemCount = ({ stock ,setCart,add }) => {
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

  const addQuantity=()=>{
    add(contador)
    disabled()
  }

  const disabled=()=>{
    setCart(false)
  }


  return (
    <div className="item-count">
      <button className="count-btn" onClick={restar}>−</button>
      <span className="count-value">{contador}</span>
      <button className="count-btn" onClick={sumar}>+</button>
      <div className='to-cart-div'>
          <button className="addD-to-cart-btn" onClick={addQuantity}>Agregar al carrito</button>
       </div>
    
    </div>
  );
};

export default ItemCount;
