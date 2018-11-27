import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { titles, buttons, routes } from '../constants/strings';
import MeetingsTable from '../components/main/MeetingsTable';

class Home extends Component {
    render() {
        return (
            <div className='main'>
                <Link to={routes.NEW}><button>{buttons.NEW_MEETING}</button></Link>
                <section>
                    <h3>{titles.LATEST}</h3>
                    <MeetingsTable />
                </section>
            </div>
        );
    }
}

export default Home;