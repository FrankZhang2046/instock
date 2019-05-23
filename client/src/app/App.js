import React from 'react';
import Inventory from '../Pages/Inventory/Inventory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import '../styles/styles.scss';
import Location from '../Pages/location/Location';


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Inventory />
          <Location /> {/* comment out inventory or location to see page each page individually */}
      </BrowserRouter>
  );
}

export default App;
