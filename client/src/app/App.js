import React from 'react';
import Inventory from '../Pages/Inventory/Inventory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import '../styles/styles.scss';


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Inventory />
      </BrowserRouter>
  );
}

export default App;
