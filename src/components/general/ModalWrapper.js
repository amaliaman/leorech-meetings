import React, { Component } from 'react';
// import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalWrapper extends Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {this.props.title}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        {/* <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}> */}
                        {/* <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader> */}
                        <div className="modal-body">{this.props.children}</div>
                        {/* <ModalBody>{this.props.children}</ModalBody> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWrapper;