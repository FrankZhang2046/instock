import React, { Component } from 'react';
import './LocationDetails.scss';
import rightArrow from '../../assets/icons/SVG/Icon-arrow-right.svg';
import { Link } from 'react-router-dom'; 

export class LocationDetails extends Component {
    render() {
        const {name, inventoryCategories, address, contact, id} = this.props.warehouseData;

        return (
            <Link className="locationDetail" to={`/warehouses/${id}`}>
                <div className="locationDetail__container"> 
                    <div className="locationDetail__info" >
                        <p className="locationDetail__info--bold">{name}</p>
                        <p className="locationDetail__info--noBold">{address.street}</p>
                    </div>
                    <div className="locationDetail__description">
                        <div className="locationDetail__info infoWidth">
                            <p className="locationDetail__info--noBold">{contact.name}</p>
                            <p className="locationDetail__info--italic">{contact.title}</p>
                        </div>
                        <div className="locationDetail__info infoWidth">
                            <p className="locationDetail__info--noBold">{contact.phone}</p>
                            <p className="locationDetail__info--noBold">{contact.email}</p>
                        </div>
                        <div className="locationDetail__info infoWidth">
                            <p className="locationDetail__info--noBold">{inventoryCategories}</p>
                        </div>
                    </div>
                </div>
                <img className="rightArrow" src={rightArrow} alt="right arrow"/>
            </Link>
        )
    }
}

export default LocationDetails
