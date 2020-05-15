import React from "react"
import { connect } from "react-redux"
// import { fetchSmurfs } from ""

function SmurfList(props) {
    console.log(props.smurfs)
    return (
        <div> Smurfs go here</div>
    )
}

const mapStateToProps = state => {
    return {
        loadingSmurfs: state.loadingSmurfs,
        smurfs: state.smurfs,
        smurfingError: state.smurfingError
    }
}

export default connect(mapStateToProps, {})(SmurfList) 