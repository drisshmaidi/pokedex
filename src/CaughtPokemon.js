import React, { useState } from "react";
import allPokemon from "json-pokemon";

const CaughtPokemon = (props) => {
let [caught, setCaught] = useState([]);

function catchPokemon() {
  let index = Math.floor(Math.random() * allPokemon.length);
  setCaught(caught.concat(allPokemon[index].name));
}

return (
  <div>
    <p>Caught {caught.length} Pokemon on {props.date}</p>
    <button onClick={catchPokemon}>Catch Pokemon</button>

    <ul>
      {caught.map((item) => {
        return<li>{item}</li>;
      })}
    </ul>
  </div>
);
};


export default CaughtPokemon;

