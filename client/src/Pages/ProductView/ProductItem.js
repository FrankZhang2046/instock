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
                    <div className="product-item__big-container">
                        <div className="product-item__middle-container">
                            <div className="product-item__list-container">
                                <h5 className="product-item__headings product-item__headings--orderedby">
                                    ORDERED BY
                                </h5>
                                <p className="product-item__paragraph">
                                    {this.props.name}
                                </p>
                            </div>
                            <div className="product-item__list-container">
                                <h5 className="product-item__headings product-item__headings--reference">
                                    REFERENCE NUMBER
                                </h5>
                                <p className="product-item__paragraph">
                                    {this.props.reference}
                                </p>
                            </div>
                            <div className="product-item__list-container">
                                <h5 className="product-item__headings product-item__headings--lastordered">
                                    LAST ORDERED
                                </h5>
                                <p className="product-item__paragraph">
                                    {this.props.lastOrdered}
                                </p>
                            </div>
                            <div className="product-item__list-container">
                                <h5 className="product-item__headings product-item__headings--location">
                                    LOCATION
                                </h5>
                                <p className="product-item__paragraph">
                                    {this.props.location}
                                </p>
                            </div>
                            <div className="product-item__list-container">
                                <h5 className="product-item__headings product-item__headings--quantity">
                                    QUANTITY
                                </h5>
                                <p className="product-item__paragraph">
                                    {this.props.quantity}
                                </p>
                            </div>
                            </div>
                            <div className="product-item__categories-container">
                            <div className="product-item__list-container">
                                <h5 className="product-item__headings product-item__headings--categories">
                                    CATEGORIES
                                </h5>
                                <p className="product-item__paragraph">
                                    {this.props.categories}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ProductItem
