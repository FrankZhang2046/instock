import React, { Component } from 'react';
import warehouseData from './data';
import LocationDetails from '../../components/LocationDetails/LocationDetails';
import './Locations.scss';
import addIcon from '../../assets/icons/SVG/Icon-add.svg';

export class Location extends Component {
    state = {
        warehouseData
    }

    render() {
        return (
            <div className="pageContainer">
                <div className="headerSearchBar">
                    <h1 className="headerSearchBar__header" >Locations</h1>
                    <input className="headerSearchBar__searchBar" type="text"  placeholder="search"></input>
                </div>
                <div className="tableLabels">
                    <p className="tableLabels__warehouse">WAREHOUSE</p>
                    <div className="tableLabels__info">
                        <p className="tableLabels__info__labels">CONTACT</p>
                        <p className="tableLabels__info__labels">CONTACT INFORMATION</p>
                        <p className="tableLabels__info__labels">CATEGORIES</p>
                    </div>
                </div>
                {this.state.warehouseData.map((items, index) => 
                    <LocationDetails 
                        warehouseData={items}
                        key={index} />)
                }
                <button className="addIcon">
                    <img src={addIcon} alt="Add Icon"/>
                </button>
            </div>
        )
    }
}


export default Location;
