import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Oceanails</h3>
        <p className="footer-text">Belleza y estilo en cada detalle. Gracias por preferirnos 💅</p>

        <div className="footer-links">
          <a href="#productos">Productos</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Oceanails. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
