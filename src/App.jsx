import './styles/App.css'
import Navbar from './componets/Navbar.jsx'
import ItemListContainer from './componets/ItemListContainer.jsx'
import Button from './componets/Button.jsx'
import ItemCount from './componets/ItemCount.jsx'
import Banner from './componets/Banner.jsx'

function App() {

  const mostrarProp="Muestrame"
  const saludar=()=>{
    alert("Bienvenidos")
  }
  return (
    // <>
    // {/* de esta manera puedo mandar propiedades al componente */}
    // <Navbar prop={mostrarProp} prop2="mostrarProp2"/> 
    // <ItemListContainer/> 
    // <Button text="Bienvenido" style="btn-welcome" handler={saludar}/>
    // </>
    <div className='body'>
      <div className='head'>
        <Navbar prop={mostrarProp} prop2="mostrarProp2"/>
        <Banner/>
      </div>
      <div className='main'>
        <ItemCount />
      </div>
      <div className='footer'>

      </div>

    </div>
    
    
  )
}

export default App
