import React, {Component} from 'react';

export default class Wrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible : false
    };
  }

  handleClick = () => {
    this.setState({visible : true})
  }

  render(){
    return(
      <>
        {this.state.visible ? (
          <>
            {this.props.children}
          </>
        ):(
          <div className="wrapper">
            <div className="image">
              <img src="https://cognigen-cellular.com/images/grocery-clipart-grocery-flyer.png" alt=""/>
            </div>
            <div className="content-block">
              <div className="content">
                <div className="heading">Super<span>Market</span> <span>FoodInfo</span></div>
                <div onClick={this.handleClick} className="button">Get Started <span>Get Started</span> </div>
                <div className="text">This Application will give you information related to your Food Item like Kcal, Protien, etc and also let you compare between any two food Items or as many you want!</div>
              </div>
            </div>
          </div>
        )}   
      </>
    )
  }
}