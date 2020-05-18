import axios from "axios";

export const INITIAL_SMURF_FETCH = "INITIAL_SMURF_FETCH";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const CREATE_SMURF = "CREATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";


export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: INITIAL_SMURF_FETCH });

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        // console.log(res.data)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_SMURF_FAILURE });
      });
  };
};

export const postSmurf = (object) => {
  return (dispatch) => {
    axios.post("http://localhost:3333/smurfs", object)
    .then((res) => {
      dispatch({ type: CREATE_SMURF, payload: object})
    });
    
  };
};

export const deleteSmurf = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_SMURF, payload: id})
    });
  };
};
