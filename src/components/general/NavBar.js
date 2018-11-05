import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

class NavBar extends Component {
    constructor() {
        super();
        this.state = { isChecked: false };
        this.home = { title: 'דיווח פגישות', to: '/', logoImg: logo };
        this.links = [
            { title: 'חדש', to: '/new' },
            { title: 'התנתק', to: '/logout' }
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