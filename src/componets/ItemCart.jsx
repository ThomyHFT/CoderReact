import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCart = ({producto}) => {
const{deleteById}=useContext(CartContext)

const deleteProduct=(id)=>{
    deleteById(id)
}
  return (
    <div className="item-cart">
      <img src={producto.img} alt={producto.name} className="item-cart-img" />
      <div className="item-cart-info">
        <h3>{producto.name}</h3>
        <p>Cantidad: {producto.quantity}</p>
        <p>total: ${producto.total}</p>
      </div>
      <button className="item-cart-delete" onClick={() => deleteProduct(producto.id)}>Eliminar</button>
    </div>
  )
}

export default ItemCart
