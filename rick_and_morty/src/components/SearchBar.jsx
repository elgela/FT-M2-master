export default function SearchBar(props) {
   return (
      <div>
         <input type='text' placeholder="Ingrese personaje" className="search"/>
         <button onClick={() => props.onSearch('un ID')} className='boton' >Agregar</button>
      </div>
   );
}
