import React, { Component } from 'react';
import LocationDetails from '../../components/LocationDetails/LocationDetails';
import axios from 'axios';
import './Locations.scss';
import addIcon from '../../assets/icons/SVG/Icon-add.svg';
import WarehouseModal from '../../components/WarehouseModal/WarehouseModal'

export class Location extends Component {
    state = {
        warehouseData: [],
        modalShowing: false
    }

    componentDidMount() {
        axios.get('http://localhost:8080/warehouse')
            .then(res => 
                this.setState({warehouseData: res.data}),
            )
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
                {/* If modalShowing is true, sets background to transparent black */}
                { this.state.modalShowing ? <div className="modalBackground"></div> : null }
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
                    close={this.closeModal}>
                </WarehouseModal>  
            </div>
        )
    }
}


export default Location;
