import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

class NavBar extends Component {
    render() {
        return (
            <header className="header">
                <div className='nav-container'>
                    <NavLink exact to='/' className="logo"><div className='logo-text'><img src={logo} alt='logo' height={24} />דיווח פגישות</div></NavLink>

                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                    <ul className="menu">
                        <li><NavLink to='/new'>חדש</NavLink></li>
                        <li><NavLink to='/login'>התנתק</NavLink></li> {/* ///////////////// sign in or sign out - dynamically */}
                    </ul>
                </div>
            </header>
        );
    }
}

export default NavBar;