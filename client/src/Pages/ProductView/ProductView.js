import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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

        function search(id, array){
            for (var i = 0; i < array.length; i++) {
                if (array[i].id === id) {
                    return array[i];
                }
            }
        }
        

        return (
            this.state.warehouse.length > 1 ?
            <div className="product-page">
                <div className="product-page__header">
                    <Link to="/inventory" className="product-page__back-link">
                        <img src={backArrow} className="product-page__arrow" alt="back arrow" />
                    </Link>
                    <h1 className="product-page__title">
                        {name}
                    </h1>
                </div>
                <ProductItem 
                    description={description} 
                    // reference={reference}
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
