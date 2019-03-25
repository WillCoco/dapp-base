/*
 * FAQ
 **/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SummaryTitle from '../Parts/SummaryTitle/SummaryTitle';
import Collapse from '../Parts/Collapse/Collapse';
import i18n from '../../language';
import './FAQ.scss';

class Link extends Component {
  render() {
    const { FAQ = [] } = this.props;
    return (
      <div className="summary-wrapper-dark FAQ-wrapper">
        <div className="content-center-wrapper">
          <SummaryTitle
            light
            index="04"
            title={i18n.t('FAQ')}
          />
          <p className="summary-title-light">{i18n.t('FAQ')}</p>
          {
            FAQ.map((d, i) =>
              <Collapse
                key={`collapse${i}`}
                containerStyle={{
                  marginTop: '0.4rem'
                }}
                title={d.question()}
                text={d.answer()}
              />
            )
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    FAQ: state.FAQ || [],
    language: state.language
  };
}

export default connect(mapStateToProps)(Link);
