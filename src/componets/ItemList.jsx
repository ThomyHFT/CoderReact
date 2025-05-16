import React from 'react'
import Item from './Item.jsx';

const itemList = ({ productos }) => {

    return (
      <div className='ItemList'>
             {productos.map(producto=><Item key={producto.id} producto={producto} vista="list"/>)}
       </div>
    );
  };
  

export default itemList
