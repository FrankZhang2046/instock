import React, {Component} from 'react';
import myJson from '../../data/fakeData.json';
import Item from '../../components/Item/Item.js';
import searchIcon from '../../assets/icons/SVG/Icon-search.svg'
import './styles.scss';
import addIcon from '../../assets/icons/SVG/Icon-add.svg';
import InventoryModal from '../../components/InventoryModal/InventoryModal';


export default class Inventory extends Component{
    state={
        inventory: myJson,
        modalOpen: false,
    }
    
    removeItem = (id) =>{
        const filteredArray = this.state.inventory.filter(item => {return item.id !== id});
        
        this.setState({inventory: filteredArray});
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render(){
        return(
            <div>
                { this.state.modalOpen ? <div onClick={this.closeModal} className="closeModal"></div> : null }
                <h1 className="inventory__header">Inventory</h1>
                <div className="inventory__search">
                    <img className="inventory__search--icon" src={searchIcon} alt=""/>
                    <input className="inventory__search" type="text" name="serach" id="search"/>
                </div>
                <div className="inventory__items">
                    {this.state.inventory.map(product=>{
                        return (<Item item={product} removeItem={this.removeItem}/>)
                    })}
                </div>
                <InventoryModal
                    className="inventoryModal"
                    open={this.state.modalOpen}
                    close={this.closeModal} >
                        This is some random test text!
                </InventoryModal>
                <button className="addIcon"
                        onClick={this.openModal}>
                    <img src={addIcon} alt="Add Icon"/>
                </button>
            </div>
        )
    }
}