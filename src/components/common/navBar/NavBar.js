import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import {
    Container, Collapse, Navbar, NavbarToggler,
    Nav, NavItem, NavLink as BsNavLink
} from 'reactstrap';

import { links, routes, APP_TITLE, bsColors, BS_BREAKPOINT } from '../../../constants/strings';
import logo from '../../../images/logo.svg';

import './NavBar.scss';

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
            { title: 'התנתק', to: '/logout' },//TODO: dynamic login/logout
        ];
    }

    toggleNavbar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleNavbarClose = () => {
        this.state.isOpen && this.toggleNavbar();
    };

    toggleModal = () => {
        this.props.toggleAddModal();
        this.toggleNavbarClose();
    };

    render() {
        return (
            <Navbar dark color={bsColors.INFO} expand={BS_BREAKPOINT}>
                <Container>
                    <NavLink className='logo navbar-brand' onClick={this.toggleNavbarClose} exact to={this.home.to}>
                        <img src={this.home.logoImg} alt='logo' />
                        <span>{this.home.title}</span>
                    </NavLink>

                    <NavbarToggler onClick={this.toggleNavbar} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <BsNavLink href='#' role='button' onClick={this.toggleModal}>{links.NEW}</BsNavLink>
                            </NavItem>

                            {this.links.map((l, i) => (
                                <NavItem key={i}>
                                    <NavLink className='nav-link' to={l.to} activeClassName='active' onClick={this.toggleNavbarClose} exact>{l.title}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;