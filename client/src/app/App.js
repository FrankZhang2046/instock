import React from 'react';
import Inventory from '../Pages/Inventory/Inventory';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Location from '../Pages/location/Location';
import Warehouse from '../components/Warehouse/Warehouse';
import ProductView from '../Pages/ProductView/ProductView';
import '../styles/scss/_master.scss';

function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Switch> 
            <Location exact path="/warehouse"/> 
            <Inventory exact path="/inventory"/>
            <Route exact path="/warehouse/:id" component={Warehouse} />  
            <Redirect exact to="/warehouse" from="/" />
            {/* <Route exact path="/inventory/:id" component={Inventory} />   */}
            <Route exact path="/inventory/:id" render={(props)=><ProductView {...props}/>} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
