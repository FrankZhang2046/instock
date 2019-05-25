import React, { Component } from 'react'
import './InventoryModal.scss'

export default class InventoryModal extends Component {
    render() {
        return (
            <div 
                className="inventoryModal__container"
                style={{
                    transform: this.props.open ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.close ? '1' : '0' }} >
                <h1 className="h1-heading">Create New</h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
