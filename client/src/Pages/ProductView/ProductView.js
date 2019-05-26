import React, { Component } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import ProductItem from './ProductItem';
import backArrow from '../../assets/icons/SVG/Icon-back-arrow.svg';
import './products.scss';


export class ProductView extends Component {
    state = {
        inventory: [],

        warehouse : [],

        reference : "JK2020FD7811201"

    }

    componentDidMount() {
        axios.get(`http://localhost:8080/inventory`)
            .then(result => { 
                this.setState({ inventory: result.data }
                ) 
                console.log(result.data)}
            )
    }

    render() {

        const current = this.state.inventory
                        .filter(data => 
                            data.id === this.props.id
                        );
        return (
            <div className="product-page">
                <div className="product-page__header">
                    <img src={backArrow} className="product-page__arrow" alt="back arrow" />
                    <h1 className="product-page__title">
                        {current.name}
                    </h1>
                </div>
                <ProductItem 
                    // description={this.state.inventory.description} 
                    // name={this.state.warehouse.contact.name}
                    // reference={this.state.reference}
                    // lastOrdered={this.state.inventory.lastOrdered}
                    // location={this.state.inventory.location}
                    // quantity={this.state.inventory.quantity}
                    // categories={this.state.inventory.categories} 
                    />
                <button className="product-page__button">EDIT</button>
            </div>
        )
    }
}

export default ProductView
