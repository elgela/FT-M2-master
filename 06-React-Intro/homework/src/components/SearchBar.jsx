import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div>
      <input placeholder='Ingrese ciudad...'/>
      <button onClick={onSearch}>Agregar</button>
    </div>
  )
};