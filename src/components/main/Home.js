import React, { Component } from 'react';
import MeetingsTable from './MeetingsTable';


class Home extends Component {
    render() {
        return (
            <div className='main-container'>
                <MeetingsTable />
            </div>
        );
    }
}

export default Home;