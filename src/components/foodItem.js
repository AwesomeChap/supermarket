import React, {Component} from 'react';

export default class FoodItem extends Component{
  constructor(props){
    super(props);
  }

  handleSelect = () => {
    this.props.onSelect(this.props.item);
  }

  render(){
    return(
      <div onClick={this.handleSelect} className="food-item-wrapper">
        <div className="food-item">
          <img src={this.props.item.imgUrl} alt=""/>
          <div className="details">
            <div className="detail">Kcal &emsp;&nbsp;: {this.props.item.kcal}</div>
            <div className="detail">Protien : {this.props.item.protien}</div>
            <div className="detail">Fat &emsp;&nbsp;&nbsp;&nbsp;: {this.props.item.fat}</div>
          </div>
        </div>
        <div className="food-name">{this.props.item.name}</div>
      </div>
    );
  }
}