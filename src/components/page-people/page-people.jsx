import React from 'react';

import SwapiService from '../../services/swapi-service.js';
import PersonDetails from '../person-details';

import './page-people.css';

export default class PagePeople extends React.Component {

  swapiService = new SwapiService();

  state = {
    allPeople: [],
    personData: {}
  }

  async setStatePeople() {
    const peoples = await this.swapiService.getAllPeople();
    this.setState({ allPeople: peoples });
  }

  componentDidMount() {
    this.setStatePeople();
  }


  render() {

    const { allPeople, personData } = this.state;

    const allNames = allPeople.map((item) => {
      const { name, gender, birth_year, eye_color } = item;
      return (
        <li className="list-group-item" key={name} onClick={() => this.showPersonsCard({ name, gender, birthYear: birth_year, eyeColor: eye_color })}>
          {name}
        </li>
      );
    });

    return (
      <div className="container page-people">
        <h4 className="people-title">All persons</h4>
        <div className="page-people__desc">
          <ul className="item-list list-group page-people__list">
            {allNames}
          </ul>
          {personData.name && <PersonDetails personData={ personData }/>}
        </div>
      </div>
    );
  }
}