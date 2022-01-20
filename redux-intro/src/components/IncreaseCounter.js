import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {increaseCounter} from "../redux/actions/counterActions";

class IncreaseCounter extends Component {
  render() {
    return (<div>
        <button onClick={e=>{
            this.props.dispatch(increaseCounter());
        }}>1 arttır</button>
    </div>);
  }
}

function mapDispatchToPros(dispatch) {
  return { action: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToPros)(IncreaseCounter);
