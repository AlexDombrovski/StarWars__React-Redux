import React, { Component } from "react";
import Header from '../header';
import HomePage from '../home';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import PagePlanets from '../page-planets';
//import PlanetDetails from '../planet-details';

import PageStarships from '../page-starships';
import PagePeople from '../page-people';


import './App.css';

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <Redirect to="/home" />
                <Header />
                <Route path="/home" component={HomePage} />
                <Route path="/planets" component={PagePlanets} />
                <Route path="/starships" component={PageStarships} />
                <Route path="/people" component={PagePeople} />
            </BrowserRouter>
        );
    }
}

export default App;
