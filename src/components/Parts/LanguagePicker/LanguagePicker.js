import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dropdown } from 'element-react';
import { changeLanguage } from '../../../actions/index';
import './languagePicker.scss';

class LanguagePicker extends Component {
  handleCommand = (lang) => {
    this.props.changeLanguage(lang)
  };

  render() {
    const { i18n } = this.props;
    return (
      <Dropdown
        trigger="click"
        onCommand={this.handleCommand}
        menu={(
          <Dropdown.Menu className="language-picker-menu">
            {
              i18n.languages.map(lang =>
                (<Dropdown.Item className="language-picker-item" key={`language-${lang}`} command={lang}>{i18n.getFixedT(lang)('language')}</Dropdown.Item>)
              )
            }
          </Dropdown.Menu>
        )}
      >
      <span className="el-dropdown-link title-small-light">
        {i18n.t('language')}<i className="el-icon-arrow-down"></i>
      </span>
      </Dropdown>
    )
  }
}

function mapStateToProps(state) {
  return {
    i18n: state.i18n,
    language: state.language
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeLanguage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagePicker);
