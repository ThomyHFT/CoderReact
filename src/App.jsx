import './styles/App.css'
import Navbar from './componets/Navbar.jsx'
import ItemListContainer from './componets/ItemListContainer.jsx'
import Button from './componets/Button.jsx'

function App() {

  const mostrarProp="Muestrame"
  const saludar=()=>{
    alert("Bienvenidos")
  }
  return (
    <>
    {/* de esta manera puedo mandar propiedades al componente */}
    <Navbar prop={mostrarProp} prop2="mostrarProp2"/> 
    <ItemListContainer/> 
    <Button text="Bienvenido" style="btn-welcome" handler={saludar}/>
    </>
  )
}

export default App
