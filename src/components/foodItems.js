import React, {Component} from 'react';
import FoodItem from './foodItem';
var ScrollArea = require('react-scrollbar');
import '../../public/scss/foodItems.scss';

export default class FoodItems extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const foodItems = this.props.foodItems.map((item)=>{
      return(
        <FoodItem key = {item.name} item = {item} />
      );
    });
    return(
      // <ScrollArea>
        <div className="food-items">
          {foodItems}
        </div>      
      // </ScrollArea>
    );
  }
}