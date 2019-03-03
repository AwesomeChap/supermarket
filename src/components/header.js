import React from 'react';
import '.././../public/scss/header.scss';

export default (props) => (
  <div className="header-section">
    <div className="heading">
      <h1>Super<span>Market</span> <font color="#666">Food-info</font> </h1>
    </div>
    <div className="cart">
      You have Selected <span>{props.items}</span> item{props.items > 1 ?'s' : ''}
    </div>
  </div>
)