import React from 'react';
import Inventory from '../Pages/Inventory/Inventory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import '../styles/_master.scss';
import Location from '../Pages/location/Location';


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Inventory exact path="/inventory"/>
            <Location exact path="/locations"/> {/* comment out inventory or location to see page each page individually */}
          </Switch>
      </BrowserRouter>
  );
}

export default App;
