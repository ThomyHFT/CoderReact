import React, { useContext, useState, useRef, useEffect } from 'react';
import { FaOpencart } from "react-icons/fa";
import CartDeploy from './CartDeploy';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const [deploy, setDeploy] = useState(false);
  const { cart } = useContext(CartContext);
  const cartRef = useRef(null);
  const timeoutRef = useRef(null); 

  const deploying = () => {
    setDeploy(prev => !prev);
  };

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setDeploy(false);
      }
    };

    if (deploy) {
      document.addEventListener("mousedown", handleClickOutside);


      timeoutRef.current = setTimeout(() => {
        setDeploy(false);
      }, 5000);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);

  
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [deploy]);

  return (
    <div className='cart' ref={cartRef}>
      <div>
        <button onClick={deploying} className='cartWidget'>
          <FaOpencart size={28} color='#007A78' />
        </button>
        {cart.length === 0 ? "" :
          <span style={{ color: "#e07a6f", fontWeight: "bold" }}>{cart.length}</span>
        }
      </div>
      {deploy &&
        <div className="cart-deploy">
          <CartDeploy />
        </div>
      }
    </div>
  );
};

export default Cart;
