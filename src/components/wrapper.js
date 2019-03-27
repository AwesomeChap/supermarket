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
                <div className="text">
                  Health play's a vital role in everybody's life.
                  In order to stay healthy it becomes important to know that what you eat and what it's composed of.
                  So click above, to choose items that suits you. 
                </div>
              </div>
            </div>
          </div>
        )}   
      </>
    )
  }
}