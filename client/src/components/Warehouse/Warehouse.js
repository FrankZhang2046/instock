
import React, { Component } from 'react'
// import warehousedata from './data1.js';
import inventorydata from './data2.js';
import InventoryData from './InventoryData.js';
import WarehouseData from './WarehouseData.js';
// import Inventory from '../../Pages/Inventory/Inventory.js';
import warehouseData from '../../Pages/location/data.js';
// import Location from '../LocationDetails/LocationDetails.js';

export class Warehouse extends Component {

    state = {
        warehouseData,
        inventorydata
    }

  render() {
console.log(warehouseData)
console.log(warehouseData[1].id)
console.log(inventorydata)

    return (
      
      <div>   
        <WarehouseData warehouseData={this.state.warehouseData.find(items => items.id === 'W0')}/>

        {this.state.inventorydata.map((items, index) => 
          <InventoryData
              inventorydata={items}
              key={index} />) 
        }      
      </div>
     
    );
  }
}

export default Warehouse;
