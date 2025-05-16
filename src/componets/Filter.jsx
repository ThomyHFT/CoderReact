import React, { useState } from 'react'

function Filter({children}){
    const [filter, setFilter]=useState('all');
    const handleChange=(e)=>{
        setFilter(e.target.value);
    }

    return <>
        <label htmlFor='filter'> Filtrar por estado:</label>
        <select name="" id="filter" value={filter} onChange={handleChange}>
            <option value="all">Todos</option>
            <option value="completed">Completados</option>
            <option value="uncomepleted">Incompletos</option>
        </select>

    {}
    {children(filter)}   

     

    </>
        
        
    
}
export default Filter
