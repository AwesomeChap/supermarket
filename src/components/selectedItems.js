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
    const items = this.props.items.map( i => {
      return(
        <SelectedItem onDelete={this.props.onDelete} item={i} key={i.name} />
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
              <th>Protein(g)</th>
              <th>Fat(g)</th>
            </tr>
          </thead>
          <tbody>
            <>{items}</>
          </tbody>
        </table>
      </div>
    );
  }
}