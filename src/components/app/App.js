import React, { Component } from "react";
import Header from '../header';
import HomePage from '../home';
import { BrowserRouter, Route } from 'react-router-dom';
import PagePlanets from '../page-planets';
//import PlanetDetails from '../planet-details';

import PageStarships from '../page-starships';
import PagePeople from '../page-people';
import Tasks from '../tasks';


import './App.css';

class App extends Component {

    render() {

        return (
            <BrowserRouter>               
                <Header />
                <Route path="/home" component={HomePage} />
                <Route path="/people" component={PagePeople} />
                <Route path="/planets" component={PagePlanets} />
                <Route path="/starships" component={PageStarships} />
                <Route path="/tasks" component={Tasks} />
                {/* <Redirect to="/home" from="/" /> */}
            </BrowserRouter>
        );
    }
}

export default App;
