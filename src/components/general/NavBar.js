import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { links, routes, APP_TITLE } from '../../constants/strings';
import logo from '../../images/logo.svg';

class NavBar extends Component {
    constructor() {
        super();
        this.state = { isChecked: false };
        this.home = { title: APP_TITLE, to: routes.HOME, logoImg: logo };
        this.links = [
            { title: links.NEW, to: routes.NEW },
            { title: links.ADMIN, to: routes.ADMIN },
            { title: 'התנתק', to: '/logout' },//TODO: dynamic login/logout/////////////////////
        ];
    }

    handleCheck = e => {
        this.setState({ [e.target.name]: e.target.checked });
    };

    resetDropMenu = () => {
        this.setState({ isChecked: false });
    };

    render() {
        return (
            <header className='header'>
                <div className='nav-container'>
                    <NavLink exact to={this.home.to} className='logo' onClick={this.resetDropMenu}>
                        <div className='logo-text'>
                            <img src={this.home.logoImg} alt='logo' />
                            <span>{this.home.title}</span>
                        </div>
                    </NavLink>

                    <input name='isChecked' checked={this.state.isChecked} onChange={this.handleCheck} className='menu-btn' type='checkbox' id='menu-btn' />
                    <label className='menu-icon' htmlFor='menu-btn'><span className='navicon'></span></label>

                    <ul className='menu'>
                        {this.links.map((l, i) => (
                            <li key={i}>
                                <NavLink onClick={this.resetDropMenu} to={l.to} activeClassName='active-link' exact>{l.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        );
    }
}

export default NavBar;