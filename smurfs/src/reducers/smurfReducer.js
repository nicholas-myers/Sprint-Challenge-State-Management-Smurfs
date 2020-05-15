import {
  INITIAL_SMURF_FETCH,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from "../actions/smurfActions";

const initialState = {
  loadingSmurfs: false,
  smurfs: [],
  smurfingError: "",
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
              smurfingError: "Get the smurf out of here Gargamel, there are no smurfs here!"
          }
    default:
      return state;
  }
};
