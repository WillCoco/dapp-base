import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { login, logout, transfer } from '../actions';

class Part1 extends Component {
  state = {
    quantity: null,
    toAddress: null,
    memo: '',
  };

  changeValue = (e) => {
    this.setState({ quantity: e.target.value })
  };

  changeToAddress = (e) => {
    this.setState({ toAddress: e.target.value })
  };

  send = () => {
    const { quantity, toAddress, memo } = this.state;
    this.props.transfer({
      to: toAddress,
      quantity: parseFloat(quantity).toFixed(4) + ' EETH',
      memo
    })
      .then(r => {
        console.log(r, 12);
      })
      .catch(err => {
        console.log(err, 'errrr');
      });
  };

  render() {
    return (
      <div>
        value:<input type="text" onChange={this.changeValue}/>
        to:<input type="text" onChange={this.changeToAddress}/>
        {
          <a onClick={this.send}>send</a>
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
  return bindActionCreators({login, logout, transfer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Part1);
