import React from 'react'
import {RingLoader} from 'react-spinners'

const Loader = ({seccion}) => {

  if(seccion=="postVenta"){
    return(
      <div className='contenedor-loader'>
        <RingLoader
          color="#007A78"
          size={100}
          speedMultiplier={1.3}
        />
        <p className='p-loader'>Procesando Compra....</p>
        
      </div>
    )
  }
  else{
    return(
      <div className='contenedor-loader'>
        <RingLoader
          color="#007A78"
          size={100}
          speedMultiplier={1.3}
        />
        <p className='p-loader'>Cargando Productos....</p>
      </div>
    )
  }
  
}

export default Loader
