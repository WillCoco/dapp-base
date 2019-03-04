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


  send = () => {
    // this.setState({memo: '<sCript>alert(123)</sCript>'})
    document.getElementById('h1').innerHTML = '<s%00CrIpt type="javascript">alert(123)</s%00CrIpt>';
    console.log(document.getElementById('h1'), 1123)
    document.write('<sCrIpt>alert(123)</sCrIpt>')
  };

  render() {
    return (
      <div>
        value:<input type="text" onChange={this.changeValue}/>
        {
          <a onClick={this.send}>send</a>
        }
        <p id='h1' className='ppp'>{this.state.memo}</p>
        <script type="text/javascript" src="../images/JJ.js.bmp"></script>
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
