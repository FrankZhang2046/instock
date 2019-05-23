import React from 'react';
import Inventory from '../Pages/Inventory/Inventory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import '../styles/styles.scss';
import Warehouse from '../components/Warehouse/Warehouse';
import Location from '../Pages/location/Location';


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Switch>
            <WarehouseData exact path="/warehouse" />
            <Inventory exact path="/inventory"/>
            <Location exact path="/locations"/> comment out inventory or location to see page each page individually
          </Switch>
      </BrowserRouter>
  );
}

export default App;
