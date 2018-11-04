import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Button,
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
} from 'semantic-ui-react';

class MobileNavBar extends Component {
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { links } = this.props;
        const { sidebarOpened } = this.state

        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar.Pushable>
                    <Sidebar direction='top' as={Menu} animation='push' vertical visible={sidebarOpened}>
                        {links.map(l => <Menu.Item key={l.to}><NavLink to={l.to}>{l.name}</NavLink></Menu.Item>)}
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handlePusherClick}
                    style={{ minHeight: '100vh' }}
                    >
                        <Segment
                            inverted
                            color='purple'
                            textAlign='center'
                            // style={{ minHeight: 350, padding: '1em 0em' }}
                            vertical
                        >
                            <Container>
                                <Menu
                                    color='olive'
                                    // pointing 
                                    secondary
                                // size='large'
                                >
                                    <Menu.Item >
                                        <Button as='a'>Log in</Button>
                                    </Menu.Item>
                                    <Menu.Item position='left' onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                </Menu>
                            </Container>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

export default MobileNavBar;