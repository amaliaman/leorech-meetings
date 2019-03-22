import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';

import styles from './NavBar.module.scss';

import { links, routes, APP_TITLE } from '../../constants/strings';
import StringUtils from '../../utils/StringUtils';
import logo from '../../images/logo.svg';

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

            <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
      </a>

                        <a className="navbar-item">
                            Documentation
      </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
        </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
          </a>
                                <a className="navbar-item">
                                    Jobs
          </a>
                                <a className="navbar-item">
                                    Contact
          </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
          </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
          </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            // <nav className='navbar navbar-expand-md bg-primary navbar-dark'>
            //     <div className='container'>
            //         <NavLink className={logoClass} to={this.home.to} exact>
            //             <img src={this.home.logoImg} alt='logo' />
            //             <span>{this.home.title}</span>
            //         </NavLink>

            //         <button
            //             className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggle'
            //             aria-controls='navbarToggle' aria-expanded='false' aria-label='Toggle navigation'>
            //             <span className='navbar-toggler-icon'></span>
            //         </button>

            //         <div className='collapse navbar-collapse' id='navbarToggle'>
            //             <ul className='navbar-nav'>
            //                 <li className='nav-item'>
            //                     <a className='button is-primary is-outlined is-loading' href='#' role='button' data-toggle='modal' data-target='#newMeetingModal'>
            //                         {links.NEW}
            //                     </a>
            //                 </li>

            //                 {this.links.map(l => (
            //                     <NavBarLink key={StringUtils.generateKey()} to={l.to} title={l.title} />
            //                 ))}
            //             </ul>
            //         </div>
            //     </div>
            // </nav>
        );
    }
}
// Check why only applying 'active' class after refresh/////////////////////////////////
const NavBarLink = props => {
    return (
        <li className='nav-item'>
            <NavLink className='button is-danger' to={props.to} activeClassName='active' exact>
                {props.title}
            </NavLink>
        </li>
    );
};

export default NavBar;