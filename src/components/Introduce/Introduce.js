import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'element-react';
import i18n from '../../language';
import { formatNumber } from '../../utils';
import SummaryTitle from '../Parts/SummaryTitle/SummaryTitle';
import './introduce.scss'

class Link extends Component {
  render() {
    return (
      <div id="introduce" className="summary-wrapper-light">
        <div className="content-center-wrapper introduce-wrapper">
          <SummaryTitle
            index="01"
            title={i18n.t('token_introduce')}
          />
          <p className="introduce-title">{i18n.t('what_is_PRDT')}</p>
          <p className="introduce-text">{i18n.t('PRDT_introduce')}</p>
          <div className="introduce-line" />
          <Layout.Row className="introduce-row">
            <Layout.Col span="12">
              <p className="text-normal-grey">{i18n.t('token_name')}</p>
            </Layout.Col>
            <Layout.Col span="12">
              <p className="text-normal-dark-m bold">{ this.props.icoInfo.name }</p>
            </Layout.Col>
          </Layout.Row>
          <Layout.Row className="introduce-row">
            <Layout.Col span="12" className="">
              <p className="text-normal-grey">{i18n.t('token_type')}</p>
            </Layout.Col>
            <Layout.Col span="12" className="">
              <p className="text-normal-dark-m bold">{ this.props.icoInfo.type }</p>
            </Layout.Col>
          </Layout.Row>
          <Layout.Row className="introduce-row">
            <Layout.Col span="12" className="">
              <p className="text-normal-grey">{i18n.t('token_gross')}</p>
            </Layout.Col>
            <Layout.Col span="12" className="">
              <p className="text-normal-dark-m bold">{ formatNumber(this.props.icoInfo.gross) }</p>
            </Layout.Col>
          </Layout.Row>
          <Layout.Row className="introduce-row">
            <Layout.Col span="12" className="">
              <p className="text-normal-grey">{i18n.t('token_symbol')}</p>
            </Layout.Col>
            <Layout.Col span="12" className="">
              <p className="text-normal-dark-m bold">{ this.props.icoInfo.symbol }</p>
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
