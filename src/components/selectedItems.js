import React, {Component} from 'react';
import SelectedItem from './selectedItem';
import '../../public/scss/selected.scss';

export default class selected extends Component{
  constructor(props){
    super(props);
  }

  handleDelete = () => {
    this.props.onDelete(item);
  }

  render(){
    const items = this.props.items.map( (i,index) => {
      return(
        <SelectedItem onDelete={this.props.onDelete} item={i} key={index} />
      );
    })
    return(
      <div className="selected-section">
        <div className="heading">Selected Items</div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Kcal</th>
              <th>Protein <span>(g)</span> </th>
              <th>Fat <span>(g)</span> </th>
            </tr>
          </thead>
          <tbody>
            {items.length ? <>{items}</> : <tr><td colSpan='4'><div /*className="init-msg"*/>No Food Item Selected</div></td></tr> }
          </tbody>
        </table>
      </div>
    );
  }
}