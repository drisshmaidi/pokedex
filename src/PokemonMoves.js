import React, { useState, useEffect } from "react";

function PokemonMoves() {
  let [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
    .then((res) => res.json())
    .then((data) => {
      setPokemonData(data);
    });
  }, []);

  if (pokemonData) {
    let allMoves = pokemonData.moves.slice(0, 4);
    return (
      <div>
        <p>{pokemonData.name}'s Moves:</p>
        <ul>
          {
          allMoves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default PokemonMoves;
