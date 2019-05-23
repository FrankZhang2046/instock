import React, { Component } from 'react';
import './Locations.scss';

export class LocationDetails extends Component {
    render() {
        const {name, inventoryCategories, address, contact} = this.props.warehouseData;

        return (
            <div className="locationDetail">
                <div className="locationDetail__info warehouseName">
                    <p className="locationDetail__info--bold">{name}</p>
                    <p className="locationDetail__info--noBold">{address.street}</p>
                </div>
                <div className="locationDetail__info">
                    <p className="locationDetail__info--noBold">{contact.name}</p>
                    <p className="locationDetail__info--italic">{contact.title}</p>
                </div>
                <div className="locationDetail__info">
                    <p className="locationDetail__info--noBold">{contact.phone}</p>
                    <p className="locationDetail__info--noBold">{contact.email}</p>
                </div>
                <div className="locationDetail__info">
                    <p className="locationDetail__info--noBold">{inventoryCategories}</p>
                </div>
            </div>
        )
    }
}

export default LocationDetails
