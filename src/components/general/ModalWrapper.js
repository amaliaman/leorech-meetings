import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalWrapper extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} /*className={this.props.className} */>
                <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>{this.props.children}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalWrapper;