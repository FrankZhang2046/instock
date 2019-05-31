import React, { Component } from 'react'
import './InventoryModal.scss'
import Switch from "react-switch"
import axios from 'axios'

const initialState = {
    name: '',
    lastOrdered: '',
    location: '',
    country: '',
    quantity: '',
    isInstock: false,
    description: '',
    nameError: '',
    locationError: '',
    formSuccess: '',
}

export default class InventoryModal extends Component {

    state = initialState;

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSwitch = (isInstock) => {
        this.setState({ isInstock });
    }

    validateForm = () => {
        let nameError = "";
        let locationError = "";
        
        if(this.state.name === "" || (this.state.name.replace(/\s/g, "") === "") ) {
            nameError = 'Please enter name name';
        }

        if(this.state.location === "" || (this.state.location.replace(/\s/g, "") === "") ) {
            locationError = 'location field cannot be blank';
        }

        if (nameError || locationError) {
            this.setState({ nameError, locationError });
            return false;
        }
        
        return true;
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const formValid = this.validateForm();
        if (formValid) {

            axios
                .post(`http://localhost:8080/inventory`, {
                    name: this.state.name,
                    description: this.state.description,
                    quantity: this.state.quantity,
                    lastOrdered: this.state.lastOrdered,
                    location: this.state.location,
                    isInstock: this.state.isInstock,
                })
                .then(res => {console.log(res.data)})
                .catch(err => {console.log(err)});

            this.setState(initialState);
            e.target.reset();
            this.setState({formSuccess: 'Your product was added to the inventory!'});
            setTimeout(
                this.props.close, 2000
            );
        };
    };

    render() {
        return (
            <div className="modal-wrapper"
            style={{
                display: this.props.open ? 'block' : 'none',
                opacity: this.props.close ? '1' : '0' }} >
                <div
                    className="inventoryModal" >
                    <div className="inventoryModal__container">
                        <h1 className="inventoryModal__header">Create New</h1>
                        <form 
                            onSubmit={this.handleSubmit}
                            className="inventoryModal__inputs" 
                            id="inventory__inputs">
                                <div className="modal__inputRow">
                                    <div className="inventoryModal__input">
                                        <label className="inventoryModal__label">Product</label>
                                        <input 
                                            name="name"
                                            onChange={this.handleChange}
                                            className="modal__input--field" 
                                            type="text"/>
                                        <div className="formError">{this.state.nameError}</div>
                                    </div>
                                    <div className="inventoryModal__input">
                                        <label className="inventoryModal__label">Last Ordered</label>
                                        <input 
                                            name="lastOrdered"
                                            onChange={this.handleChange}
                                            className="modal__input--field" 
                                            type="date"/>
                                        <div className="formError">{this.state.lastOrderedError}</div>
                                    </div>
                                </div>
                                <div className="modal__inputRow">
                                    <div className="inventoryModal__input">
                                        <label className="inventoryModal__label">City</label>
                                        <input 
                                            name="location"
                                            onChange={this.handleChange}
                                            className="modal__input--field" 
                                            type="text"/>
                                        <div className="formError">{this.state.locationError}</div>
                                    </div>
                                    <div className="inventoryModal__input">
                                        <label className="inventoryModal__label">Country</label>
                                        <select 
                                            name="country" 
                                            onChange={this.handleChange}
                                            className="modal__input--field" 
                                            form="inventory__inputs">
                                                <option value="Canada">Canada</option>
                                        </select>
                                        <div className="formError">{this.state.countryError}</div>
                                    </div>
                                </div>
                                <div className="modal__inputRow">
                                    <div className="inventoryModal__input">
                                        <label className="inventoryModal__label">Quantity</label>
                                        <input 
                                            name="quantity" 
                                            onChange={this.handleChange}
                                            className="modal__input--field" 
                                            type="number"/>
                                    </div>
                                    <div>
                                        <label className="inventoryModal__label">Status</label>
                                        <div className="inventoryModal__instock">
                                            <span className="inventoryModal__instock--label">In Stock</span>
                                            <Switch 
                                                height={22}
                                                width={40}
                                                onColor='#7AAE3B'
                                                offColor='#AFAFAF'
                                                handleDiameter={24}
                                                boxShadow='0 0 8px rgba(0,0,0,0.3)'
                                                checkedIcon={false} 
                                                uncheckedIcon={false}
                                                onChange={this.handleSwitch} />
                                        </div>
                                    </div>
                                </div>
                                <div className="inventoryModal__input">
                                    <label className="inventoryModal__label">Item Description</label>
                                    <textarea 
                                        name="description" 
                                        onChange={this.handleChange}
                                        className="inventoryModal__input--itemDescription" 
                                        placeholder="(Optional)">
                                    </textarea>
                                    <div className="formSuccess">{this.state.formSuccess}</div>
                                </div>
                                <div className="inventoryModal__buttons">
                                    <button type="submit" className="inventoryModal__buttons__save">SAVE</button>
                                    <button className="inventoryModal__buttons__cancel" onClick={this.props.close}>CANCEL</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
