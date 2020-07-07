import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PortfolioContainer from "./Portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container.js"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        
        <Router>
          <div>
            
          </div>
        </Router>

        <h1>number two page</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
