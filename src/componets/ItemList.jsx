import React from 'react'
import "../styles/itemList.css"
import {Link} from "react-router-dom"
import ItemCount from './ItemCount';

const itemList = ({ producto }) => {

    return (
      <div className="product-card">
        <img src={producto.img} alt={producto.name} className="product-image" />
  
        <div className="product-info">
          <h2 className="product-title">{producto.name}</h2>
          <p className="product-description">{producto.description}</p>
          <p className="product-price">${producto.price}</p>
          <Link className='addD-to-cart-btn ' to={`/item/${producto.id}`}>Detalles</Link>
        </div>
      </div>
    );
  };
  

export default itemList
