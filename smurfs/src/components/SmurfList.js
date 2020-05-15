import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurf } from "../actions/smurfActions";
import Smurf from "./Smurf";

import styled from "styled-components";

const Smurfs = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function SmurfList({loadingSmurfs, smurfs, fetchSmurfs, deleteSmurf, updatedSmurfs}) {
  //   console.log(smurfs);
 useEffect(() => {
    fetchSmurfs();
  }, [updatedSmurfs]);

  
  return (
    <section>
      <h2> Smurfville</h2>
      <Smurfs>
        {loadingSmurfs && <p>Creating your smurfs....</p>}
        {smurfs.map((smurf) => {
          //   console.log(smurf)
          return <Smurf key={smurf.id} smurf={smurf} deleteSmurf={deleteSmurf}/>;
        })}
      </Smurfs>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    loadingSmurfs: state.loadingSmurfs,
    smurfs: state.smurfs,
    smurfingError: state.smurfingError,
    updatedSmurfs: state.updatedSmurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf })(SmurfList);
