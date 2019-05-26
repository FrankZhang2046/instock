import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import shortid from 'shortid';
import ProductItem from './ProductItem';
import backArrow from '../../assets/icons/SVG/Icon-back-arrow.svg';
import './products.scss';


export class ProductView extends Component {
    state = {
        warehouse : []
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/warehouse`)
            .then(result => {
                this.setState({warehouse: result.data}
                    )
                console.log(this.state.warehouse)}
            )
    }

    render() {

        const { categories, description, lastOrdered, location, name, quantity, isInstock, warehouseId } = this.props.location.state.test;
        const currentWarehouse = this.state.warehouse
                                    .filter(warehouse => 
                                    warehouse.id === warehouseId
                                );
        console.log(currentWarehouse);

        return (
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
                    // name={currentWarehouse.contact.name}
                    lastOrdered={lastOrdered}
                    location={location}
                    quantity={quantity}
                    categories={categories} 
                    isInstock={isInstock}
                    />
                <button className="product-page__button">EDIT</button>
            </div>
        )
    }
}

export default ProductView
