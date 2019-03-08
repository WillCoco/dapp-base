import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

class TimeLeft extends Component {
  timeFormat = (timeLeft) => {
    timeLeft = timeLeft < 0 ? 0 : timeLeft;
    const duration = timeLeft / 1000;
    const hours = parseInt(duration / 3600);
    const secondsLeft = duration % 3600;
    const mins = parseInt(secondsLeft / 60);
    const seconds = parseInt(secondsLeft % 60);

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      mins: mins < 10 ? `0${mins}` : mins,
      seconds: seconds < 10 ? `0${seconds}` : seconds
    }
  };

  render() {
    const time = this.timeFormat(this.props.timeLeft);
    return (
      <p>剩余时间：{ time.hours } : {time.mins} : {time.seconds}</p>
    )
  }
}

function mapStateToProps(state) {
  return {
    timeLeft: state.timeLeft
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLeft);
