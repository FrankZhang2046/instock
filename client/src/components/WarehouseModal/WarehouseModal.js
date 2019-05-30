import React, { Component } from 'react';
import './WarehouseModal.scss';
import axios from 'axios';

export class WarehouseModal extends Component {


    submitWarehouse = (e) => {
        e.preventDefault();
 
        const formInput = () => {
            return {
                warehouseName: e.target.warehouseName.value, 
                street: e.target.street.value, 
                name: e.target.name.value, 
                title: e.target.title.value, 
                phone: e.target.phone.value, 
                email: e.target.email.value, 
                inventoryCategories: e.target.inventoryCategories.value, 
            };
        }  

        axios
            .post('http://localhost:8080/warehouse', formInput())
            .then(res => {console.log(res.data)})
            .catch(err => {console.log(err)});

        e.target.reset();
        alert("Warehouse submitted")
        setTimeout(
            this.props.close, 300
        );
    }

    render() {
        return (
            <div className="modal"
                style={{
                    transform: this.props.open ? 'translateY(-75vh)' : 'translateY(-500vh)',
                    opacity: this.props.close ? '1' : '0'
                }}>
                <form className="modal__container" onSubmit={this.submitWarehouse}>
                    <h1 className="modal--header">Create New</h1>
                    <div className="modal__inputRow">
                        <div className="modal__inputs">
                            <label className="modal__inputs__label">
                                Name
                            </label>
                            <input 
                                className="modal__inputs__inputField" 
                                name="warehouseName" required 
                                placeholder="Warehouse Name" />
                        </div>   
                        <div className="modal__inputs">
                            <label className="modal__inputs__label">
                                Street
                            </label >
                            <input 
                                className="modal__inputs__inputField" 
                                name="street" required 
                                placeholder="Warehouse Street" />
                        </div>   
                    </div>
                    <div className="modal__inputRow">
                        <div className="modal__inputs">
                            <label className="modal__inputs__label">
                                Contact Name
                            </label>
                            <input 
                                className="modal__inputs__inputField" 
                                name="name" required 
                                placeholder="Name" />
                        </div>   
                        <div className="modal__inputs">
                            <label className="modal__inputs__label">
                                Contact Title
                            </label>
                            <input 
                                className="modal__inputs__inputField" 
                                name="title" required 
                                placeholder="Title" />
                        </div>   
                    </div>
                    <div className="modal__inputRow">
                        <div className="modal__inputs">
                            <label className="modal__inputs__label">
                                Phone Number
                            </label>
                            <input 
                                className="modal__inputs__inputField" 
                                name="phone" required 
                                placeholder="XXX XXX XXXX" />
                        </div>   
                        <div className="modal__inputs">
                            <label className="modal__inputs__label">
                                Email
                            </label>
                            <input 
                                className="modal__inputs__inputField" 
                                name="email" required 
                                placeholder="Email" />
                        </div>   
                    </div>
                    <div className="modal__inputs__warehouse">
                        <label className="modal__inputs__label">
                            Inventory Categories
                        </label>
                        <textarea 
                            className="modal__inputs__warehouseInput" 
                            name="inventoryCategories" 
                            placeholder="Categories" />
                    </div>
                    <div className="modal__buttons">
                        <button className="modal__buttons__save" type="submit">SAVE</button>
                        <button className="modal__buttons__cancel" onClick={this.props.close}>CANCEL</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default WarehouseModal;
