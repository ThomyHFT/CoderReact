import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import Item from './item.jsx';
import ItemCount from './ItemCount.jsx'
const ItemDetail = ({producto}) => {
  const {addToCart}=useContext(CartContext)
  const add=(quantity)=>{
  
    addToCart(producto,quantity)
  }
  const [addCart, setAddCart]=useState(true)
    return (
      <div className="productD-container">
        <Item producto={producto} vista="detail"/>
        { 
          producto.stock === 0 && addCart
            ? <p className="sinStock">Sin stock</p>
            : producto.stock > 0 && !addCart
              ? <p className="agregado">Producto agregado a tu carrito!!</p>
              : addCart && producto.stock > 0
                ? <ItemCount stock={producto.stock} setCart={setAddCart} add={add} />
                : null
        }
        
      </div>
    );
  };
  
export default ItemDetail
