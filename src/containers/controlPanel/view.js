import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

let controls = ["backward", "play", "stop", "forward"];
class ControlPanel extends Component {
  renderControls() {
    return controls.map((control) => {
      let controlClass = classNames("fa", "fa-lg", `fa-${control}`);

      return (
        <button className="btn btn-outline-primary mx-4">
          <i
            key={control}
            className={controlClass}
            aria-hidden="true"></i>
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

export default connect(mapStateToProps)(ControlPanel);
