import React, { Component } from 'react'
import './InventoryModal.scss'

export default class InventoryModal extends Component {
    render() {
        return (
            <div
                className="inventoryModal"
                style={{
                    transform: this.props.open ? 'translateY(-110vh)' : 'translateY(-200vh)',
                    opacity: this.props.close ? '1' : '0' }} >
                <div className="inventoryModal__container">
                    <h1 className="h1-header">Create New</h1>
                    <form className="inventory__inputs" id="inventory__inputs">
                        <div className="modal__inputRow">
                            <div className="modal__input">
                                <label className="label">Product</label>
                                <input className="modal__input--field" type="text"/>
                            </div>
                            <div className="modal__input">
                                <label className="label">Last Ordered</label>
                                <input className="modal__input--field" type="date"/>
                            </div>
                        </div>
                        <div className="modal__inputRow">
                            <div className="modal__input">
                                <label className="label">City</label>
                                <input className="modal__input--field" type="text"/>
                            </div>
                            <div className="modal__input">
                                <label className="label">Country</label>
                                <select name="countries-list" form="inventory__inputs">
                                    <option value="Canada">Canada</option>
                                    <option value="UnitedStates">United States</option>
                                    <option value="Mexico">Mexico</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal__inputRow">

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
