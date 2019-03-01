import React, { Component } from 'react';

import { MobileView } from '../general/ResponsiveWrappers';
import { titles, buttons } from '../../constants/strings';
import MeetingsTable from '../main/MeetingsTable';

class Home extends Component {
    render() {
        return (
            <div>
                <MobileView>
                    <button type="button" className="btn btn-info" /* TODO: change color */ data-toggle="modal" data-target="#newMeetingModal">
                        {buttons.NEW_MEETING}
                    </button>
                </MobileView>
                <h3>{titles.LATEST_MEETINGS}</h3>
                <MeetingsTable />
            </div>
        );
    }
}

export default Home;