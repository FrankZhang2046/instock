import React, { Component } from 'react';
import warehouseData from './data';
import LocationDetails from './LocationDetails';


export class Location extends Component {
    state = {
        warehouseData
    }

    render() {
        return (
            <div>
                <div className="headerSearchBar">
                    <h1 className="headerSearchBar__header" >Locations</h1>
                    <input className="headerSearchBar__searchBar" type="text"  placeholder="search"></input>
                </div>
                {this.state.warehouseData.map((items, index) => 
                    <LocationDetails 
                        warehouseData={items}
                        key={index} />)
                }
            </div>
        )
    }
}


export default Location;
