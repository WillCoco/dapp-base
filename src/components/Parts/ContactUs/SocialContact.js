/*
 * 联系我们
 **/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './SocialContact.scss';

class Link extends Component {
  render() {
    return (
      <div className="social-wrapper">
        <div className="social-contact-icon">facebook</div>
        <div className="social-contact-icon">tel</div>
        <div className="social-contact-icon">facebook</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    language: state.language
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
