import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';

import { validation, fields, buttons } from '../../constants/strings';
import ActionIndicator from '../general/ActionIndicator';

@inject(stores => ({
    departments: stores.rootStore.departmentStore.departments,
    attendees: stores.rootStore.attendeeStore.attendees,
    createMeeting: stores.rootStore.meetingStore.createMeeting,
    isAction: stores.rootStore.meetingStore.isAction,
    actionMessage: stores.rootStore.meetingStore.actionMessage,
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
        e.target.setCustomValidity(validation.REQUIRED);
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
            reportDate: Date.now(),
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
                        <label htmlFor='patientName'>{fields.PATIENT_NAME}</label>
                        <input
                            name='patient'
                            type='text'
                            placeholder={fields.PATIENT_NAME}
                            value={this.patient}
                            onChange={this.handleChange}
                            onInvalid={this.handleRequired}
                            onInput={this.handleResetRequired}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='department'>{fields.DEPARTMENT}</label>
                        <select
                            name='department'
                            onChange={this.handleChange}
                            value={this.department}
                            onInvalid={this.handleRequired}
                            onInput={this.handleResetRequired}
                            required
                        >
                            <option value='' disabled>{fields.DEPARTMENT}</option>
                            {this.props.departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor='attendee'>{fields.ATTENDEE}</label>
                        <select
                            name='attendee'
                            onChange={this.handleChange}
                            value={this.attendee}
                            onInvalid={this.handleRequired}
                            onInput={this.handleResetRequired}
                            required
                        >
                            <option value='' disabled>{fields.ATTENDEE}</option>
                            {this.props.attendees.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                        </select>
                    </div>

                    <div className='button-indicator'>
                        <div>
                            <button type='submit'>{buttons.SUBMIT}</button>
                            <ActionIndicator isAction={this.props.isAction} actionMessage={this.props.actionMessage} />
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default NewMeetingForm;