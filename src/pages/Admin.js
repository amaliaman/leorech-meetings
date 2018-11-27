import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

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
            <div>
                <h3>{titles.ADMIN_LISTS}</h3>
                <div className='admin-lists'>
                    <div className='admin-list'>
                        <EditableList store={this.props.departmentStore} title={titles.DEPARTMENTS} field={fields.DEPARTMENT} />
                    </div>
                    <div className='admin-list'>
                        <EditableList store={this.props.attendeeStore} title={titles.ATTENDEES} field={fields.ATTENDEE} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminContainer;