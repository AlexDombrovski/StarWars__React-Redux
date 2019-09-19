import React from 'react';
import { connect } from 'react-redux';


import PlanetDetails from '../planet-details';

import './page-planets.css'


class PagePlanets extends React.Component {

  showPlanetCard = (data) => {
    this.setState({ planetData: data });
  }

  render() {
    const { allPlanets, planetData } = this.props;

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

const mapStateToProps = (state) => {
  return {
    planetData: state.planetData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePlanets);