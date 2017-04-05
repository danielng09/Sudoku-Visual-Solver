import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import { toggleSolvingStatus, resetBoard } from './actions';
import PlayStopButton from "../../components/playStopButton/view";

class ControlPanel extends Component {
  render() {
    let containerClass = classNames("control-panel", "mt-4", {
      invisible: !this.props.activeAlgorithm
    });

    return(
      <div className={containerClass}>
        <PlayStopButton
          handler={this.props.toggleSolvingStatus}
          solvingStatus={this.props.solvingStatus} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    solvingStatus: state.solvingStatus,
    activeAlgorithm: state.activeAlgorithm
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleSolvingStatus: toggleSolvingStatus

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
