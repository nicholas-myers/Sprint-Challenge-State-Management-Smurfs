import React from "react";
import styled from "styled-components";
import { connect } from "react-redux"


const SmurfCard = styled.div`
  border: 1px solid blue;
  border-radius: 1rem;
  width: 20%;
  background-color: dodgerblue;
  color: lightgray;
  margin: 1%;
`;

function Smurf({ smurf }) {
  return (
    <SmurfCard>
      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <button>X Kill Smurf X</button>
    </SmurfCard>
  );
}

export default connect()(Smurf);
