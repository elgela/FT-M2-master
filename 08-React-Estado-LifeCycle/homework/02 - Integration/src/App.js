import { useState } from 'react';

import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Navbar from './components/Navbar/Navbar.jsx'


import styled from 'styled-components'

const Estrellas=styled.div`
background-image:url(https://img.freepik.com/vector-gratis/fondo-pantalla-galaxia-acuarela-pintado-mano_52683-63444.jpg?w=2000); backgound-size:100%`;


function App () {

  const [characters, setCharacters] = useState([]);

  /* const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 }; */

 const onSearch = (character) => {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  } 

  return (
    <Estrellas>
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Navbar onSearch={onSearch}/>
      </div>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </div>
    </Estrellas>
  )
}

export default App
