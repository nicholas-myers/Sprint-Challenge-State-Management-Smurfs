import {
  INITIAL_SMURF_FETCH,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  CREATE_SMURF,
} from "../actions/smurfActions";

const initialState = {
  loadingSmurfs: false,
  smurfs: [],
  smurfingError: "",
  updatedSmurfs: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_SMURF_FETCH:
      return {
        ...state,
        loadingSmurfs: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        loadingSmurfs: false,
        smurfs: action.payload,
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        smurfingError:
          "Get the smurf out of here Gargamel, there are no smurfs here!",
      };
    case CREATE_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        // updatedSmurfs: state.smurfs,
      };
    default:
      return state;
  }
};
