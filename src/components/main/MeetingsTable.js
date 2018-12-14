import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Table, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

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
        const textColor = `text-${bsColors.INFO}`;
        return (
            <CustomLoader isLoading={this.props.isLoading}>

                <DefaultView>
                    <Table responsive borderless striped size='sm'>
                        <thead>
                            <tr>
                                {headers.map((h, i) => <th key={i} className={textColor}>{h}</th>)}
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
                    <ListGroup flush>
                        {this.props.meetings.map(m => (
                            <ListGroupItem key={m.id}>
                                <ListGroupItemHeading className={textColor}>{m.patient}</ListGroupItemHeading>
                                <div className="d-flex justify-content-between">
                                    <div><span>{tableHeaders.DEPARTMENT}</span>: <span>{m.department.name}</span></div>
                                    <div><span>{tableHeaders.ATTENDEE}</span>: <span>{m.attendee.name}</span></div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <small>{stringUtils.getDateString(new Date(m.reportDate))}</small>
                                    <small>{m.therapist}</small>
                                </div>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </MobileView>

            </CustomLoader >
        );
    }
}

export default MeetingsTable;