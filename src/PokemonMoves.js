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
    return (
      <div>
        <p>{pokemonData.name}'s Moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
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
