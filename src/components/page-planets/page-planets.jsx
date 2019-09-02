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
    this.setState({allPlanets: res});
    console.log(res);
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
      const { name: planetName, population, rotation_period: rotationPeriod, diameter, climate, terrain } = item;
      return (
        <li className="list-group-item" key={planetName} onClick={() => this.showPlanetCard({ planetName, population,
          rotationPeriod, diameter, climate, terrain })}>
          {planetName}
        </li>
      );
    });

    return(
      <div className="container list-group">
        <ul className="item-list list-group">
          {viewAllPlanets}
        </ul>
        <PlanetDetails planetData={ planetData }/>
      </div>
    );
  }
}