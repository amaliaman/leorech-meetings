import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';

import strings from '../../utils/Strings';

@inject(stores => ({
    departments: stores.rootStore.departmentStore.departments,
    attendees: stores.rootStore.attendeeStore.attendees,
    createMeeting: stores.rootStore.meetingStore.createMeeting,
}))
@observer
class NewMeetingForm extends Component {
    @observable patient = '';
    @observable department = '';
    @observable attendee = '';

    handleChange = e => {
        this[e.target.name] = e.target.value;
    };

    handleRequired = e => {
        e.target.setCustomValidity(strings.required);
    };

    handleResetRequired = e => {
        e.target.setCustomValidity('');
    };

    @action handleSubmit = async e => {
        e.preventDefault();
        const meeting = {
            patient: this.patient,
            therapist: 'אלינה', // TODO: replace with current user ///////////////
            attendeeId: this.attendee,
            departmentId: this.department,
            reportDate: new Date(), ////////////////// TODO: with timezone
        };
        await this.props.createMeeting(meeting);
        this.patient = '';
        this.department = '';
        this.attendee = '';
    };

    render() {
        return (
            <div className='new-container'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='patientName'>{strings.patientName}</label>
                        <input
                            name='patient'
                            type='text'
                            placeholder={strings.patientName}
                            value={this.patient}
                            onChange={this.handleChange}
                            onInvalid={this.handleRequired}
                            onInput={this.handleResetRequired}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='department'>{strings.department}</label>
                        <select
                            name='department'
                            onChange={this.handleChange}
                            value={this.department}
                            onInvalid={this.handleRequired}
                            onInput={this.handleResetRequired}
                            required
                        >
                            <option value='' disabled>{strings.department}</option>
                            {this.props.departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor='attendee'>{strings.attendee}</label>
                        <select
                            name='attendee'
                            onChange={this.handleChange}
                            value={this.attendee}
                            onInvalid={this.handleRequired}
                            onInput={this.handleResetRequired}
                            required
                        >
                            <option value='' disabled>{strings.attendee}</option>
                            {this.props.attendees.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                        </select>
                    </div>

                    <div className='button-indicator'>
                        <div>
                            <button type='submit'>{strings.submit}</button>
                            {/* <ActionIndicator />///////////////////////////////////////////// */}
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default NewMeetingForm;