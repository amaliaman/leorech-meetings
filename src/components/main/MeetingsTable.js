import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Table, ListGroup, ListGroupItem } from 'reactstrap';

import CustomLoader from '../general/CustomLoader';
import { MobileView, DefaultView } from '../general/ResponsiveWrappers';

import { tableHeaders, bsColors } from '../../constants/strings';
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
                <DefaultView>
                    <Table responsive borderless striped size='sm'>
                        <thead>
                            <tr>
                                {headers.map((h, i) => <th key={i} className={`text-${bsColors.INFO}`}>{h}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.meetings.map(m => (
                                <tr key={m.id}>
                                    <td>{m.therapist}</td>
                                    <td>{m.patient}</td>
                                    <td>{m.department.name}</td>
                                    <td>{m.attendee.name}</td>
                                    <td>{stringUtils.getDateString(new Date(m.reportDate))}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </DefaultView>

                <MobileView>
                    <ListGroup>
                        {this.props.meetings.map(m => (
                            <ListGroupItem key={m.id}>{/* make grid!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                                <div>{tableHeaders.THERAPIST}: {m.therapist}</div>
                                <div>{tableHeaders.PATIENT}: {m.patient}</div>
                                <div>{tableHeaders.DEPARTMENT}: {m.department.name}</div>
                                <div>{tableHeaders.ATTENDEE}: {m.attendee.name}</div>
                                <div>{tableHeaders.REPORT_DATE}: {stringUtils.getDateString(new Date(m.reportDate))}</div>
                            </ListGroupItem>
                        ))}
                    </ListGroup>

                </MobileView>


                {/* <div className='table-wrapper'>
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
                </div> */}
            </CustomLoader>
        );
    }
}

export default MeetingsTable;