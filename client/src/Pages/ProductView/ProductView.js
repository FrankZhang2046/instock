import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import shortid from 'shortid';
import ProductItem from './ProductItem';
import backArrow from '../../assets/icons/SVG/Icon-back-arrow.svg';
import './products.scss';


export class ProductView extends Component {
    state = {
        warehouse : {}
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/warehouse`)
            .then(result => {
                this.setState({warehouse: result.data})
                }
            )
    }

    render() {

        const { categories, description, lastOrdered, location, name, quantity, isInstock, warehouseId } = this.props.location.state.test;
        const reference = shortid.generate().toUpperCase();

        function search(id, array){
            for (var i = 0; i < array.length; i++) {
                if (array[i].id === id) {
                    return array[i];
                }
            }
        }
        const toggle = isInstock ? "product-page__instock" : "product-page__outofstock";

        return (
            this.state.warehouse.length > 1 ?
            <div className="product-page">
                <div className="product-page__header">
                    <div className="product-page__upper-container">
                        <Link to="/inventory" className="product-page__back-link">
                            <img src={backArrow} className="product-page__arrow" alt="back arrow" />
                        </Link>
                        <h1 className="product-page__title">
                            {name}
                        </h1>
                    </div>
                    <h5 className={`${toggle} product-page__headings--instock`}>
                        {isInstock? "In Stock" : "Out of Stock"}
                    </h5>
                </div>
                <ProductItem 
                    description={description} 
                    reference={reference}
                    name={(search(warehouseId, this.state.warehouse)).contact.name}
                    lastOrdered={lastOrdered}
                    location={location}
                    quantity={quantity}
                    categories={categories} 
                    isInstock={isInstock}
                    />
                <button className="product-page__button">EDIT</button>
            </div> : null
        )
    }
}

export default ProductView
