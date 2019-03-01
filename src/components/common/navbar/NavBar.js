import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';

import styles from './NavBar.module.scss';

import { links, routes, APP_TITLE } from '../../../constants/strings';
import StringUtils from '../../../utils/StringUtils';
import logo from '../../../images/logo.svg';

@inject(stores => ({
    toggleAddModal: stores.rootStore.meetingStore.toggleAddModal
}))
@observer
class NavBar extends Component {
    constructor() {
        super();
        this.home = { title: APP_TITLE, to: routes.HOME, logoImg: logo };
        this.links = [
            { title: links.ADMIN, to: routes.ADMIN },
            { title: 'התנתק', to: '/logout' },//TODO: dynamic login/logout/////////////////////
        ];
    }

    render() {
        const logoClass = classNames(styles.logo, 'navbar-brand');

        return (
            <nav className='navbar navbar-expand-md bg-primary navbar-dark'>
                <div className='container'>
                    <NavLink className={logoClass} to={this.home.to} exact>
                        <img src={this.home.logoImg} alt='logo' />
                        <span>{this.home.title}</span>
                    </NavLink>

                    <button
                        className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggle'
                        aria-controls='navbarToggle' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarToggle'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#' role='button' data-toggle='modal' data-target='#newMeetingModal'>
                                    {links.NEW}
                                </a>
                            </li>

                            {this.links.map(l => (
                                <NavBarLink key={StringUtils.generateKey()} to={l.to} title={l.title} />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
// Check why only applying 'active' class after refresh/////////////////////////////////
const NavBarLink = props => {
    return (
        <li className='nav-item'>
            <NavLink className='nav-link' to={props.to} activeClassName='active' exact>
                {props.title}
            </NavLink>
        </li>
    );
};

export default NavBar;