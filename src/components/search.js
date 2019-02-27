import React, {Component} from 'react';
import '../../public/scss/search.scss';

export default class Search extends Component{
  constructor(props){
    super(props);
    this.state = {value : ''};
  }

  handleChange = (e) => {
    this.setState({value : e.target.value},()=>{
      this.props.onChange(this.state.value);
    });
  }

  clear = () => {
    this.setState({value:''});
  }

  render(){
    return(
      <div className="search-section">
        <p>Search <span>here</span></p>
        <div className="input-container">
          <input 
            value={this.state.value}
            onChange={this.handleChange} 
            placeholder={"Tea, Biscuit, Namkeen, etc"} 
            type="text" className="input"
          />
          <div onClick={this.clear} className="close-icon">
            {!this.state.value ? (<i className="fas fa-search"></i>) : (<i className="fas fa-times"></i>)}
          </div>
        </div>
      </div>
    );
  }
}
