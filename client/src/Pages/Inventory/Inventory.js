import React, {Component} from 'react';
import Item from '../../components/Item/Item.js';
import axios from 'axios';
import './styles.scss';
import addIcon from '../../assets/icons/SVG/Icon-add.svg';
import InventoryModal from '../../components/InventoryModal/InventoryModal';


export default class Inventory extends Component {
    state = {
        inventory: [],
        modalOpen: false,
    }
    
    getInventory = () => {
        axios.get(`http://localhost:8080/inventory`)
            .then(result => 
                this.setState({inventory: result.data})
            )
    }

    componentDidMount(){ 
        this.getInventory();
    }

    componentDidUpdate(){
        if (this.props.warehouseID) {
            this.setState({inventory: this.state.inventory.filter(item => item.warehouseID === this.props.warehouseID)})
        }
    }

    removeItem = (id) => {
        const filteredArray = this.state.inventory.filter(item => {return item.id !== id});
        axios
            .delete(`http://localhost:8080/inventory/${id}`)
            .then(result => this.setState({inventory: result.data}))
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
            <div className="inventory__container">
                { this.state.modalOpen ? <div onClick={this.closeModal} className="closeModal"></div> : null }
                <div className="page-header">
                    <h1 className="page-header__heading">Inventory</h1>
                    <input type="text" className="page-header__searchbar" placeholder="search"/>
                </div>
                <div className="inventory__items">
                    {this.state.inventory.map(product=>{
                        return (<Item key={product.id} item={product} removeItem={this.removeItem}/>)
                    })}
                </div>
                <InventoryModal
                    open={this.state.modalOpen}
                    close={this.closeModal} >
                </InventoryModal>
                <button className="addIcon"
                        onClick={this.openModal}>
                    <img src={addIcon} alt="Add Icon"/>
                </button>
            </div>
        )
    }
}