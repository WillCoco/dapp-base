import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../Parts/Logo/Logo';
import ContactUs from '../Parts/ContactUs/SocialContact';
import i18n from '../../language';
import './footer.scss';

class Footer extends Component {
  render() {
    const phone = '789 98789 8898';
    const mail = '17623@gmail.com';
    return (
      <div className="summary-wrapper-dark">
        <div className="footer-content-wrapper text-tiny-light">
          <Logo />
          <p className="footer-text-share">{i18n.t('share_text')}</p>
          <ContactUs />
          <p className="footer-text-contract">{ i18n.t('contract_us') }</p>
          <a className="footer-text-phone" href={`tel://${phone}`}>+{phone}</a>
          <a className="footer-text-mail" href={`mailto://${mail}`}>{mail}</a>
          <div className="line-light" />
          <div className="footer-statement">
            <span className="right-gap">{i18n.t('service_clause')}</span>
            <span>{i18n.t('privacy_statement')}</span>
          </div>
          <p className="footer-copyright">Copyright &copy; 2018, Crypto ICO. achq Designed by achq</p>
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

export default connect(mapStateToProps)(Footer);
