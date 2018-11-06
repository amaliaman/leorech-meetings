import React, { Component } from 'react';
import NewMeetingForm from './NewMeetingForm';

class NewMeeting extends Component {
    render() {
        return (
            <div className='main'>
                <h3>הוספת פגישה</h3>
                <NewMeetingForm />
            </div>
        );
    }
}

export default NewMeeting;