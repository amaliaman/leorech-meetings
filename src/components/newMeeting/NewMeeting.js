import React, { Component } from 'react';
import NewMeetingForm from './NewMeetingForm';

class NewMeeting extends Component {
    render() {
        return (
            <div className='main-container'>
            <div>הוספת פגישה</div>
                <NewMeetingForm />
            </div>
        );
    }
}

export default NewMeeting;