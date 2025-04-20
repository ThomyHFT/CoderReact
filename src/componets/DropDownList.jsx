import React from 'react';
import { useNavigate } from 'react-router-dom';

const DropDownList = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;

      navigate(value);
    
  };

  return (
    <select className='drop' onChange={handleChange} defaultValue="">
      <option value="" disabled>Productos</option>
      <option value="/category/todas">Todas</option>
      <option value="/category/basicas">Básicas</option>
      <option value="/category/personalizadas">Personalizadas</option>
      <option value="/category/profesionales">Profesionales</option>
    </select>
  );
};

export default DropDownList;
