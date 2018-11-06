import React, { Component } from 'react';

class NewMeetingForm extends Component {
    render() {
        return (
            <div className='new-container'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="patientName">שם המטופל</label>
                        <input
                            name='patient'
                            type='text'
                            placeholder='שם המטופל'
                            value={this.patient}
                            onChange={this.handleChange}
                            required
                            title='שדה חובה'
                        />
                    </div>

                    <div>
                        <label htmlFor="department">אגף</label>
                        <select
                            name='department'
                            onChange={this.handleChange}
                            value={this.department}
                            required
                        >
                            <option value='' disabled>אגף</option>
                            {/* {this.props.departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)} */}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="attendee">עם מי</label>
                        <select
                            name='attendee'
                            onChange={this.handleChange}
                            value={this.attendee}
                            required
                        >
                            <option value='' disabled>עם מי</option>
                            {/* {this.props.attendees.map(d => <option key={d.id} value={d.id}>{d.name}</option>)} */}
                        </select>
                    </div>

                    <div className='button-indicator'>
                        <div>
                            <button type='submit'>שמור</button>
                            {/* <ActionIndicator /> */}
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default NewMeetingForm;