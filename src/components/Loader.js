import React, {Component} from 'react';

export default class Loader extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="loader-wrapper">
        <div className="loader">
          <div className="text">Fetching Content</div>
          <div className="bar"></div>
        </div>
      </div>
    );
  }
}