import React from 'react';

import RandomPlanet from '../random-planet';
import PersonCard from '../person-card';
import StarshipCard from '../starship-card';


export default class HomePage extends React.Component {

  render() {
  
    return(
      <div className="container">
        <RandomPlanet />
        <PersonCard />
        <StarshipCard />
      </div>
    );
  }
}