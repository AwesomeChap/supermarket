import React, {Component} from 'react';
import Header from './components/header';
import Search from './components/search';
import Selected from './components/selectedItems';
import FoodItems from './components/foodItems';
import axios from 'axios';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      foodItems : [],
      selectedItems : []
    };
  }

  handleSelect = (item) => {
    this.setState((prevState)=>{
      prevState.selectedItems.push(item);
      return{
        selectedItems : prevState.selectedItems
      }
    });
  }

  handleDelete = (item) => {
    this.setState((prevState)=>{
      var index = prevState.selectedItems.indexOf(item);
      console.log(index);
      if( index > -1){
        prevState.selectedItems.splice(index,1);
      }
      return{
        selectedItems : prevState.selectedItems
      }
    })
  }

  handleInputChange = (value) => {
    axios.get(`/api/items?q=${value}`).then((res) => {
      this.setState({foodItems : res.data.data});
    }).catch(e => console.log(e));
  } 

  render(){
    return(
      <div className="app-container">
        <div className="item1 item"><Header items={this.state.selectedItems.length} /></div>
        <div className="item2 item"><Search onChange={this.handleInputChange}/></div>
        <div className="item3 item"><FoodItems onSelect={this.handleSelect} foodItems={this.state.foodItems}/></div>
        <div className="item4 item"><Selected onDelete={this.handleDelete} items={this.state.selectedItems} /></div>
      </div>
    )
  }
}
