import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CustomLoader from '../general/CustomLoader';

import { tableHeaders, LOCALE } from '../../constants/strings';

@inject(stores =>
    // {
    //     const store = stores.rootStore.meetingStore;
    //     return { store: { meetings, isLoading } };
    // })
    ({
        meetings: stores.rootStore.meetingStore.meetings,
        isLoading: stores.rootStore.meetingStore.isLoading,
    })
)
@observer
class MeetingsTable extends Component {
    render() {
        const headers = Object.values(tableHeaders);

        return (
            <CustomLoader isLoading={this.props.isLoading}>
                <div className='table-wrapper'>
                    <div className='table-header'>
                        {headers.map((h, i) => <span key={i}>{h}</span>)}
                    </div>

                    {this.props.meetings.map(m => (
                        <div className='table-row' key={m.id}>
                            <span className='mobile-only'>{tableHeaders.THERAPIST}</span>
                            <span>{m.therapist}</span>
                            <span className='mobile-only'>{tableHeaders.PATIENT}</span>
                            <span>{m.patient}</span>
                            <span className='mobile-only'>{tableHeaders.DEPARTMENT}</span>
                            <span>{m.department.name}</span>
                            <span className='mobile-only'>{tableHeaders.ATTENDEE}</span>
                            <span>{m.attendee.name}</span>
                            <span className='mobile-only'>{tableHeaders.REPORT_DATE}</span>
                            <span>{(new Date(m.reportDate)).toLocaleString(LOCALE)}</span>
                        </div>
                    ))}
                </div>
            </CustomLoader>
        );
    }
}

export default MeetingsTable;