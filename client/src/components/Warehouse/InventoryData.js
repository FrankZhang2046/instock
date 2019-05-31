import React, { Component } from "react";
import kebab from "../../assets/icons/SVG/Icon-kebab-default.svg";
import "./warehouse.scss";

export class InventoryData extends Component {
  render() {
    const {
      name,
      description,
      quantity,
      lastOrdered,
      location,
      isInstock
    } = this.props.inventoryData;

    const status = isInstock.toString();

    return (
      <div className="product">
        <div className="product1__title">
          <div className="product1__title--item">ITEM</div>
          <div className="product1__title--icon">
            <img src={kebab} alt="iconkebab" />
          </div>
        </div>
        <div className="product2">
          <div className="product2__namedesc">
            <div className="product2__namedesc--name">{name} </div>

            <div className="product2__namedesc--description">{description}</div>
          </div>
          <div className="product2__details">
            <div className="product2__header">LAST ORDERED</div>
            <div className="product2__date">{lastOrdered}</div>
          </div>
          <div className="product2__details">
            <div className="product2__header">LOCATION</div>
            <div className="product2__location">{location}</div>
          </div>
          <div className="product2__details">
            <div className="product2__header">QUANTITY</div>
            <div className="product2__available">{quantity}</div>
          </div>
          <div className="product2__details">
            <div className="product2__header">STATUS</div>
            <div className="product2__status">{status}</div>
          </div>
          <div className="product2__icon1">
            <img src={kebab} alt="iconkebab" />
          </div>
          <div className="product2__border" />
        </div>
      </div>
    );
  }
}

export default InventoryData;
