import React from "react";
import styled from "styled-components";



const SmurfCard = styled.div`
  border: 1px solid blue;
  border-radius: 1rem;
  width: 20%;
  background-color: dodgerblue;
  color: lightgray;
  margin: 1%;
`;

function Smurf(props) {
  return (
    <SmurfCard>
      <h2>{props.smurf.name}</h2>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <button onClick={() => props.deleteSmurf(props.smurf)}>X Kill Smurf X</button>
    </SmurfCard>
  );
}



export default Smurf;
