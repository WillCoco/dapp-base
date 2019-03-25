import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Layout } from 'element-react';
import i18n from '../../language';
import { formatNumber } from '../../utils';
import SummaryTitle from '../Parts/SummaryTitle/SummaryTitle';
import './TokenSell.scss';

const TextColumn = (props) => {
  return [
    <p key="TextColumnTitle" className="summary-text-column-top">{ props.title }</p>,
    <p key="TextColumnContent" className="summary-text-column-bottom">{ props.content }</p>
  ]
};

const TextRow = (props) => {
  return (
    <div className="text-purpose-wrapper">
      <span key="TextRowTitle" className="text-purpose-left" style={{color: props.color}}>{ props.leftText }</span>
      <span key="TextRowBarrier" className="purpose-barrier" />
      <span key="TextRowContent" className="">{ props.rightText }</span>
    </div>
  );
};

class Link extends Component {
  getPercent = (icoGross, gross) => {
    return `${parseInt((icoGross / gross * 100).toFixed(2), 10)} %`;
  };

  render() {
    const { startTime, gross, icoGross, endTime, exchangeRate, minPayments } = this.props.icoInfo;
    return (
      <div className="summary-wrapper-dark">
        <div className="content-center-wrapper">
          <SummaryTitle
            light
            index="02"
            title={i18n.t('token_sell')}
          />
          <p className="sell-title">{i18n.t('token_sell')}</p>
          <TextColumn
            title={i18n.t('time_on_sale')}
            content={startTime}
          />
          <TextColumn
            title={i18n.t('token_sell_gross')}
            content={`${formatNumber(icoGross)} PRDT (${this.getPercent(icoGross, gross)})`}
          />
          <TextColumn
            title={i18n.t('time_stop_sale')}
            content={endTime}
          />
          <TextColumn
            title={i18n.t('min_payments')}
            content={`${minPayments} EOS`}
          />
          <TextColumn
            title={i18n.t('available_coin_type')}
            content="EOS"
          />
          <TextColumn
            title={i18n.t('token_exchange_rate')}
            content={`1 EOS = ${exchangeRate} PRDT`}
          />
          <p className="sell-title-purpose">{i18n.t('token_purpose')}</p>
          <Layout.Row className="summary-token-purpose">
            <Layout.Col span="12">
              pic
            </Layout.Col>
            <Layout.Col span="12">
              <TextRow
                color="#FD6642"
                leftText="40%"
                rightText={i18n.t('purpose_advertising')}
              />
              <TextRow
                color="#FFC856"
                leftText="30%"
                rightText={i18n.t('purpose_develop')}
              />
              <TextRow
                color="#8FD661"
                leftText="15%"
                rightText={i18n.t('purpose_service')}
              />
              <TextRow
                color="#46CBFF"
                leftText="10%"
                rightText={i18n.t('purpose_reserved')}
              />
              <TextRow
                color="#4A77F6"
                leftText="5%"
                rightText={i18n.t('purpose_team')}
              />
            </Layout.Col>
          </Layout.Row>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    icoInfo: state.icoInfo || {}
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
