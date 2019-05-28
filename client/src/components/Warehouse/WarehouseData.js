import React, { Component } from "react";
import iconback from "../../assets/icons/SVG/Icon-back-arrow.svg";
import { Link } from 'react-router-dom';
import "./styles.scss";

export class WarehouseData extends Component {
  render() {
    const { name, address, contact } = this.props.warehouseData;

    console.log(this.props.warehouseData);

    return (
      <div className="header">
        <p>
          <div className="header__title">
            <div className="header__title--icon">
            <Link to="/locations"><img src={iconback} alt="iconback" /></Link>
            </div>
            <div className="header__title--name">{name} </div>
          </div>
        </p>
        <div classname="header__all">
          <div className="header__all__place1">
            <div className="header__address">ADDRESS</div>
            <p>
              <div className="header__street">{address.street}</div>
              <div className="header__number">{address.suiteNum}</div>
            </p>
            <p>
              <div className="header__city">{address.city}</div>
              <div className="header__postal">{address.postal}</div>
            </p>
          </div>
          <div className="header__all__place2">
            <div className="header__contact">CONTACT</div>
            <p>
              {" "}
              <div className="header__name">{contact.name}</div>
              <div className="header__position">{contact.title}</div>
            </p>
            <p>
              <div className="header__phone">{contact.phone}</div>
              <div className="header__email">{contact.email}</div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WarehouseData;
