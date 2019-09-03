import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SwapiService from '../../services/swapi-service.js';
import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  componentDidMount() {
    this.updatePlanet();
  }

  async updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;

    const planet = await this.swapiService.getPlanet(id);
    this.setState({
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    });
  }

  render() {

    const { id, name, population, rotationPeriod, diameter } = this.state;

    const datePlanet = [
      {
        name: 'Population',
        value: population
      },
      {
        name: 'Rotation Period',
        value: rotationPeriod
      },
      {
        name: 'Diameter',
        value: diameter
      }
    ];

    const listItems = datePlanet.map(item => {
      return (
        <li className="list-group-item" key={item.name}>
          <span className="term">{item.name}</span>
          <span>{item.value}</span>
        </li>
      );
    });


    return (
      <div className="random-planet">
        {id && <img className="planet-image" 
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />}
        <div className="random-card">
          <h4 className="random-planet__title">{name}</h4>
          <ul className="list-group">
            {listItems}
          </ul>
        </div>
        <Link to="/planets">
          <button type="button" className="more-planets">More planets</button>
        </Link>
      </div>
    );
  }
}