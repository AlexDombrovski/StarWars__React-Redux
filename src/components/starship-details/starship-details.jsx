import React from 'react';
import './starship-details.css';


export default class StarshipDetails extends React.Component {

  render() {

    const { shipCard } = this.props;
    const { name, model, length, cargoCapacity, passengers} = shipCard;
    const urlByName = {
      'Executor': 'https://starwars-visualguide.com/assets/img/starships/15.jpg',
      'Sentinel-class landing craft': 'https://starwars-visualguide.com/assets/img/starships/5.jpg',
      'Death Star': 'https://starwars-visualguide.com/assets/img/starships/9.jpg',
      'Millennium Falcon': 'https://starwars-visualguide.com/assets/img/starships/10.jpg'
    };

    return(
      <div className="container starship-details">
        <img src={urlByName[name]} className="starship-img" alt={name}/>
        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Model:</span>
              <span> { model }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Length:</span>
              <span> { length }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Cargo capacity:</span>
              <span> { cargoCapacity }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Passengers:</span>
              <span> { passengers }</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}