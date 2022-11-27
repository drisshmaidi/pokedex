import React from "react";

import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMoves from "./PokemonMoves";


const App = () => {
  function logWhenClicked() {
    console.log("Test");
  }

  return (
    <div>
      <Logo appName="Driss's Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMoves />
    </div>
  );
};

export default App;
