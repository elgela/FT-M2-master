export default function SearchBar(props) {
   return (
      <div>
         <input type='text' placeholder="Ingrese personaje"/>
         <button onClick={() => props.onSearch('un ID')}>Agregar</button>
      </div>
   );
}
