import React, { Component } from "react";
import axios from "axios";
import InventoryData from "./InventoryData.js";
import WarehouseData from "./WarehouseData.js";
import "./warehouse.scss";

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

    return (
      <div>
        <WarehouseData
          warehouseData={this.state.warehouseData.find(
            items => items.id === id
          )}
        />
        <div className="order__title">
          <div className="order__title--item1">ITEM</div>
          <div className="order__title--order1">LAST ORDERED</div>
          <div className="order__title--location1">LOCATION</div>
          <div className="order__title--quantity1">QUANTITY</div>
          <div className="order__title--status1">STATUS</div>
        </div>
        {inventories.map(inventory => (
          <InventoryData inventoryData={inventory} key={inventory.id} />
        ))}
      </div>
    );
  }
}

export default Warehouse;
