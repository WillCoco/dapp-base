/*
 * 第一屏：购买
 **/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Button, Progress } from 'element-react';
import i18n from '../../language';
import ContactUs from '../Parts/ContactUs/SocialContact';
import TimeLeft from '../Parts/TimeLeft/TimeLeft';
import './main.scss';

class Main extends Component {
  render() {
    const progress = `${this.props.progress}%`;
    const { flexible = {} } = window.lib || {};
    let strokeWidth = 8;
    if (flexible.rem) {
      strokeWidth = 0.19 * flexible.rem;
    }
    return (
      <div className="main-wrapper">
        <div className="row-center">
          <div>
            <span className="summary-title-light">{i18n.t('slogan')}</span>
            <p className="text-small-light-m">{i18n.t('subhead')}</p>
            <span className="text-follow">{i18n.t('follow_us')}</span>
            <ContactUs />
          </div>
        </div>

        <Card className="sell-card">
          <p className="sell-card-title">{i18n.t('sell_card_title')}</p>
          <TimeLeft className="sell-card-time-left" />
          <p className="sell-card-text-process">{progress} {i18n.t('ico-completed')}</p>
          <Progress strokeWidth={strokeWidth} className="main-progress" percentage={this.props.progress} showText={false} />
          <p className="sell-card-text-exchange">1 EOS = 3177.38 PRDT</p>
          <Button className="buy-token-btn" type="primary">{i18n.t('buy_token')}</Button>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    progress: state.icoInfo.progress * 100
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
