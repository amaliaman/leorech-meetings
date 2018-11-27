import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { validation, fields, buttons, bsColors } from '../../constants/strings';
import ActionIndicator from '../general/ActionIndicator';

@inject(stores => {
    const { departments } = stores.rootStore.departmentStore;
    const { attendees } = stores.rootStore.attendeeStore;
    const { createMeeting, isAction, actionMessage } = stores.rootStore.meetingStore;
    return { departments, attendees, createMeeting, isAction, actionMessage };
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
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>{fields.PATIENT_NAME}</Label>
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
                        <Label>{fields.DEPARTMENT}</Label>
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
                        <Label>{fields.ATTENDEE}</Label>
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

                    <div className='button-indicator'>
                        <Button color={bsColors.INFO} type='submit'>{buttons.SUBMIT}</Button>
                        <ActionIndicator isAction={this.props.isAction} actionMessage={this.props.actionMessage} />
                    </div>
                </Form>
        );
    }
}

export default NewMeetingForm;