import React, { Component } from "react";
import HomePage from '../home';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import PagePlanets from '../page-planets';


import './App.css';

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <Redirect to="/home" />
                <Route path="/home" component={HomePage} />
                <Route path="/planets" component={PagePlanets} />
            </BrowserRouter>
        );
    }
}

export default App;
