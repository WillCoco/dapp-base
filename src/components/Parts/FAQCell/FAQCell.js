import React from 'react';
import { Collapse } from 'element-react';
import './FAQCell.scss';

const FAQCell = (props) => {
  return (
    <div className="FAQ-wrapper">
      <p className="">{props.question}</p>
      <span className="">{props.answer}</span>
    </div>
  )
};

export default FAQCell;
