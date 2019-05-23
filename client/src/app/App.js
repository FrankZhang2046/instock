import React from 'react';
import Inventory from '../Pages/Inventory/Inventory';
import { BrowserRouter, Switch } from 'react-router-dom';
// import NavBar from '../components/NavBar/NavBar';
import '../styles/scss/_master.scss';
import Location from '../Pages/location/Location';
import Warehouse from '../components/Warehouse/Warehouse';


function App() {
  return (
      <BrowserRouter>
          {/* <NavBar /> */}
          <Switch>
            <Warehouse exact path="/warehouse" />
            <Inventory exact path="/inventory"/>
            <Location exact path="/locations"/> comment out inventory or location to see page each page individually
          </Switch>
      </BrowserRouter>
  );
}

export default App;
