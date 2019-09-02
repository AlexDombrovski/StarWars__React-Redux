import React from 'react';
import StarshipDetails from '../starship-details';
import SwapiService from '../../services/swapi-service.js';

import './page-starships.css';

export default class PageStarships extends React.Component {

  swapiService = new SwapiService();

  state = {
    allStarships: [],
    shipCard: {}
  }

  async setStateStarships() {
    const ships = await this.swapiService.getAllStarships();
    this.setState({ allStarships: ships });
  }

  componentDidMount() {
    this.setStateStarships();
  }

  showShipCard(data) {
    this.setState({ shipCard: data });    
  }

  render() {

    const { allStarships, shipCard } = this.state;
    
    const allModels = allStarships.map((item) => {
      const { name, model, length, cargo_capacity, passengers } = item;
      return (
        <li className="list-group-item item-img" key={name} onClick={() => this.showShipCard({ name, model, length, cargoCapacity: cargo_capacity, passengers })}>
          {name}
        </li>
      );
    });

    return (
      <div className="container page-starship">
        <h4 className="starships-title">Starships</h4>
        <div className="page-starship__desc">
          <ul className="item-list list-group starship-list">
            {allModels}
          </ul>
          {shipCard.name && <StarshipDetails shipCard={ shipCard } />}
        </div>
      </div>
    );
  }
}