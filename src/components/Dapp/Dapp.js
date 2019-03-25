import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'element-react';
import SummaryTitle from '../Parts/SummaryTitle/SummaryTitle';
import i18n from "../../language";
import './dapp.scss';

class Link extends Component {
  render() {
    return (
      <div className="summary-wrapper-light">
        <div className="content-center-wrapper">
          <SummaryTitle
            index="03"
            title={i18n.t('dapp')}
          />
          <p className="dapp-title">{i18n.t('vision')}</p>
          <p className="text-medium-dark">{i18n.t('vision_content')}</p>
          <div className="column-center">
            <p className="dapp-text-coming">{ i18n.t('PRDT_is_coming') }</p>
            <img src="" alt="PRDT"/>
            <p className="text-medium-dark">Endless 30s</p>
            <p className="text-medium-grey align-center">{ i18n.t('PRDT_describe') }</p>
            <Button type="primary">{ i18n.t('PRDT_btn') }</Button>
          </div>
        </div>
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
