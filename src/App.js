import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';
import { routes } from './constants/strings';
import NavBar from './components/general/NavBar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import NewMeeting from './components/newMeeting/NewMeeting';
import ErrorMessage from './components/general/ErrorMessage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Container>
                        <ErrorMessage />
                        <Route path={routes.HOME} exact component={Home} />
                        <Route path={routes.NEW} exact component={NewMeeting} />
                        <Route path={routes.ADMIN} exact component={Admin} />
                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;