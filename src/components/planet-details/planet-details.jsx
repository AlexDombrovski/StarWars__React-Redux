import React from 'react';

import './planet-details.css';


export default class PlanetDetails extends React.Component {

  render() {

    const { planetName, population, rotationPeriod, diameter, climate } = this.props.planetData;

    return (
      <div className="planets-details">
        <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="person-image" alt=""></img>
        <div className="container planets-card-body">
          <h4>{ planetName }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population: </span>
              <span>{ population }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period: </span>
              <span>{ rotationPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter: </span>
              <span>{ diameter }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Climate: </span>
              <span>{ climate }</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}