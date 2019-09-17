import React from 'react';


import SwapiService from '../../services/swapi-service';
import PlanetDetails from '../planet-details';

import './page-planets.css'


export default class PagePlanets extends React.Component {

  state = {
    allPlanets: [],
    planetData: {}
  }

  swapiService = new SwapiService();

  getAllPlanets = async () => {
    const res = await this.swapiService.getAllPlanets();
    this.setState({ allPlanets: res });
  }

  componentDidMount() {
    this.getAllPlanets();
  }

  showPlanetCard = (data) => {
    this.setState({ planetData: data });
  }

  render() {
    const { allPlanets, planetData } = this.state;

    const viewAllPlanets = allPlanets.map(item => {
      const { name: planetName, population, rotation_period: rotationPeriod, diameter, climate } = item;
      return (
        <li className="list-group-item" key={planetName} onClick={() => this.showPlanetCard({
          planetName, population,
          rotationPeriod, diameter, climate
        })}>
          {planetName}
        </li>
      );
    });

    return (
      <div className="container list-group">
        <h4 className="planets-title">
          All Planets
        </h4>
        <div className="planets-desc">
          <ul className="item-list list-group planets-list">
            {viewAllPlanets}
          </ul>
          {planetData.planetName && <PlanetDetails planetData={planetData} />}
        </div>
      </div>
    );
  }
}