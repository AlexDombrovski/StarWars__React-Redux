import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import PlanetDetails from '../planet-details';

import './page-planets.css'


class PagePlanets extends React.Component {

  componentDidMount() {
    this.props.actions.getAllPlanets();
  }

  render() {
    const { allPlanets, planetData, actions } = this.props;

    const viewAllPlanets = allPlanets.map(item => {
      const { name: planetName, population, rotation_period: rotationPeriod, diameter, climate } = item;
      return (
        <li className="list-group-item" key={planetName} onClick={() => actions.showPlanetCard({
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
    allPlanets: state.allPlanets,
    planetData: state.planetData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePlanets);