import React from 'react';

import SwapiService from '../../services/swapi-service.js';

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

  showPersonsCard = (data) => {
    this.setState({ personData: data });
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
        <ul className="item-list list-group">
          {allNames}
        </ul>
      </div>
    );
  }
}