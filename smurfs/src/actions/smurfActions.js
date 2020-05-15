export const INITIAL_SMURF_FETCH = "INITIAL_SMURF_FETCH"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE"


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: INITIAL_SMURF_FETCH })
    }
}