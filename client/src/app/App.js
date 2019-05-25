import React from 'react';
import Inventory from '../Pages/Inventory/Inventory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import '../styles/scss/_master.scss';
import Location from '../Pages/location/Location';


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Inventory exact path="/inventory"/>
            <Location exact path="/locations"/> 
          </Switch>
      </BrowserRouter>
  );
}

export default App;
