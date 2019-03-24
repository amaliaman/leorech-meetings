import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalWrapper = props => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
            <ModalBody>{props.children}</ModalBody>
        </Modal>
    );
}

export default ModalWrapper;