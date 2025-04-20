import React, { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncService.jsx'
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({seccion}) => {
    //las asincronias se manejan con el hook de efect

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemid, categoryid } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((res) => {
        if (itemid) {
          const item = res.find((prod) => prod.id === itemid);
          setData(item ? [item] : []);
        }else if(categoryid=="todas"){
          setData(res)
        } 
        else if (categoryid) {
          setData(res.filter((prod) => prod.category === categoryid));
        } else {
          setData(res);
        }
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemid, categoryid]);

  useEffect(() => {
    if (seccion) {
      const sectionElement = document.querySelector(seccion);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [categoryid]);

  if (loading) return <p>Cargando productos...</p>;
  if (data.length === 0) return <p>No se encontraron productos.</p>;
  
  return (
    <div className='ItemSeccion'>
      <h2 className='productTitle'>{categoryid ? categoryid:"Productos"}</h2>
      <div className='ItemList'>
       {data.map(prod=><ItemList key={prod.id} producto={prod}/>)}
      </div>
      
    </div>
  )
}

export default ItemListContainer
