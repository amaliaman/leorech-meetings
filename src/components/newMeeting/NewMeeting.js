import React, { Component } from 'react';

import NewMeetingForm from './NewMeetingForm';
import { titles } from '../../constants/strings';

class NewMeeting extends Component {
    render() {
        return (
            <div className='main'>
                <h3>{titles.ADD_MEETING}</h3>
                <NewMeetingForm />
            </div>
        );
    }
}

export default NewMeeting;