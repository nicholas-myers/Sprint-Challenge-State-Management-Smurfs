import React, { useState } from "react";

const initialSmurfInputs = {
  smurfName: "",
  smurfAge: "",
  smurfHeight: "",
};

function SmurfForm() {
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
        id: Date.now()
    }

    console.log(newSmurf)
    setSmurfInputs(initialSmurfInputs)
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

export default SmurfForm;
