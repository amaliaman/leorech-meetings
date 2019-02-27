import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink as BsNavLink } from 'reactstrap';

import { links, routes, APP_TITLE, bsColors, BS_BREAKPOINT } from '../../constants/strings';
import logo from '../../images/logo.svg';
import { inject, observer } from 'mobx-react';

@inject(stores => ({
    toggleAddModal: stores.rootStore.meetingStore.toggleAddModal
}))
@observer
class NavBar extends Component {
    constructor() {
        super();
        this.state = { isOpen: false };

        this.home = { title: APP_TITLE, to: routes.HOME, logoImg: logo };
        this.links = [
            { title: links.ADMIN, to: routes.ADMIN },
            { title: 'התנתק', to: '/logout' },//TODO: dynamic login/logout/////////////////////
        ];
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleClose = () => {
        this.state.isOpen && this.toggle();
    };

    toggleModal = () => {
        this.props.toggleAddModal();
        this.toggleClose();
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md bg-danger navbar-dark">
                <div className="container">
                    <NavLink className='logo navbar-brand' onClick={this.toggleClose} exact to={this.home.to}>
                        <img src={this.home.logoImg} alt='logo' />
                        <span>{this.home.title}</span>
                    </NavLink>

                    {/* <NavbarToggler onClick={this.toggle} /> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
                        aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggle">
                        {/* <Collapse isOpen={this.state.isOpen} navbar> */}
                        <ul className="navbar-nav">
                            {/* <Nav navbar className="ml-auto"> */}
                            {/* <NavItem> */}
                            <li className="nav-item">
                            <a className="nav-link" href='#' role='button' data-toggle="modal" data-target="#exampleModal" onClick={this.toggleModal}>{links.NEW}</a>
                                {/* <BsNavLink href='#' role='button' onClick={this.toggleModal}>{links.NEW}</BsNavLink> */}
                            </li>

                            {this.links.map((l, i) => (
                                <li className="nav-item" key={i}>
                                    {/* <NavItem key={i}> */}
                                    <NavLink className='nav-link' to={l.to} activeClassName='active' onClick={this.toggleClose} exact>{l.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;