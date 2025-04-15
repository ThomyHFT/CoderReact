import React, {useState} from 'react'

const ItemCount = ({stock}) => {
const [contador, setContador]=useState(1)

const sumar=()=>{
    setContador(contador+1)
}

const restar=()=>{
    if(stock>0){
        setContador(contador-1)
    }
    
}

  return (
    <div>
      <button onClick={restar}>-</button>
      <span>{contador}</span>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCount

