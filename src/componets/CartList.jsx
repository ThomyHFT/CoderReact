import React from 'react'
import ItemCart from './ItemCart'

const CartList = ({ cart }) => {
  return (
    <div className="cart-list-items">
      {cart.length === 0 ? (
        <p className="cart-empty">No hay productos en el carrito.</p>
      ) : (
        cart.map(prod => <ItemCart key={prod.id} producto={prod} />)
      )}
    </div>
  )
}

export default CartList
