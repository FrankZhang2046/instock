
import React, { Component } from 'react'
// import warehousedata from './data1.js';
// import inventorydata from './data2.js';
// import InventoryData from './InventoryData.js';
import WarehouseData from './WarehouseData.js';
import Inventory from '../../Pages/Inventory/Inventory.js';
import warehouseData from '../../Pages/location/data.js';
// import Location from '../LocationDetails/LocationDetails.js';

export class Warehouse extends Component {

    state = {
        warehouseData
    }

  render() {

    return (
      <div>
        <WarehouseData warehouseData={warehouseData[0]}/>
        {/* {this.state.warehouseData.map((items, index) => 
          <WarehouseData
              warehouseData={items}
              key={index} />)        
        } */}
           <Inventory /> 
               
      </div>
     
    );
  }
}

export default Warehouse;
