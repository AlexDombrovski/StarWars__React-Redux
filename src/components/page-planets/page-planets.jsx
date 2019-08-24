import React from 'react';

import './page-planets.css'


export default class PagePlanets extends React.Component {

  render() {
    return(
      <div className="container list-group">
        <ul className="item-list list-group">
          <li className="list-group-item">
            Polis Massa
          </li>
          <li className="list-group-item">
            Saleucami
          </li>
          <li className="list-group-item">
            Mygeeto
          </li>
        </ul>
      </div>
    );
  }
}