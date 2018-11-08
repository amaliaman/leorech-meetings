import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => ({
    meetings: stores.rootStore.meetingStore.meetings,
    isLoading: stores.rootStore.meetingStore.isLoading,
}))
@observer
class MeetingsTable extends Component {
    render() {
        const headers = ['מטפל', 'מטופל', 'אגף', 'עם מי', 'תאריך הדיווח'];/////////////string

        return (
            <div className='table-wrapper'>
                <div className='table-header'>
                    {headers.map((h, i) => <span key={i}>{h}</span>)}
                </div>

                {this.props.meetings.map(m => (
                    <div className='table-row' key={m.id}>
                        <span className='mobile-only'>מטפל</span>
                        <span>{m.therapist}</span>
                        <span className='mobile-only'>מטופל</span>
                        <span>{m.patient}</span>
                        <span className='mobile-only'>אגף</span>
                        <span>{m.department.name}</span>
                        <span className='mobile-only'>עם מי</span>
                        <span>{m.attendee.name}</span>
                        <span className='mobile-only'>תאריך</span>
                        <span>{(new Date(m.reportDate)).toLocaleString('he-IL')}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default MeetingsTable;