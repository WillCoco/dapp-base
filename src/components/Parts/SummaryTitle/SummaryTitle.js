import React from 'react';
import './summaryTitle.scss';

const SummaryTitle = (props) => {
  return (
    <div className={props.light ? 'summary-title-light-1' : 'summary-title-dark-1'}>
      <span className={props.light ? 'title-small-light' : "title-small-dark"}>{props.index}</span>
      <span className={props.light ? 'summary-title-barrier-light' : 'summary-title-barrier-dark'}/>
      <span className={props.light ? 'title-small-light' : 'title-small-dark'} style={{fontSize: 18}}>{props.title}</span>
    </div>
  )
};

export default SummaryTitle;
