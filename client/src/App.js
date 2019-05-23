import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Warehouse from './components/Warehouse/Warehouse.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
         <BrowserRouter>
         <NavBar />
           <Switch>
             <Route path="/" component={Warehouse} />
         </Switch>
        </BrowserRouter>
      </div>
      </header>
    </div>
  );
}

export default App;
