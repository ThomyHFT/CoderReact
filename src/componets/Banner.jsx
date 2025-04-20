import React from 'react';


const Banner = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <div className='text-container'>
          <h1 className='hero-title'>Oceanails</h1>
          <p className='hero-description'>
            Transforma tus uñas en verdaderas obras de arte. Descubre la elegancia, el detalle y el cuidado que solo Oceanails puede ofrecer.
          </p>
          <button className='hero-button'>¡Reserva Ahora!</button>
        </div>

        <div className='hero-image'>
          <img src="/img/banner.png" alt="Oceanails banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
