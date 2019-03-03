import React, {Component} from 'react';

const getHighlightedText = (text, highlight) => {
  // Split text on higlight term, include term itself into parts, ignore case
  var parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <font color={"#fff"}>{part}</font> : part)}</span>;
}

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
            <div className="detail">Kcal &emsp;&nbsp; <span>{this.props.item.kcal}</span> </div>
            <div className="detail">Protien &nbsp;<span>{this.props.item.protien}</span> </div>
            <div className="detail">Fat &emsp;&nbsp;&nbsp;&nbsp; <span>{this.props.item.fat}</span> </div>
          </div>
        </div>
        <div className="food-name"> 
          {getHighlightedText(this.props.item.name, this.props.query)}
        </div>
      </div>
    );
  }
}