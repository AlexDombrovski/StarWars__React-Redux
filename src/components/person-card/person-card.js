import React from 'react';
import { Link } from 'react-router-dom';

import SwapiService from '../../services/swapi-service.js';

import './person-card.css';

export default class PersonCard extends React.Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    gender: null,
    birthYear: null,
    eyeColor: null
  };

  componentDidMount() {
    this.getPerson();
  }

  async getPerson() {
    const id = Math.floor(Math.random() * 25) + 2;
    const person = await this.swapiService.getOnePerson(id);
    
    this.setState({
      id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    });

  }



  render() {

    const { id, name, gender, birthYear, eyeColor} = this.state;

    const personData = [
      {
        name: 'Gender: ',
        value: gender
      },
      {
        name: 'BirthYear: ',
        value: birthYear
      },
      {
        name: 'eyeColor: ',
        value: eyeColor
      }
    ];

    const persons = personData.map(item => {
      return (       
          <li className="list-group-item" key={item.name}>
            <span className="term">{item.name}</span>
            <span>{item.value}</span>
          </li>         
      );
    });

    return (
      <div className="person-details__home">
        {id && <img className="person-image__home" 
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name} />}
        <div className="card-body__home">
          <h4 className="person-title__home">{name}</h4>
          <ul className="item-list list-group list__home">
            { persons }
          </ul>
          <Link to="/people">
          <button type="button" className="more-persons">More persons</button>
        </Link>
        </div>
      </div>
    );
  }
}