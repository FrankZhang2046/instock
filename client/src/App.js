import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Warehouse from './components/Warehouse/Warehouse.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
         <BrowserRouter>
         {/* <Navigation /> */}
           <Switch>
             <Route exact path="/" component={Warehouse} />
           {/* <Route path="/Upload" component={Upload} />
           <Route path="/video/:id" component={Home}/> */}
         </Switch>
        </BrowserRouter>
      </div>
      </header>
    </div>
  );
}

export default App;
