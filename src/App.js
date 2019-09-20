import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map'

import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'
import PortfolioPage from './pages/PortfolioPage'
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/map" component={MapPage}/>
      <Route exact path="/portfolio" component={PortfolioPage}/>
      <Route exact path='/resume' component={ResumePage}/>
    </Switch>
  );
}

export default App;
