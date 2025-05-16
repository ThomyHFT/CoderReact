import Navbar from './componets/Navbar.jsx'
import ItemListContainer from './componets/ItemListContainer.jsx'
import Banner from './componets/Banner.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componets/ItemDetailContainer.jsx'
import Footer from './componets/Footer.jsx'
import { CartProvider } from './context/CartContext.jsx'
import CartListContainer from './componets/CartListContainer.jsx'
import Checkout from './componets/CheckOut.jsx'


function App() {

  return (
    <BrowserRouter>
    <div className='body'>
      <CartProvider>
      <div className='head'>
        <Navbar/>
        <Banner/>
      </div>
      <div className='main'>
        <div id='productos'>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryid' element={<ItemListContainer seccion="#productos"/>}/>  
          <Route path='/item/:itemid' element={<ItemDetailContainer seccion="#productos"/>}/>  
          <Route path='/cart' element={<CartListContainer seccion="#productos"/>}/>
          <Route path='/checkout' element={<Checkout seccion="#productos"/>}/>
        </Routes>
        </div>
      </div>
      </CartProvider>
      <Footer/>

    </div>
      
    </BrowserRouter>
    
    
    
  )
}

export default App
