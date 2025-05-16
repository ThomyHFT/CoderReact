import React from 'react'
import {Link} from "react-router-dom"

function Item({producto, vista}) {
  return (
    <div className="product-card">
        <img src={producto.img} alt={producto.name} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{producto.name}</h2>
          <p className="product-description">{producto.description}</p>
          <p className="product-price">${producto.price}</p>
          {vista === 'list' && (
                <Link className="addD-to-cart-btn" to={`/item/${producto.id}`}>
                    Detalles
                </Link>
            )}
            {vista === 'detail' && (
                <>      
                </>
            )}
        </div>
      </div>
  )
}

export default Item
