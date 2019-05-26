import React, { Component } from 'react'

export class ProductItem extends Component {
    render() {
        return (
            <div>
                <section className="product-item">
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
                        {this.props.description}
                    </p>
                    <h5 className="product-item__headings product-item__headings--reference">
                        REFERENCE NUMBER
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.description}
                    </p>
                    <h5 className="product-item__headings product-item__headings--location">
                        LOCATION
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.description}
                    </p>
                    <h5 className="product-item__headings product-item__headings--quantity">
                        QUANTITY
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.description}
                    </p>
                    <h5 className="product-item__headings product-item__headings--categories">
                        CATEGORIES
                    </h5>
                    <p className="product-item__paragraph">
                        {this.props.description}
                    </p>
                </section>
            </div>
        )
    }
}

export default ProductItem