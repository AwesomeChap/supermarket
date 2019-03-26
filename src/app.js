import React, {Component} from 'react';
import Header from './components/header';
import Search from './components/search';
import Selected from './components/selectedItems';
import FoodItems from './components/foodItems';
import Loader from './components/loader';
import Wrapper from './components/wrapper';
import axios from 'axios';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      foodItems : [],
      selectedItems : [],
      width: document.documentElement.clientWidth,
      loaded : false,
      query:null,
    };
  }

  updateDimensions = () => {
    this.setState({width: document.documentElement.clientWidth});
  }

  componentDidMount(){
    console.log(this.state.width);
    window.addEventListener("resize", this.updateDimensions);
    setTimeout(()=>{
      this.setState({loaded : true})
    },3400);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
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
      this.setState({foodItems : res.data.data, query:value});
    }).catch(e => console.log(e));
  } 

  render(){
    return(
      <div className="app-container">
        { 
            this.state.width > 768 ? 
            (
              <>
                {
                  this.state.loaded ? (
                    <Wrapper>
                      <div className="item1 item"><Header items={this.state.selectedItems.length} /></div>
                      <div className="item2 item"><Search onChange={this.handleInputChange}/></div>
                      <div className="item3 item"><FoodItems query={this.state.query} onSelect={this.handleSelect} foodItems={this.state.foodItems}/></div>
                      <div className="item4 item"><Selected onDelete={this.handleDelete} items={this.state.selectedItems} /></div>
                    </Wrapper>
                  ) : (<Loader/>)
                }
              </> 
            ):(
              <div className="item5 item">
                <div className="text">
                  <span>Current resolution is less than 768px.</span>
                  This site is supposed to be opened in desktops only. So, Please open it in a desktop or open in greater resolution if already opened in desktop. 
                </div>
              </div>
            )
          }
      </div>
    )
  }
}
