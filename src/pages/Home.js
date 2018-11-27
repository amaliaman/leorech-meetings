import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { titles, buttons, routes, bsColors } from '../constants/strings';
import MeetingsTable from '../components/main/MeetingsTable';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to={routes.NEW}><Button color={bsColors.INFO}>{buttons.NEW_MEETING}</Button></Link>
                <section>
                    <h3>{titles.LATEST}</h3>
                    <MeetingsTable />
                </section>
            </div>
        );
    }
}

export default Home;