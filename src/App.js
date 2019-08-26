import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map'

import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/map" component={MapPage}/>
    </Switch>
  );
}

export default App;
