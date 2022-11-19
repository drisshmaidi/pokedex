import React, { useState } from "react";


const CaughtPokemon = (props) => {
let [caught, setCaught] = useState([]);

function catchPokemon() {
  setCaught(caught.concat("Charmander"));
}

return (
  <div>
    <p>Caught {caught.length} Pokemon on {props.date}</p>
    <button onClick={catchPokemon}>Catch Pokemon</button>

    <ul>
      {caught.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  </div>
);
};


export default CaughtPokemon;
