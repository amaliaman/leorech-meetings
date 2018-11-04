import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Button,
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react';

class DesktopNavBar extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { links } = this.props;
        const { fixed } = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        secondary
                        color='pink'
                        inverted
                    >
                        <Container>
                            {links.map(l => <Menu.Item key={l.to}><NavLink to={l.to}>{l.name}</NavLink></Menu.Item>)}
                            <Menu.Item position='left'>
                                <Button as='a'>Log in</Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </Responsive>
        )
    }
}

export default DesktopNavBar;