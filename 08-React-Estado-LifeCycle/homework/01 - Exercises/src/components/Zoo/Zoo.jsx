import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName: '',
      animals: [],
      species: [],
      allAnimals: [],
   })

   function handleInputChange(e) {
      setZoo({
         ...zoo,
         zooName: e.target.value,
      })
   }

   return (
      <div>
         <label>zooName</label>
         <input value={zoo.zooName} onChange={handleInputChange}/>
         <h1>{zoo.zooName}</h1>
      </div>
   );
}
