import { INITIAL_SMURF_FETCH } from "../actions/smurfActions"

const initialState = {
    loadingSmurfs: false,
    smurfs: [],
    smurfingError: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_SMURF_FETCH:
            return {
                ...state,
                loadingSmurfs: true,
            }
        default:
            return state
    }
}