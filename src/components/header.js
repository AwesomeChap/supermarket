import React from 'react';
import '.././../public/scss/header.scss';

export default (props) => (
  <div className="header-section">
    <div className="heading">
      <h1>Super<span>Market</span></h1>
    </div>
    <div className="cart">
      You have Selected <span>{props.items}</span> items
    </div>
  </div>
)