import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row } from 'reactstrap';

import { titles, fields } from '../constants/strings';
import EditableList from '../components/admin/EditableList';

@inject(stores => ({
    departmentStore: stores.rootStore.departmentStore,
    attendeeStore: stores.rootStore.attendeeStore,
}))
@observer
class AdminContainer extends Component {
    render() {
        return (
            <>
                <h3>{titles.ADMIN_LISTS}</h3>
                <Row>
                    <EditableList store={this.props.departmentStore} title={titles.DEPARTMENTS} field={fields.DEPARTMENT} />
                    <EditableList store={this.props.attendeeStore} title={titles.ATTENDEES} field={fields.ATTENDEE} />
                </Row>
            </>
        );
    }
}

export default AdminContainer;