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

function SmurfList(props) {
  //   console.log(props.smurfs);
  useEffect(() => {
    props.fetchSmurfs();
  }, []);
  return (
    <section>
      <h2> Smurfs go here</h2>
      <Smurfs>
        {props.loadingSmurfs && <p>Creating your smurfs....</p>}
        {props.smurfs.map((smurf) => {
          //   console.log(smurf)
          return <Smurf key={smurf.id} smurf={smurf} deleteSmurf={props.deleteSmurf}/>;
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
  };
};

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf })(SmurfList);
