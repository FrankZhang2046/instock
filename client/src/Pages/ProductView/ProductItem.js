import React, { Component } from 'react'

export class ProductItem extends Component {

    
    render() {
        const toggle = this.props.isInstock? "product-item__instock" : "product-item__outofstock"
        return (
            <div>
                <section className="product-item">
                    <h5 
                    className={`${toggle} + product-item__headings product-item__headings--instock`}>
                        {this.props.isInstock? "In Stock" : "Out of Stock"}
                    </h5>
                    <h5 className="product-item__headings product-item__headings--description">
                        ITEM DESCRIPTION
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.description}
                    </p>
                    <h5 className="product-item__headings product-item__headings--orderedby">
                        ORDERED BY
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.name}
                    </p>
                    <h5 className="product-item__headings product-item__headings--reference">
                        REFERENCE NUMBER
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.reference}
                    </p>
                    <h5 className="product-item__headings product-item__headings--lastordered">
                        LAST ORDERED
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.lastOrdered}
                    </p>
                    <h5 className="product-item__headings product-item__headings--location">
                        LOCATION
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.location}
                    </p>
                    <h5 className="product-item__headings product-item__headings--quantity">
                        QUANTITY
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.quantity}
                    </p>
                    <h5 className="product-item__headings product-item__headings--categories">
                        CATEGORIES
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.categories}
                    </p>
                </section>
            </div>
        )
    }
}

export default ProductItem
