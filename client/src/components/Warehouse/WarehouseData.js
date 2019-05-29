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
      <div className="header1">
        {/* <div> */}
          <div className="header1__title">
            <div className="header1__title--icon">
              <Link to="/locations"><img src={iconback} alt="iconback" /></Link>
            </div>
            <div className="header1__title--name">{name} </div>
          </div>
        {/* </div> */}
        <div className="header1__title--border"></div>
        </div>
     
        <div className="header2">
          <div className="header2__address">
            <div className="header2__address1">ADDRESS</div>
            {/* <div> */}
              <div className="header2__address2">{address.street}</div>
              <div className="header2__address3">{address.suiteNum}</div>
            {/* </div>
            <div> */}
              <div className="header2__address4">{address.city}</div>
              <div className="header2__address5">{address.postal}</div>
            {/* </div> */}
          </div>
          <div className="header2__contact">
            <div className="header2__contact1">CONTACT</div>
            {/* <div> */}
              {/* {" "} */}
              <div className="header2__contact2">{contact.name}</div>
              <div className="header2__contact3">{contact.title}</div>
            {/* </div>
            <div> */}
              <div className="header2__contact4">{contact.phone}</div>
              <div className="header2__contact5">{contact.email}</div>
            {/* </div> */}
          </div>
        </div>
        {/* // </div> */}
      </div>
    );
  }
}

export default WarehouseData;
