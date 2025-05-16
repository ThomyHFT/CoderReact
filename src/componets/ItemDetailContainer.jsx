import React, { useState } from 'react'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "../styles/item.css"
import ItemDetail from "./ItemDetail.jsx"
import Loader from './Loader.jsx';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../services/FireBaseConecction.jsx';
import {Link} from "react-router-dom"

const ItemDetailContainer = ({seccion}) => {

  const {itemid} = useParams();
  const [producto, setProducto]=useState({})
  const [loading, setLoading]=useState(false);
  useEffect(() => {
    setLoading(true)
      const productosCollections=collection(db,"productos")
      const producto=doc(productosCollections, itemid)
      getDoc(producto)
        .then((res) => {
         if(res.data()){
          setProducto({
            id:res.id,
            ...res.data()
          })
         }
        
        })
        .catch((error) => {
          console.error("Error al cargar productos:", error);
        })
        .finally(()=> setLoading(false))
       
    }, []);

      useEffect(() => {
        if (seccion) {
          const sectionElement = document.querySelector(seccion);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, []);

    if(loading==true) return <div><Loader/></div>
    if(producto && Object.keys(producto).length > 0) return <ItemDetail producto={producto}/>
    return (
      <>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2>No se encontro el producto</h2>
        <Link className="addD-to-cart-btn" to={`/`}>volver</Link>
      </div>
      </>
        
    );
  };
  

export default ItemDetailContainer
