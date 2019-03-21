import React, { Component } from 'react';

import { titles } from '../../constants/strings';

import Modal from '../common/Modal';
import NewMeetingForm from './NewMeetingForm';
import FormFooter from '../common/form/FormFooter';

const FORM_ID = 'newMeetingForm';
const MODAL_ID = 'newMeetingModal';

// const NewMeetingModal = props => {
class NewMeetingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <Modal
                title={titles.ADD_MEETING}
                modalId={MODAL_ID}
                show={this.state.showModal}
                onHide={this.close}
                footer={< FormFooter formId={FORM_ID} />}
            >
                <NewMeetingForm formId={FORM_ID} toggleModal={this.toggleModal} />
            </Modal >
        );
    }
};

export default NewMeetingModal;