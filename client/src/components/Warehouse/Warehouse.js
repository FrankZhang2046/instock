
import React, { Component } from 'react'
import warehousedata from './data.js';
import WarehouseData from './WarehouseData.js';

export class Warehouse extends Component {

    state = {
        warehousedata
    }

  render() {

    return (
      <div>
        {this.state.warehousedata.map((items, index) => 
        <WarehouseData warehousedata={items} key={index} />)
        }
    </div>
    );
  }
}

export default Warehouse;