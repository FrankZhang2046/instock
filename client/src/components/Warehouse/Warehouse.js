
import React, { Component } from 'react'
import warehousedata from './data.js';

export class WarehouseData extends Component {

    state = {
        warehousedata
    }

  render() {

    return (
      <div>
        {this.state.warehousedata.map((items, index) => 
        <Warehouse warehousedata={items} key={index} />)
        }
    </div>
    );
  }
}

export default WarehouseData;