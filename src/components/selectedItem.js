import React, {Component} from 'react';

export default class SelectedItem extends Component{
  constructor(props){
    super(props);
  }

  handleDelete = () => {
    this.props.onDelete(this.props.item);
  }

  render(){
    return(
      <tr onClick={this.handleDelete} >
        <td>{this.props.item.name}</td>
        <td>{this.props.item.kcal}</td>
        <td>{this.props.item.protien}</td>
        <td>{this.props.item.fat}</td>
      </tr>
    );
  }
}