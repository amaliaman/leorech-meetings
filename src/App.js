import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { routes } from './constants/strings';
import NavBar from './components/general/NavBar';
import Home from './components/main/Home';
import NewMeeting from './components/newMeeting/NewMeeting';
import Admin from './pages/Admin';
import ErrorMessage from './components/general/ErrorMessage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='outer-wrapper'>
                    <NavBar />
                    <div className='page-container'>
                        <ErrorMessage />
                        <Route path={routes.HOME} exact component={Home} />
                        <Route path={routes.NEW} exact component={NewMeeting} />
                        <Route path={routes.ADMIN} exact component={Admin} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;