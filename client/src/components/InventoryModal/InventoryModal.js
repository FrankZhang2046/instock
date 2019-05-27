import React, { Component } from 'react'
import './InventoryModal.scss'
import Switch from "react-switch"

export default class InventoryModal extends Component {

    state = {
        checked: false
    }

    handleChange = (checked) => {
        this.setState({ checked });
    }

    render() {
        return (
            <div
                className="inventoryModal"
                style={{
                    transform: this.props.open ? 'translateY(-130vh)' : 'translateY(-300vh)',
                    opacity: this.props.close ? '1' : '0' }} >
                <div className="inventoryModal__container">
                    <h1 className="inventoryModal__header">Create New</h1>
                    <form className="inventoryModal__inputs" id="inventory__inputs">
                        <div className="modal__inputRow">
                            <div className="inventoryModal__input">
                                <label className="inventoryModal__label">Product</label>
                                <input className="modal__input--field" type="text"/>
                            </div>
                            <div className="inventoryModal__input">
                                <label className="inventoryModal__label">Last Ordered</label>
                                <input className="modal__input--field" type="date"/>
                            </div>
                        </div>
                        <div className="modal__inputRow">
                            <div className="inventoryModal__input">
                                <label className="inventoryModal__label">City</label>
                                <input className="modal__input--field" type="text"/>
                            </div>
                            <div className="inventoryModal__input">
                                <label className="inventoryModal__label">Country</label>
                                <select className="modal__input--field" name="countries-list" form="inventory__inputs">
                                    <option value="Canada">Canada</option>
                                    <option value="UnitedStates">United States</option>
                                    <option value="Mexico">Mexico</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal__inputRow">
                            <div className="inventoryModal__input">
                                <label className="inventoryModal__label">Quantity</label>
                                <input className="modal__input--field" type="number"/>
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
                                        uncheckedIcon ={false}
                                        onChange={this.handleChange} 
                                        checked={this.state.checked} />
                                </div>
                            </div>
                        </div>
                        <div className="inventoryModal__input">
                            <label className="inventoryModal__label">Item Description</label>
                            <textarea className="inventoryModal__input--itemDescription" placeholder="(Optional)"></textarea>
                        </div>
                        <div className="inventoryModal__buttons">
                            <button className="inventoryModal__buttons__save">SAVE</button>
                            <button className="inventoryModal__buttons__cancel" onClick={this.props.close}>CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
