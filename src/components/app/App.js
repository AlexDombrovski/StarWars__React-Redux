import React, { Component } from "react";
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import PersonList from '../person-list';

import './App.css';

class App extends Component {
    call = (name) => {
        console.log(name);
    }
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PersonList call={this.call} />
                <PersonDetails />
            </div>
        );
    }
}

export default App;
