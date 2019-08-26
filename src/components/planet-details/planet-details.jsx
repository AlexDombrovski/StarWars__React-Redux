import React from 'react';

import './planet-details.css';


export default class PlanetDetails extends React.Component {

  render() {

    return (
      <div className="planets-details">
        <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="person-image" alt=""></img>
        <div className="container card-body">
          <h4>Name of Planet</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population: </span>
              <span>3000000000</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period: </span>
              <span>25</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter: </span>
              <span>11000</span>
            </li>
            <li className="list-group-item">
              <span className="term">Climate: </span>
              <span>temperate</span>
            </li>
            <li className="list-group-item">
              <span className="term">Terrain: </span>
              <span>grasslands, mountains</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}