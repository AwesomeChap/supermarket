import React, {Component} from 'react';
import Header from './components/header';
import Search from './components/search';
import Selected from './components/selected';
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

  handleInputChange = (value) => {
    axios.get(`/api/items?q=${value}`).then((res) => {
      this.setState({foodItems : res.data.data});
    }).catch(e => console.log(e));
  } 

  render(){
    return(
      <div className="app-container">
        <div className="item1 item"><Header items={0} /></div>
        <div className="item2 item"><Search onChange={this.handleInputChange}/></div>
        <div className="item3 item"><FoodItems foodItems={this.state.foodItems}/></div>
        <div className="item4 item"><Selected /></div>
      </div>
    )
  }
}
