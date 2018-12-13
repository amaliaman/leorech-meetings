import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
    Table, ListGroup, ListGroupItem, Card, Button, CardImg, CardTitle, CardText, CardColumns, CardHeader,
    CardSubtitle, CardBody
} from 'reactstrap';

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
                    <CardColumns>
                        {this.props.meetings.map(m => (
                            <Card key={m.id} outline color={bsColors.INFO}>
                                <CardHeader>
                                    {stringUtils.getDateString(new Date(m.reportDate))}, {m.therapist}
                                </CardHeader>
                                <CardBody>
                                    {/* <CardTitle>{m.patient}</CardTitle>
                                    <CardSubtitle>{m.therapist}</CardSubtitle> */}
                                    <CardText>
                                        <span className={textColor}>{tableHeaders.THERAPIST}</span>: <span>{m.therapist}</span>,
                                        <span className={textColor}>{tableHeaders.PATIENT}</span>: <span>{m.patient}</span>
                                        <br />
                                        <span className={textColor}>{tableHeaders.DEPARTMENT}</span>: <span>{m.department.name}</span>,
                                        <span className={textColor}>{tableHeaders.ATTENDEE}</span>: <span>{m.attendee.name}</span>
                                    </CardText>
                                </CardBody>
                            </Card>
                        ))}
                    </CardColumns>
                </MobileView>

            </CustomLoader >
        );
    }
}

export default MeetingsTable;