import React, { Component } from 'react'
import kebab from '../../assets/icons/SVG/Icon-kebab-default.svg';
import './styles.scss'

export class InventoryData extends Component {

    render() {
        const { name, description, quantity, lastOrdered, location, isInstock } = this.props.inventorydata;
        return (
            <div className="product">
            <div className="product__item">ITEM</div>
                <p><div className="product__title"> 
                <div className="product__title--name">{name} </div> 
                    <div className="product__title--icon">    
                        <img src={kebab} alt="iconkebab"/> </div>            
                </div>
                </p>
                <p><div className="product__description">{description}</div></p>
                <p><div className="product__order">LAST ORDERED</div></p>
                <p><div className="product__order--date">{lastOrdered}</div>
                    
                </p>
                
                <div className="product__location"><p>LOCATION</p></div> 
                    <p><div className="product__location1">{location}</div></p>
            
                <div className="product__quantity"><p>QUANTITY</p></div>
                <div className="product__available"><p>{quantity}</p></div>
                
                <p><div className="product__status">STATUS</div>
                    <div className="product__info">{isInstock}</div> 
                </p>
                    <div className="product__border"></div>

            </div>
        )
    }
}

export default InventoryData;