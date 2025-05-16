import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from "react-router-dom"

const CartDeploy = () => {
    const {clearCart, cart}=useContext(CartContext)

    
  return (
    <div>
      <div className='products-deploy'>
        {cart.length===0 ? (<p>Tu carrito esta vacio</p>):
            cart.slice(0, 3).map(prod=>(
                <div key={prod.id}>
                    <p>{prod.name}</p>
                    <p>Cantidad: {prod.quantity}</p>
                </div>
            )
            )
            
        }
      </div>
      <div className='deploy-buttons'>
            <Link className="addD-to-cart-btn" to={`/cart`}>
            Ir al carrito
            </Link>
            
            <button onClick={clearCart}>Vaciar Carrito</button>
      </div>
    </div>
  )
}

export default CartDeploy
