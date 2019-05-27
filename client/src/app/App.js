import React from 'react';
import Inventory from '../Pages/Inventory/Inventory';
<<<<<<< HEAD
import { BrowserRouter, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.js';
import '../styles/scss/_master.scss';
import Location from '../Pages/location/Location';
import Warehouse from '../components/Warehouse/Warehouse';
=======
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Location from '../Pages/location/Location';
import ProductView from '../Pages/ProductView/ProductView';
import '../styles/scss/_master.scss';
>>>>>>> e5c7228aa06ab1e01907494af21c96f82f760596


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Warehouse exact path="/warehouse" />
            <Inventory exact path="/inventory"/>
<<<<<<< HEAD
            <Location exact path="/locations"/> comment out inventory or location to see page each page individually
=======
            <Location exact path="/locations"/> 
            <Route exact path="/inventory/:id" render={(props)=><ProductView {...props}/>} />
            <Redirect exact to="/inventory" from="/" />
>>>>>>> e5c7228aa06ab1e01907494af21c96f82f760596
          </Switch>
      </BrowserRouter>
  );
}

export default App;
