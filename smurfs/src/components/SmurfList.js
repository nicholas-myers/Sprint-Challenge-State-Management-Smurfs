import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfActions";
import Smurf from "./Smurf"

function SmurfList(props) {
  console.log(props.smurfs);
  useEffect(() => {
    props.fetchSmurfs();
  }, []);
  return (
    <div className="smurfList">
      <div> Smurfs go here</div>
      {props.loadingSmurfs && <p>Creating your smurfs....</p>}
      {props.smurfs &&
        props.smurfs.map((smurf) => {
          //   console.log(smurf)
          return (
            <Smurf smurf={smurf}/>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loadingSmurfs: state.loadingSmurfs,
    smurfs: state.smurfs,
    smurfingError: state.smurfingError,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
