import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import i18n from '../../../language';
import './TimeLeft.scss';

class TimeLeft extends Component {
  timeFormat = (timeLeft) => {
    timeLeft = timeLeft < 0 ? 0 : timeLeft;
    const duration = timeLeft / 1000;
    const days = parseInt(duration / (3600 * 24));
    const hoursLeft = duration % (3600 * 24);
    const hours = parseInt(hoursLeft / 3600);
    const secondsLeft = duration % 3600;
    const mins = parseInt(secondsLeft / 60);
    const seconds = parseInt(secondsLeft % 60);

    return {
      days: days < 10 ? `0${days}` : days,
      hours: hours < 10 ? `0${hours}` : hours,
      mins: mins < 10 ? `0${mins}` : mins,
      seconds: seconds < 10 ? `0${seconds}` : seconds
    }
  };

  render() {
    const time = this.timeFormat(this.props.timeLeft);
    return (
      <div className={`time-wrapper ${this.props.className}`}>
        <div className="time-cell-wrapper">
          <span className="text-time">{ time.days }</span>
          <span className="time-text-unit">{i18n.t('unit-day')}</span>
        </div>
        <span className="time-colon">:</span>
        <div className="time-cell-wrapper">
          <span className="text-time">{ time.hours }</span>
          <span className="time-text-unit">{i18n.t('unit-hours')}</span>
        </div>
        <span className="time-colon">:</span>
        <div className="time-cell-wrapper">
          <span className="text-time">{ time.mins }</span>
          <span className="time-text-unit">{i18n.t('unit-minus')}</span>
        </div>
        <span className="time-colon">:</span>
        <div className="time-cell-wrapper">
          <span className="text-time">{ time.seconds }</span>
          <span className="time-text-unit">{i18n.t('unit-second')}</span>
        </div>
      </div>

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
