import React, { Component } from 'react';

import MeetingsTable from './MeetingsTable';
import strings from '../../utils/Strings';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className='main'>
                <Link to='/new'><button>{strings.newButtonTitle}</button></Link>
                <section>
                    <h3>{strings.latestMeetingsTitle}</h3>
                    <MeetingsTable />
                </section>
            </div>
        );
    }
}

export default Home;