import "../styles/navbar.css"
import DropDownList from "./DropDownList";
import Cart from "./Cart";



const Navbar=()=>{
    return(
        <nav className="nav-cont">
            <a className="title" href="/">Oceanails</a>
            
            <div className="links">
                <DropDownList/>
                <a href="">Galeria</a>
                <a href="">Contacto</a>
               <Cart/>
                
            </div>
        </nav>
    )
}


export default Navbar;