import './styles/App.css'
import Navbar from './componets/Navbar.jsx'
import ItemListContainer from './componets/ItemListContainer.jsx'
import Banner from './componets/Banner.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetail from './componets/ItemDetail.jsx'
import Footer from './componets/Footer.jsx'


function App() {
  return (
    <BrowserRouter>
    <div className='body'>
      <div className='head'>
        <Navbar/>
        <Banner/>
      </div>
      <div className='main'>
        <div id='productos'>
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer seccion="#productos"/>}/>  
        <Route path='/item/:itemid' element={<ItemDetail seccion="#productos"/>}/>  
      </Routes>
        </div>
      </div>
      <Footer/>

    </div>
    </BrowserRouter>
    
    
    
  )
}

export default App
