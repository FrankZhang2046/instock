import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                            <Link to="/inventory" className="nav__logo-link">
                                <img src={logo} alt="BandSite logo" className="nav__logo" />
                            </Link>
                            <ul className="nav__links">
                                <NavLink activeClassName='is-active' to="/inventory">
                                    <li className="nav__links-inv" >Inventory</li>
                                </NavLink>
                                <NavLink activeClassName='is-active' to="/locations">
                                    <li className="nav__links-loc" >Locations</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
