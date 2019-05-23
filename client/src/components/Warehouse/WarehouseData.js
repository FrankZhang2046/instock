import React, { Component } from 'react'
import iconback from '../../assets/icons/SVG/Icon-back-arrow.svg';

export class WarehouseData extends Component {

    render() {
        // const {name, address, contact} = this.props.warehousedata;

        return (
            <div className="header">
                <div className="header__title"> 
                    <div className="header__title--icon">{iconback}</div>
                        <p className="header__title--caption">Warehouse Name</p>
                        <div className="header__title--icon">ADDRESS</div>
                        <div className="header__title--icon">123</div>
                        <div className="header__title--icon">Suite 201</div>
                        <div className="header__title--icon">Toronto ON</div>
                        <div className="header__title--icon">postal code</div>
                        <div className="header__title--icon">CONTACT</div>
                        <div className="header__title--icon">phone</div>
                        <div className="header__title--icon">email</div>
                </div>
            </div>
        )
    }
}

export default WarehouseData;