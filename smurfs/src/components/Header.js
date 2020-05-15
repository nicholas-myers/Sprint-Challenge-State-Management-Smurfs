import React from "react";

function Header() {
  return (
    <header>
      <h1>Gargamel creates Smurfs</h1>
      <img className="gargamel" src={require("../img/gargamel.png")} alt="the evil chemist" />
      <img src={require("../img/jokey2.png")} alt="a running smurf" />
    </header>
  );
}

export default Header