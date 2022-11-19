import React from "react";


const BestPokemon = (props) => {
    return (
    <div>
      <p>My Favourite Pokemon is ... </p>
      <ul>
        {props.abilities.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;