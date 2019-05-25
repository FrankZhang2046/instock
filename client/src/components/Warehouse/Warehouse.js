
import React, { Component } from 'react'
import warehousedata from './data1.js';
import inventorydata from './data2.js';
// import InventoryData from './InventoryData.js';
import WarehouseData from './WarehouseData.js';
// import Inventory from '../../Pages/Inventory/Inventory.js';

export class Warehouse extends Component {

    state = {
        warehousedata,
        inventorydata
    }

  render() {

    return (
      <div>
        {/* <WarehouseData warehousedata={warehousedata[0]}/> */}
        {console.log(warehousedata)}
        {this.state.warehousedata
          .filter(warehouse => warehousedata.id === inventorydata.id)
          .map(warehouse => 
          <WarehouseData warehousedata={warehousedata[0]}/>)
        }
      </div>
      // <Inventory />
     
    );
  }
}

export default Warehouse;

{/* <div>
{this.state.warehousedata.map((items, index) => 
<WarehouseData warehousedata={items} key={index} />)
}
{this.state.inventorydata.map((items, index) => 
<InventoryData inventorydata={items} key={index} />)
}
</div> */}