import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf, fetchSmurfs } from "../actions/smurfActions";

import styled from "styled-components";

const CreateButton = styled.button`
  background-color: blue;
  color: lightgray;
  padding: 1rem;
  border: 1px solid navy;
  border-radius: 1rem;
  font-size: 2rem;
  margin: 3%;
`;

const initialSmurfInputs = {
  smurfName: "",
  smurfAge: "",
  smurfHeight: "",
};

function SmurfForm(props) {
  const [smurfInputs, setSmurfInputs] = useState(initialSmurfInputs);

  const changeSmurfInput = (event) => {
    setSmurfInputs({
      ...smurfInputs,
      [event.target.name]: event.target.value,
    });
    // console.log(smurfInputs);
  };

  const createSmurf = (event) => {
    event.preventDefault();
    const newSmurf = {
      name: smurfInputs.smurfName,
      age: smurfInputs.smurfAge,
      height: smurfInputs.smurfHeight,
      id: Date.now(),
    };
    // console.log(newSmurf);
    props.postSmurf(newSmurf);

    setSmurfInputs(initialSmurfInputs);
  };

  return (
    <form onSubmit={createSmurf}>
      <h2>Smurf Formula</h2>
      <label>Name:</label>
      <input
        name="smurfName"
        value={smurfInputs.smurfName}
        onChange={changeSmurfInput}
      />
      <label>Age:</label>
      <input
        name="smurfAge"
        value={smurfInputs.smurfAge}
        onChange={changeSmurfInput}
      />
      <label>Height:</label>
      <input
        name="smurfHeight"
        value={smurfInputs.smurfHeight}
        onChange={changeSmurfInput}
      />
      <CreateButton>Create Smurf!</CreateButton>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    loadingSmurfs: state.loadingSmurfs,
    smurfs: state.smurfs,
    smurfingError: state.smurfingError,
  };
};

export default connect(mapStateToProps, { postSmurf, fetchSmurfs })(SmurfForm);
