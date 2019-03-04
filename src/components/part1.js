import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { login, logout } from '../actions';

class Part1 extends Component {
  render() {
    return (
      <div>
        <div>{ this.props.identity && JSON.stringify(this.props.identity) }</div>
        {
          this.props.identity ?
          <a onClick={() => this.props.logout()} >logout</a> :
          <a onClick={() => this.props.login()} >login</a>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    identity: state.identity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login, logout}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Part1);
