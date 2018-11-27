import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CustomLoader from '../general/CustomLoader';

import { tableHeaders } from '../../constants/strings';
import stringUtils from '../../utils/StringUtils';

@inject(stores => {
    const { meetings, isLoading } = stores.rootStore.meetingStore;
    return { meetings, isLoading };
})
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
                            <span>{stringUtils.getDateString(new Date(m.reportDate))}</span>
                        </div>
                    ))}
                </div>
            </CustomLoader>
        );
    }
}

export default MeetingsTable;