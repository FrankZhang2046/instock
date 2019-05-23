import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Logo-instock.svg';
import './NavBar.scss';

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav">
                        <Link to="/">
                            <img src={logo} alt="BandSite logo" className="nav__logo" />
                        </Link>
                        <ul className="nav__links">
                        <Link to="/inventory">
                            <li className="nav__links-bio" id="nav__current">Inventory</li>
                        </Link>
                        <Link to="/locations">
                            <li className="nav__links-shows">Locations</li>
                        </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
