import React, { Component } from 'react';
import classNames from 'classnames';

export default class PlayStopButton extends Component {
  render() {
    let iconClass = classNames("fa", "fa-lg", {
      "fa-stop": this.props.solvingStatus,
      "fa-play": !this.props.solvingStatus,
    });

    return (
      <button
        className="btn btn-outline-primary mx-4"
        onClick={() => this.props.handler(!this.props.solvingStatus)}>
          <i className={iconClass} aria-hidden="true" />
      </button>
    );
  }
}
