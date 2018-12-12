import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalWrapper extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>{this.props.children}</ModalBody>
            </Modal>
        );
    }
}

export default ModalWrapper;