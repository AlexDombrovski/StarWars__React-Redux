import React from 'react';

import RandomPlanet from '../random-planet';
import PersonList from '../person-list';


export default class HomePage extends React.Component {

  render() {
  
    return(
      <div className="container">
        <RandomPlanet />
        <PersonList />
        {/* <div className="container persons">
          <PersonList call={this.call} />
          {personData.name && <PersonDetails personData={personData} />}
        </div>                    */}
      </div>
    );
  }
}