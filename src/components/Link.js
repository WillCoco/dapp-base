import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dropdown } from 'element-react';
import { changeLanguage } from '../actions';
//
class Link extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="weixin://dl/business/">weixin</a>
        </div>
        <div>
          <a href="fb://facewebmodal/f?href=">facebook app</a>
        </div>
        <div>
          <a href="https://www.facebook.com/jinling.pei.5">facebook web</a>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeLanguage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
