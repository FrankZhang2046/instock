
import React, { Component } from 'react'
// import data from './data.js';
// import iconarrowback from '../../src/Icon-back-arrow';
import '../../styles.scss';
// import axios from 'axios';

export default class Warehouse extends Component {

    // state = {
    //     warehouse: {
    //       data: []
    //     }
    //   }
    
    //   componentDidMount() {
    
    //     axios.get(`./data.js`)
    
    //       .then(response => {
    
    //         const warehouse = response.data;
    //         this.setState({ warehouse });
    
    //       })

    //       .catch(error => {
    //         console.log(error);
    //       });
    //   }

      
    render() {
        
        // let { id, name, address, street, suiteNum, city, province,
        //     postal } = this.props.data;
    //     "id": "W0",
    // "name": "Punder Mifflin",
    // "address": {
    // "street": "123 Fake Street W",
    // "suiteNum": "suite 201",
    // "city": "Toronto",
    // "province": "Ontario",
    // "postal": "M6N4B7"
    // },
    // "contact": {
    // "name": "Michael Scarn",
    // "title": "Regional Manager",
    // "phone": "416 679 4324",
    // "email": 
        return (
           
            <div>
                <div className="header">
                    {/* <div className="header__icon"><img src={iconarrowback} alt="iconleft"/></div> */}
                    <div className="header__title">Warehouse Name</div>
                    <p><div className="header__address">ADDRESS</div></p>
                    <p><div className="header__street">123 Main Street W.</div>
                    <div className="header__apt">Suite 201</div>
                    </p>
                    <p> <div className="header__city">Toronto, ON</div>
                    <div className="header__zip">M65GB7 CA</div>
                    </p>
                    <p><div className="header__contact">CONTACT</div>
                    </p>
                    <div className="header__person--name">Mara Weinberg</div>
                    <div className="header__person--position">WareHouse Manager</div>
                    <p><div className="header__phone">+1 416 678 2345</div>
                    <div className="header__email">weinberg@instock.com</div>
                    </p>
                </div> 
                {/* <div className="header__icon"><img src={iconarrowback} alt="iconleft"/></div> */}
                <div className="footer">
                <p><div className="footer__item">ITEM</div></p>
                    <div className="footer__title">Product Name Here</div>
                   
                    <p><div className="footer__description">Here is a very brief description of the product in the inventory...
                    </div>
                    </p>
                    <p><div className="footer__timeline">LAST ORDERED</div></p>
                    <div className="footer__date">05/24/2018</div>
                    <p><div className="footer__location">LOCATION</div></p>
                    <div className="footer__city">Toronto, CAN</div>
                    <p><div className="footer__quantity">QUANTITY</div></p>
                    <p><div className="footer__quantity--number">12,000</div></p>
                    <p><div className="footer__status">STATUS</div></p>
                    <p><div className="footer__status--info">In Stock</div></p>

                </div> 
            </div>
        )
    }
}