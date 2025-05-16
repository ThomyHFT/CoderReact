import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import "../styles/item.css"
import Loader from './Loader.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/FireBaseConecction.jsx';


const ItemListContainer = ({seccion}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemid, categoryid } = useParams();



useEffect(()=>{
  setLoading(true)
  const productosCollections=collection(db,"productos")
  getDocs(productosCollections)
  .then((res)=>{
    const list=res.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
      }
    })
    if (itemid) {
        const item = list.find((prod) => prod.id === itemid);
        setData(item ? [item] : []);
    }else if(categoryid=="todas"){
        setData(list)
    } 
    else if (categoryid) {
         setData(list.filter((prod) => prod.category === categoryid));
    } else {
         setData(list);
    }
  })
  .catch((error) => {
         console.error("Error al cargar productos:", error);
   })
  .finally(()=>setLoading(false))
},[itemid, categoryid])


  useEffect(() => {
    if (seccion) {
      const sectionElement = document.querySelector(seccion);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [categoryid]);

  if (loading) return <div><Loader/></div>;
  if (data.length === 0) return <p>No se encontraron productos.</p>;
  
  return (
    
    <div className='ItemSeccion'>
      <h2 className='productTitle'>{categoryid ? categoryid:"Productos"}</h2>
       <ItemList productos={data}/>
    </div>
  )
}

export default ItemListContainer
