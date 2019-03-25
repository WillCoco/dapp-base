import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Button } from 'element-react';
import LanguagePicker from '../Parts/LanguagePicker/LanguagePicker';
import { login } from '../../actions';
import i18n from '../../language';
import './header.scss';

class Link extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState(({ open }) => ({
      open: !open
    }))
  };

  render() {
    const { identity,  } = this.props;
    return (
      <Layout.Row className="header-wrapper">
        <Layout.Col span="12" className="header-logo-box">
          <span className="header-logo">logo</span>
          <span className="title-subhead-light">APPName</span>
        </Layout.Col>
        <Layout.Col span="8" className="header-menu-btn-box">
          <div className="login-wrapper">
            {
              identity ?
                <p className="login-account-name text-small-light">{ identity.name }</p>:
                <Button size="mini" type="text" onClick={this.props.login}>
                  <p className="login-btn">登陆</p>
                </Button>
            }
          </div>
        </Layout.Col>
        <Layout.Col span="4" className="header-menu-btn-box">
          <div onClick={this.toggle} className="header-menu-btn">
            {
              this.state.open ?
                <i className="el-icon-close header-menu-icon" /> :
                <i className="el-icon-edit header-menu-icon" />
            }
          </div>
        </Layout.Col>
        {
          this.state.open &&
          (
            createPortal(
              (
                <div onClick={this.toggle} className="header-menu-modal">
                  <div onClick={(e) => e.stopPropagation() } className="header-menu-content">
                    <a className="header-link" href="#introduce" onClick={this.toggle} >{i18n.t('introduce')}</a>
                    <p className="header-link" href="#dapp">{i18n.t('token_sell')}</p>
                    <p className="header-link" href="#dapp">{i18n.t('dapp')}</p>
                    <p className="header-link" href="#dapp">{i18n.t('FAQ')}</p>
                    <p className="header-link" href="#dapp">{i18n.t('contract_us')}</p>
                    <LanguagePicker />
                  </div>
                </div>
              ),
              document.getElementById('root')
            )
          )
        }
      </Layout.Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    identity: state.identity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
