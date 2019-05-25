import React, { Component } from 'react'
import iconback from '../../assets/icons/SVG/Icon-back-arrow.svg';
import Inventory from '../../Pages/Inventory/Inventory.js';
import './styles.scss'

export class WarehouseData extends Component {

    render() {
       const { name, address, contact } = this.props.warehousedata;

        return (
            <div className="header">
            {console.log(address)}
                <p><div className="header__title"> 
                    <div className="header__title--icon">    
                        <img src={iconback} alt="iconback"/> </div>
                        <div className="header__title--name">{name} </div>      
                </div>
                </p>
                <div className="header__address">ADDRESS</div>
                {/* <p><div className="header__street">{address.street}</div>
                    <div className="header__number">{address.suiteNum}</div> 
                </p> */}
                <p><div className="header__city">{address.city}</div>
                    <div className="header__postal">{address.postal}</div> 
                </p>
                <div className="header__contact">CONTACT</div>
                <p> <div className="header__name">{contact.name}</div>
                    <div className="header__position">{contact.title}</div> 
                </p>
                <p><div className="header__phone">{contact.phone}</div>
                    <div className="header__email">{contact.email}</div> 
                </p>
                    <div className="header__border"></div>
                    <Inventory />
            </div>
        )
    }
}

export default WarehouseData;