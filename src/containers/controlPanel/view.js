import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import classNames from 'classnames';
import attemptToSolve from './actions';

let controls = [
  { name: "play", handler: attemptToSolve },
  // { name: "stop", handler: attemptToSolve },
  // { name: "backward", handler: attemptToSolve },
  // { name: "forward", handler: attemptToSolve }
];

class ControlPanel extends Component {
  renderControls() {
    return controls.map((control) => {
      let controlClass = classNames("fa", "fa-lg", `fa-${control.name}`);

      return (
        <button
          key={control.name}
          className="btn btn-outline-primary mx-4"
          onClick={() => this.props.attemptToSolve()}>
            <i className={controlClass} aria-hidden="true" />
        </button>
      )
    });
  }

  render() {
    return(
      <div className="control-panel mt-4">
        {this.renderControls()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedControl: state.selectedControl
  }
}

function mapDispatchToProps(dispatch) {
  let actionCreators = {};
  controls.forEach(control => actionCreators[control.handler.name] = control.handler);
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
