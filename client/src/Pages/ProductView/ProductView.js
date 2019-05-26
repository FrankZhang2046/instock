import React, { Component } from 'react';
import ProductItem from './ProductItem';
import backArrow from '../../assets/icons/SVG/Icon-back-arrow.svg';
import './products.scss';


export class ProductView extends Component {
    state = {
        inventory: {
                    "id": "I0",
                    "name": "Scotch Tape",
                    "description": "A clear sticky on one side tape, for all your crafting needs",
                    "quantity": "400",
                    "lastOrdered": "12/01/2018",
                    "location": "Toronto, Ontario",
                    "isInstock": false,
                    "categories": "Crafts, Office supplies, Paper",
                    "warehouseId": "W0"
        },

        warehouse : {
                    "id": "W0",
                    "name": "Punder Mifflin",
                    "address": {
                        "street": "123 Fake Street W",
                        "suiteNum": "suite 201",
                        "city": "Toronto",
                        "province": "Ontario",
                        "postal": "M6N4B7"
                    },
                    "contact": {
                        "name": "Michael Scarn",
                        "title": "Regional Manager",
                        "phone": "416 679 4324",
                        "email": "michaelScarn@pundermifflin.com"
                    },
                    "inventoryCategories": "Paper, Crafts, Office supplies"
        },

        reference : "JK2020FD7811201"
    }

    render() {

        return (
            <div className="product-page">
                <div className="product-page__header">
                    <img src={backArrow} className="product-page__arrow" alt="back arrow" />
                    <h1 className="product-page__title">
                        {this.state.inventory.name}
                    </h1>
                </div>
                <ProductItem 
                    description={this.state.inventory.description} 
                    name={this.state.warehouse.contact.name}
                    reference={this.state.reference}
                    lastOrdered={this.state.inventory.lastOrdered}
                    location={this.state.inventory.location}
                    quantity={this.state.inventory.quantity}
                    categories={this.state.inventory.categories} />
                <button className="product-page__button">EDIT</button>
            </div>
        )
    }
}

export default ProductView
