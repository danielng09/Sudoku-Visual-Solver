import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classNames from "classnames";

require("./style.scss");

import updateSolvingSpeed from "./actions";

class SpeedControl extends Component {
  renderOption(speed) {
    var optionClass = classNames("dropdown-item", {
      active: speed === this.props.solvingSpeed
    })

    return (
      <a
        key={speed}
        className={optionClass}
        href="javascript:void(0)"
        onClick={() => this.props.updateSolvingSpeed(speed)}>
        {speed}x</a>
    )
  }

  render() {
    const speeds = [0.25, 0.5, 1, 2, 4, 8];

    return (
      <div className="dropdown d-inline dropup mx-4">
        <button
          className="btn btn-outline-primary btn-m-w dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Speed {this.props.solvingSpeed}x
        </button>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          { speeds.map(speed => this.renderOption(speed)) }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    solvingSpeed: state.solvingSpeed
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSolvingSpeed: updateSolvingSpeed }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedControl);
