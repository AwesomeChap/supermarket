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
        <FoodItem onSelect={this.props.onSelect} key = {item.name} item = {item} />
      );
    });
    return(
      // <ScrollArea>
        <div className="food-items">
          {foodItems}
          <div className="info">
            <ul>
              <li>For insertion of items into the selected list, you may search and select any item from above section.</li>
              <li>For deletion of items from the selected list, you may Click on any row from above selected items section.</li>
              <li>Data displayed here is 100% incorrect. Please do not get confused with real details of product displayed.</li>
            </ul>
          </div>
        </div>      
      // </ScrollArea>
    );
  }
}