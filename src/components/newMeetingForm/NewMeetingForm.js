import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { validation, fields } from '../../constants/strings';
import FormFooter from '../common/formFooter/FormFooter';

@inject(stores => {
    const { departments } = stores.rootStore.departmentStore;
    const { attendees } = stores.rootStore.attendeeStore;
    const { createMeeting, isAction, toggleAddModal } = stores.rootStore.meetingStore;
    return { departments, attendees, createMeeting, isAction, toggleAddModal };
})
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
            therapist: 'אלינה', // TODO: replace with current user
            attendeeId: this.attendee,
            departmentId: this.department,
            reportDate: Date.now(),
        };
        await this.props.createMeeting(meeting);
        this.props.toggleAddModal();
        this.patient = '';
        this.department = '';
        this.attendee = '';
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    // TODO: make wrapped label component, use 'classNames'
                    <div className='wrapper'><Label className={this.patient.length ? 'full' : ''}>{fields.PATIENT_NAME}</Label></div>
                    <Input
                        type='text'
                        name='patient'
                        placeholder={fields.PATIENT_NAME}
                        value={this.patient}
                        onChange={this.handleChange}
                        onInvalid={this.handleRequired}
                        onInput={this.handleResetRequired}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <div className='wrapper'><Label className={this.department.length ? 'full' : ''}>{fields.DEPARTMENT}</Label></div>
                    <Input
                        type="select"
                        name='department'
                        onChange={this.handleChange}
                        value={this.department}
                        onInvalid={this.handleRequired}
                        onInput={this.handleResetRequired}
                        required
                    >
                        <option value='' disabled>{fields.DEPARTMENT}</option>
                        {this.props.departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </Input>
                </FormGroup>

                <FormGroup>
                    {/* <Label>{fields.ATTENDEE}</Label> */}
                    <Input
                        type="select"
                        name='attendee'
                        onChange={this.handleChange}
                        value={this.attendee}
                        onInvalid={this.handleRequired}
                        onInput={this.handleResetRequired}
                        required
                    >
                        <option value='' disabled>{fields.ATTENDEE}</option>
                        {this.props.attendees.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </Input>
                </FormGroup>

                <FormGroup>
                    <FormFooter cancel={this.props.toggleAddModal} isAction={this.props.isAction} />
                </FormGroup>
            </Form >
        );
    }
}

export default NewMeetingForm;