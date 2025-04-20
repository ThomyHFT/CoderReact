import React, { useState } from 'react'
import { useEffect} from 'react'
import ItemCount from './ItemCount';
import { getProducts } from '../mock/asyncService';
import { useParams } from 'react-router-dom';
import "../styles/itemDetail.css"


const ItemDetail = ({seccion}) => {

  const {itemid} = useParams();
  const [producto, setProducto]=useState({})
  console.log(itemid);
  useEffect(() => {
      
      getProducts()
        .then((res) => {
          if (itemid) {
             setProducto(res.find((prod) => prod.id === itemid));
          }
        })
        .catch((error) => {
          console.error("Error al cargar productos:", error);
        })
       
    }, []);
    return (
      
      <div className="productD-container">
        <div className='top'>
          <div className='imgD-container'>
          <img src={producto.img} alt={producto.name} className="productD-image" />
          </div>
          <div className='top-info'></div>
            <h2 className="productD-title">{producto.name}</h2>
            <p className="productD-price">${producto.price}</p>
            <ItemCount />
            <button className="addD-to-cart-btn">Agregar al carrito</button>
          </div>
        <div className='both'>
          <p className="productD-description">{producto.description}</p>

          </div>  
      </div>
    );
  };
  

export default ItemDetail
