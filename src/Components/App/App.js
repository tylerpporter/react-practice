import React, { useState } from 'react'
import './App.css'
import Pokemon from '../Pokemon/Pokemon' 
import Input from '../Input/Input'

function App() {
  const [pokemon, setPokemon] = useState([])

  const getPokemon = async (limit) => {
    const response = await fetch(`https://simple-sinatra-api.herokuapp.com/pokemon?limit=${limit}`);
    const data = await response.json();
    setPokemon(data.pokemon); 
  }
  return (
    <div className="App">
      <Input 
        getPokemon = {getPokemon} 
      />
      {pokemon.map(poke => (
        <Pokemon key={poke.name} name={poke.name} link={poke.url}/>
      ))}
    </div>
  );
}

export default App
