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

const KillSmurf = styled.button`

  background-color: red;
  border: 2px solid darkred;
  border-radius: 1rem;
  font-size: 1.5rem;
  color: lightgray;
  padding: 1rem;
  margin: 3%;
`;

function Smurf(props) {
  return (
    <SmurfCard>
      <h3>{props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <form>
        <KillSmurf onClick={() => props.deleteSmurf(props.smurf.id)}>
          X Kill Smurf X
        </KillSmurf>
      </form>
    </SmurfCard>
  );
}

export default Smurf;
