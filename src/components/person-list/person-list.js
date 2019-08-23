import React from 'react';

import SwapiService from '../../services/swapi-service.js';

import './person-list.css';

export default class PersonList extends React.Component {

  swapiService = new SwapiService();

  state = {
    allPeople: []
  };

  componentDidMount() {
    this.setStatePeople();
  }

  async setStatePeople() {
    const peoples = await this.swapiService.getAllPeople();
    this.setState({ allPeople: peoples });
    console.log(peoples);
  }



  render() {

    const { allPeople } = this.state;
    const { call } = this.props;

    const allNames = allPeople.map((item) => {
      const { name, gender, birth_year, eye_color } = item;
      return (
        <li className="list-group-item" key={name} onClick={() => call({ name, gender, birthYear: birth_year, eyeColor: eye_color })}>
          {name}
        </li>
      );
    });

    return (
      <ul className="item-list list-group">
        {allNames}
      </ul>
    );
  }
}