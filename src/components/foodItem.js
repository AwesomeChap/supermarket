import React from 'react';

export default (props) => (
  <div className="food-item-wrapper">
    <div className="food-item">
      <img src={props.item.imgUrl} alt=""/>
      <div className="details">
        <div className="detail">Kcal &emsp;&nbsp;: {props.item.kcal}</div>
        <div className="detail">Protien : {props.item.protien}</div>
        <div className="detail">Fat &emsp;&nbsp;&nbsp;&nbsp;: {props.item.fat}</div>
      </div>
    </div>
    <div className="food-name">{props.item.name}</div>
  </div>
);