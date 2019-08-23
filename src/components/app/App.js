import React, { Component } from "react";
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import PersonList from '../person-list';

import './App.css';

class App extends Component {

    state = {
        personData: {}
    }

    call = (data) => {
        this.setState({ personData: data });
    }
    render() {
        const { personData } = this.state;

        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="container persons">
                    <PersonList call={this.call} />
                    {personData.name && <PersonDetails personData={personData} />}
                </div>
            </div>
        );
    }
}

export default App;
