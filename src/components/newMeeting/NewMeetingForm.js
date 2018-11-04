import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class NewMeetingForm extends Component {
    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='שם המטופל' placeholder='שם המטופל' />
                    <Form.Input fluid label='אגף' placeholder='אגף' />
                    <Form.Select fluid label='Gender' options={{ key: 'm', text: 'Male', value: 'male' }} placeholder='Gender' />
                </Form.Group>
            </Form>
        );
    }
}

export default NewMeetingForm;