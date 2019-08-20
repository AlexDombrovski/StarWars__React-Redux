import React, { Component } from "react";
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import PersonList from '../person-list';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PersonList />
                <PersonDetails />
            </div>
        );
    }
}

export default App;
