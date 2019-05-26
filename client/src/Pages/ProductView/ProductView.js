import React, { Component } from 'react';
// import axios from 'axios';
// import shortid from 'shortid';
import ProductItem from './ProductItem';
import backArrow from '../../assets/icons/SVG/Icon-back-arrow.svg';
import './products.scss';


export class ProductView extends Component {
    state = {
        inventory: [],

        warehouse : []

    }

    render() {

        const { categories, description, lastOrdered, location, name, quantity} = this.props.location.state.test
        return (
            <div className="product-page">
                <div className="product-page__header">
                    <img src={backArrow} className="product-page__arrow" alt="back arrow" />
                    <h1 className="product-page__title">
                        {name}
                    </h1>
                </div>
                <ProductItem 
                    description={description} 
                    name={name}
                    lastOrdered={lastOrdered}
                    location={location}
                    quantity={quantity}
                    categories={categories} 
                    />
                <button className="product-page__button">EDIT</button>
            </div>
        )
    }
}

export default ProductView
