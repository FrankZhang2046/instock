import React, { Component } from 'react';
import ProductItem from './ProductItem';
import backArrow from '../../assets/icons/SVG/Icon-back-arrow.svg';
import './products.scss';


export class ProductView extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <div className="product-page__header">
                    <img src={backArrow} className="product-page__arrow" alt="back arrow" />
                    <h1 className="product-page__title">
                        Product Name
                    </h1>
                </div>
                <ProductItem />
                <button className="product-page__button">EDIT</button>
            </div>
        )
    }
}

export default ProductView
