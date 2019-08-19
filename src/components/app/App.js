import React, { Component } from "react";
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import ItemList from '../item-list';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <ItemList />
                <PersonDetails />
            </div>
        );
    }
}

export default App;
