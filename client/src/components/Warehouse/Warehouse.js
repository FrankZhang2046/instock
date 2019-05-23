
import React, { Component } from 'react'
import warehousedata from './data1.js';
import inventorydata from './data2.js';
import InventoryData from './InventoryData.js';
import WarehouseData from './WarehouseData.js';

export class Warehouse extends Component {

    state = {
        warehousedata,
        inventorydata
    }

  render() {

    return (
      <div>
        {this.state.warehousedata.map((items, index) => 
        <WarehouseData warehousedata={items} key={index} />)
        }
        {this.state.inventorydata.map((items, index) => 
        <InventoryData inventorydata={items} key={index} />)
        }
    </div>
    );
  }
}

export default Warehouse;