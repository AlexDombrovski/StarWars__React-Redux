import React from 'react';

import SwapiService from '../../services/swapi-service.js';

import './person-list.css';

export default class PersonList extends React.Component {

  swapiService = new SwapiService();

  state = {
    number: null,
    name: null
  };

  componentDidMount() {
    this.updatePeople();
  }

  async updatePeople() {
    const number = Math.floor(Math.random() * 125) + 2;
    const people = await this.swapiService.getAllPeople(number);

    this.setState({
      number,
      name: people.name
    });
  }

  render() {

    const {name} = this.state;

    return ( 
        <ul className="item-list list-group">
          <li className="list-group-item">
            {name}
          </li>
          <li className="list-group-item">
            {name}
          </li>
          <li className="list-group-item">
            {name}
          </li>
        </ul>
    );
  }
}