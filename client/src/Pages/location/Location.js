import React, { Component } from 'react';
import warehouseData from './data';
import LocationDetails from '../../components/LocationDetails/LocationDetails';
import './Locations.scss';
import addIcon from '../../assets/icons/SVG/Icon-add.svg';
import WarehouseModal from '../../components/WarehouseModal/WarehouseModal'

export class Location extends Component {
    state = {
        warehouseData,
        modalShowing: false
    }

    // Sets state for modalShowing to true when Modal opens
    openModal = () => {
        this.setState({
            modalShowing: true
        });
    }

    // Sets state for modalShowing to false when Modal closes
    closeModal = () => {
        this.setState({
            modalShowing: false
        });
    }

    render() {
        return (
            <div className="pageContainer">
                {/* If modalShowing is true, sets background to transparent black and adds onClick to close modal */}
                { this.state.modalShowing ? <div onClick={this.closeModal} className="backdrop"></div> : null }

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
                <button className="addIcon" onClick={this.openModal}>
                    <img src={addIcon} alt="Add Icon"/>
                </button>
                <WarehouseModal 
                    open={this.state.modalShowing}
                    close={this.closeModal} />
            </div>
        )
    }
}


export default Location;
