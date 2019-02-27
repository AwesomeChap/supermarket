import React, {Component} from 'react';
import Header from './components/header';
import Search from './components/search';
import Selected from './components/selected';
import axios from 'axios';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  handleInputChange = (value) => {
    // console.log(value);
    axios.get(`/api/items?q=${value}`).then(({data}) => {
      console.log(data);
    }).catch(e => console.log(e));
  } 

  render(){
    return(
      <div className="app-container">
        <div className="item1 item"><Header items={0} /></div>
        <div className="item2 item"><Search onChange={this.handleInputChange}/></div>
        <div className="item3 item">3</div>
        <div className="item4 item"><Selected /></div>
      </div>
    )
  }
}
