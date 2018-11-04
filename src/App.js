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
                <div>
                    <NavBar />

                    <div className='main-container'>
                        {/* Home */}
                        <Route path="/" exact render={() => <Home />} />

                        {/* New meeting */}
                        <Route path="/new" exact render={() => <NewMeeting />} />
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;