import React from 'react';
import { Link } from 'react-router-dom';

import SwapiService from '../../services/swapi-service.js';

import './starship-card.css';


export default class StarshipCard extends React.Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    model: null,
    length: null,
    cargoCapacity: null,
    passengers: null
  };

  async showStarshipCard() {
    const id = 5;
    const starship = await this.swapiService.getOneStarship(id);
    console.log(starship);
    this.setState({
      id,
      name: starship.name,
      model: starship.model,
      length: starship.length,
      cargoCapacity: starship.cargo_capacity,
      passengers: starship.passengers
    });
  }

  componentDidMount() {
    this.showStarshipCard();
  }

  render() {

    const { id, name, model, length, cargoCapacity, passengers } = this.state;
    const shipData = [
      {
        name: 'Model: ',
        value: model
      },
      {
        name: 'Length: ',
        value: length
      },
      {
        name: 'Cargo Capacity: ',
        value: cargoCapacity
      },
      {
        name: 'Passengers: ',
        value: passengers
      }
    ];

    const viewShipData = shipData.map(item => {
      return (
        <li className="list-group-item" key={item.name}>
          <span className="term">{item.name}</span>
          <span>{item.value}</span>
        </li>
      );
    });

    return (
      <div className="starship-details__home">
        <img className="starship-image__home" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt={name} />
        <div className="card-body__home">
          <h4 className="starship-title__home">{name}</h4>
          <ul className="item-list list-group list__home">
            { viewShipData }
          </ul>
          <Link to="/starships">
            <button type="button" className="more-starships">More starships</button>
          </Link>
        </div>
      </div>
    );
  }
}