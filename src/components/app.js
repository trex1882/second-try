import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PortfolioContainer from "./Portfolio/portfolio-container.js";
import NavigationContainer from "./navigation/navigation-container.js"
import Home from "./Pages/home.js"
import About from "./Pages/about.js"
import Contact from "./Pages/contact.js"
import Blog from "./Pages/blog.js"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>

        <h1>number two page</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
