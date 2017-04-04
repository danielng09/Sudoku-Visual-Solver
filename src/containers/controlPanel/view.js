import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import { toggleSolvingStatus, resetBoard } from './actions';
import PlayStopButton from "../../components/playStopButton/view";

class ControlPanel extends Component {
  render() {
    return(
      <div className="control-panel mt-4">
        <PlayStopButton
          handler={this.props.toggleSolvingStatus}
          solvingStatus={this.props.solvingStatus} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    solvingStatus: state.solvingStatus
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleSolvingStatus: toggleSolvingStatus
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
