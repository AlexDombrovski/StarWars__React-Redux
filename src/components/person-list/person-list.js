import React from 'react';

import SwapiService from '../../services/swapi-service.js';

import './person-list.css';

export default class PersonList extends React.Component {

  swapiService = new SwapiService();

  state = {
    allPeople: [],
    personData: {}
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

    const persons = allPeople.map((item) => {
      const { name, gender, birth_year: birthYear, eye_color: eyeColor } = item;
      return (       
          <li className="list-group-item" key={name}>
            { name }
          </li>         
      );
    });

    return (
      <ul className="item-list list-group">
        { persons }
      </ul>
    );
  }
}