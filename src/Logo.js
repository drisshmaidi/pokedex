
import React from "react";

const Logo = (props) => {
    return (
    <header>
      <h1>{props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        alt=""
        onClick={props.handleClick}
      ></img>
    </header>
  );
};




export default Logo;