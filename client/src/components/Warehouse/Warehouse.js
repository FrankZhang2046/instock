import React, { Component } from "react";
import axios from "axios";
import InventoryData from "./InventoryData.js";
import WarehouseData from "./WarehouseData.js";

export class Warehouse extends Component {
  state = {
    warehouseData: [],
    inventoryData: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/warehouse").then(response =>
      this.setState({
        warehouseData: response.data
      })
    );
    axios.get("http://localhost:8080/inventory").then(response =>
      this.setState({
        inventoryData: response.data
      })
    );
  }

  render() {
    if (
      !(
        this.state.warehouseData.length > 0 &&
        this.state.inventoryData.length > 0
      )
    )
      return null;

    const { id } = this.props.match.params;
    const inventories = this.state.inventoryData.filter(
      item => item.warehouseId === id
    );
    console.log(inventories.length);

    return (
      <div>
        <WarehouseData
          warehouseData={this.state.warehouseData.find(
            items => items.id === id
          )}
        />
        {inventories.map(inventory => (
          <InventoryData inventoryData={inventory} key={inventory.id} />
        ))}
      </div>
    );
  }
}

export default Warehouse;
