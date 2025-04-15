import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { getProducts } from '../mock/asyncService.jsx'

const ItemListContainer = ({greeting}) => {
    // const getData=()=>{
    //     return new Promise((resolve, reject)=>{
    //         let error=false;
    //         setTimeout(()=>{
    //             if(error){
    //                 reject("No quedan horas disponibles")
    //             }
    //             else{
    //                 resolve("Hay horas disponibles")
    //             }
    //         },2000)
    //     })
    // }

    //las asincronias se manejan con el hook de efect

    const[data, setData]=useState([]);
    useEffect(()=>{
        getProducts()
        .then((res)=>setData(res)
            
        )
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
      <h1>{greeting}</h1>
      {data.map(prod=><p key={prod.id}>{prod.id}</p>)}
    </div>
  )
}

export default ItemListContainer
