import React from 'react';
import '../../public/scss/selected.scss';

export default (props) => (
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
        <tr>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
        </tr>
        <tr>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
        </tr>
        <tr>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
        </tr>
      </tbody>
    </table>
  </div>
);