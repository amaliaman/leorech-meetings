import React, { Component } from 'react';

import NewMeetingForm from './NewMeetingForm';
import strings from '../../utils/Strings';

class NewMeeting extends Component {
    render() {
        return (
            <div className='main'>
                <h3>{strings.addMeetingTitle}</h3>
                <NewMeetingForm />
            </div>
        );
    }
}

export default NewMeeting;