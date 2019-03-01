import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';

import { validation, fields } from '../../constants/strings';
import FormFooter from '../general/FormFooter';
import { FormRow } from '../common/form/FormRow';
import { FormInputText, FormInputSelect } from '../common/form/FormInputs';

@inject(stores => {
    const { departments } = stores.rootStore.departmentStore;
    const { attendees } = stores.rootStore.attendeeStore;
    const { createMeeting, isAction } = stores.rootStore.meetingStore;
    return { departments, attendees, createMeeting, isAction };
})
@observer
class NewMeetingForm extends Component {
    @observable patient = '';
    @observable department = '';
    @observable attendee = '';

    @action handleChange = e => {
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
        // this.props.toggleAddModal();
        this.patient = '';
        this.department = '';
        this.attendee = '';
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormRow label={fields.PATIENT_NAME}>
                    <FormInputText
                        name='patient'
                        placeholder={fields.PATIENT_NAME}
                        value={this.patient}
                        onChange={this.handleChange}
                        onInvalid={this.handleRequired}
                        onInput={this.handleResetRequired}
                        required
                    />
                </FormRow>

                <FormRow label={fields.DEPARTMENT}>
                    <FormInputSelect
                        name='department'
                        label={fields.DEPARTMENT}
                        options={this.props.departments}
                        onChange={this.handleChange}
                        value={this.department}
                        onInvalid={this.handleRequired}
                        onInput={this.handleResetRequired}
                        required
                    />
                </FormRow>

                <FormRow label={fields.ATTENDEE}>
                    <FormInputSelect
                        name='attendee'
                        label={fields.ATTENDEE}
                        options={this.props.attendees}
                        onChange={this.handleChange}
                        value={this.attendee}
                        onInvalid={this.handleRequired}
                        onInput={this.handleResetRequired}
                        required
                    />
                </FormRow>

                <FormFooter cancel={this.props.toggleAddModal} isAction={this.props.isAction} />
            </form>
        );
    }
}
// TODO: add id to label for click input, pladeholder+disabled option color brighter
export default NewMeetingForm;