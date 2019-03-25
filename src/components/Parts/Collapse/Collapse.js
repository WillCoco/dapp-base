import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import './collapse.scss'

class Collapse extends Component {
  static defaultProps = {
    title: 'title',
    text: 'text',
    defaultOpened: false,
    className: undefined,
    containerStyle: undefined
  };

  state = {
    open: this.props.defaultOpened
  };

  textHeight;

  textDom;

  componentDidMount() {
    this.textDom = findDOMNode(this.text);
    setTimeout(() => {
      this.textHeight = getComputedStyle(this.textDom).height;
      this.textDom.style.position = 'static';
      this.textDom.style.height = 0;
    }, process.env.NODE_ENV === 'development' ? 3000 : 0)

  }

  toggle = () => {
    this.setState(({open}) => ({open: !open}), () => {
      if (this.state.open) {
        this.textDom.style.height = this.textHeight;
        this.textDom.style.margin = '0 0.4rem 0.2rem 0.4rem';
      } else {
        this.textDom.style.height = '0px';
        this.textDom.style.margin = '0 0.4rem';
      }
    });
  };

  render() {
    const icon = this.state.open ? '-' : '+';
    const className = !this.props.className ? 'parts-collapse-wrapper' : `parts-collapse-wrapper ${this.props.className}`;
    return (
      <div className={className} style={this.props.containerStyle}>
        <div onClick={this.toggle} className="parts-collapse-title-wrapper">
          <span className="parts-collapse-icon">{icon}</span> <span className="parts-collapse-title">{this.props.title}</span>
        </div>
        <p
          ref={(c) => this.text = c }
          className="parts-collapse-text"
        >
          {this.props.text}
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    icoInfo: state.icoInfo || {}
  };
}

export default connect(mapStateToProps)(Collapse);
