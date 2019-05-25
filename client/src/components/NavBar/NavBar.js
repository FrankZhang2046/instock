import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Logo-instock.svg';
import './NavBar.scss';

export class NavBar extends Component {
    state = {
        current: true
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav">
                        <div className="nav__wrapper">
                            <Link to="/inventory" class="nav__logo-link">
                                <img src={logo} alt="BandSite logo" className="nav__logo" />
                            </Link>
                            <ul className="nav__links">
                                <Link to="/inventory">
                                    <li className="nav__links-inv" >Inventory</li>
                                </Link>
                                <Link to="/locations">
                                    <li className="nav__links-loc" >Locations</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

// export default NavBar
