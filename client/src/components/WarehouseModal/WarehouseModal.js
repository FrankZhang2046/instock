import React from 'react'
import './WarehouseModal.scss'

const WarehouseModal = (props) => {

    return (
        <div className="modal"
            style={{
                transform: props.open ? 'translateY(-100vh)' : 'translateY(-200vh)',
                opacity: props.open ? '1' : '0'
            }}>
            <form className="modal__container">
                <h1 className="modal--header">Create New</h1>
                <div className="modal__inputRow">
                    <div className="modal__inputs">
                        <label className="modal__inputs__label">
                            Name
                        </label>
                        <input className="modal__inputs__inputField" required placeholder="Warehouse Name" />
                    </div>   
                    <div className="modal__inputs">
                        <label className="modal__inputs__label">
                            Street
                        </label >
                        <input className="modal__inputs__inputField" required placeholder="Warehouse Street" />
                    </div>   
                </div>
                <div className="modal__inputRow">
                    <div className="modal__inputs">
                        <label className="modal__inputs__label">
                            Contact Name
                        </label>
                        <input className="modal__inputs__inputField" required placeholder="Name" />
                    </div>   
                    <div className="modal__inputs">
                        <label className="modal__inputs__label">
                            Contact Title
                        </label>
                        <input className="modal__inputs__inputField" required placeholder="Title" />
                    </div>   
                </div>
                <div className="modal__inputRow">
                    <div className="modal__inputs">
                        <label className="modal__inputs__label">
                            Phone Number
                        </label>
                        <input className="modal__inputs__inputField" required placeholder="XXX XXX XXXX" />
                    </div>   
                    <div className="modal__inputs">
                        <label className="modal__inputs__label">
                            Email
                        </label>
                        <input className="modal__inputs__inputField" required placeholder="Email" />
                    </div>   
                </div>
                <div className="modal__inputs__warehouse">
                    <label className="modal__inputs__label">
                        Inventory Categories
                    </label>
                    <textarea className="modal__inputs__warehouseInput" required placeholder="Categories" />
                </div>
                <div className="modal__buttons">
                    <button className="modal__buttons__save">SAVE</button>
                    <button className="modal__buttons__cancel" onClick={props.close}>CANCEL</button>
                </div>
            </form>
        </div>
    )
}

export default WarehouseModal;
