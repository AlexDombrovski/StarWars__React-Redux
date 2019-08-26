import React from 'react';
import SwapiService from '../../services/swapi-service';

import './page-planets.css'


export default class PagePlanets extends React.Component {

  state = {
    allPlanets: [],
    planetsData: {}
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

  call = (data) => {
    this.setState({ planetsData: data });
  }

  render() {
    const { allPlanets } = this.state;

    const viewAllPlanets = allPlanets.map(item => {
      return (
        <li className="list-group-item" key={item.name} onClick={() => this.call({ })}>
          {item.name}
        </li>
      );
    });

    return(
      <div className="container list-group">
        <ul className="item-list list-group">
          {viewAllPlanets}
        </ul>
      </div>
    );
  }
}