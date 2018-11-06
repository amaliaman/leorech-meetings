import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/general/NavBar';
import Home from './components/main/Home';
import NewMeeting from './components/newMeeting/NewMeeting';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='outer-wrapper'>
                    <NavBar />

                    <div className='page-container'>
                        {/* Home */}
                        <Route path="/" exact render={() => <Home />} />

                        {/* New meeting */}
                        <Route path="/new" exact render={() => <NewMeeting />} />

                        {/* Admin */}
                        <Route path="/admin" exact render={() => <NewMeeting />} /> {/* admin//////////////////////////// */}
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;