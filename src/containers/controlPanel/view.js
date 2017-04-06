import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import { toggleSolvingStatus, refreshSolvingState } from './actions';
import PlayStopButton from "../../components/playStopButton/view";
import SpeedControl from "../speedControl/view";

class ControlPanel extends Component {
  render() {
    let containerClass = classNames("control-panel", "mt-4", {
      invisible: !this.props.selectedAlgorithm
    });

    return(
      <div className={containerClass}>
        <PlayStopButton
          handler={this.props.toggleSolvingStatus}
          solvingStatus={this.props.solvingStatus} />

        <button
          className="btn btn-outline-primary mx-4"
          onClick={() => this.props.refreshSolvingState()}>
            <i className="fa fa-lg fa-refresh" aria-hidden="true" />
        </button>

        <SpeedControl />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    solvingStatus: state.solvingStatus,
    selectedAlgorithm: state.selectedAlgorithm
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleSolvingStatus: toggleSolvingStatus,
    refreshSolvingState: refreshSolvingState
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
