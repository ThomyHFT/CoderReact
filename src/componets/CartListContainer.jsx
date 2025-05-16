import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import CartList from './CartList'
import {Link} from "react-router-dom"

const CartListContainer = ({ seccion }) => {
  const { cart, clearCart, totalCart } = useContext(CartContext)

  const clearAll = () => {
    clearCart()
  }

  useEffect(() => {
    if (seccion) {
      const sectionElement = document.querySelector(seccion)
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [seccion])

  return (
    <div className="cart-list-container">
      <h1 className="cart-list-title">Tu Carrito de Compras</h1>

      <CartList cart={cart} />
      {cart.length>0 &&
        <p>Total: ${totalCart()}</p>
      }
      <div style={{display:"flex"}}>
        {cart.length>0?
          <Link className="purchase-cart-btn" to={`/checkout`}>Comprar </Link> :""
        }
        <button onClick={clearAll} className="clear-cart-btn">Vaciar Carrito</button>
      </div>
      
    </div>
  )
}

export default CartListContainer
