import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { links, routes, APP_TITLE, bsColors, BS_BREAKPOINT } from '../../constants/strings';
import logo from '../../images/logo.svg';

class NavBar extends Component {
    constructor() {
        super();
        this.state = { isOpen: false };

        this.home = { title: APP_TITLE, to: routes.HOME, logoImg: logo };
        this.links = [
            { title: links.NEW, to: routes.NEW },
            { title: links.ADMIN, to: routes.ADMIN },
            { title: 'התנתק', to: '/logout' },//TODO: dynamic login/logout/////////////////////
        ];
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar dark color={bsColors.INFO} expand={BS_BREAKPOINT}>
                <Container>
                    <NavLink className='logo navbar-brand' onClick={this.state.isOpen && this.toggle} exact to={this.home.to}>
                        <img src={this.home.logoImg} alt='logo' />
                        <span>{this.home.title}</span>
                    </NavLink>

                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            {this.links.map((l, i) => (
                                <NavItem key={i}>
                                    <NavLink className='nav-link' to={l.to} activeClassName='active' onClick={this.state.isOpen && this.toggle} exact>{l.title}</NavLink>
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