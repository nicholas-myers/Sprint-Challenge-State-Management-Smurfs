import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, postSmurf } from "../actions/smurfActions"

const initialSmurfInputs = {
  smurfName: "",
  smurfAge: "",
  smurfHeight: "",
};

function SmurfForm(props) {
    useEffect(() => {
        props.fetchSmurfs();
      }, []);
  const [smurfInputs, setSmurfInputs] = useState(initialSmurfInputs);

  const changeSmurfInput = (event) => {
    setSmurfInputs({
      ...smurfInputs,
      [event.target.name]: event.target.value,
    });
    // console.log(smurfInputs);
  };

  const createSmurf = (event) => {
    const newSmurf = {
      name: smurfInputs.smurfName,
      age: smurfInputs.smurfAge,
      height: smurfInputs.smurfHeight,
      id: Date.now(),
    };
    // console.log(newSmurf);
    props.postSmurf(newSmurf)
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
      <button>Create Smurf!</button>
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

export default connect(mapStateToProps, {fetchSmurfs, postSmurf})(SmurfForm);
