import React, { Component } from 'react';

class ModalWrapper extends Component {
    render() {
        return (
            <div className="modal fade" id={this.props.modalId} tabIndex={-1} role="dialog"
                aria-labelledby={`${this.props.modalId}Label`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {this.props.title &&
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {this.props.title}
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        }
                        <div className="modal-body">{this.props.children}</div>
                        {this.props.footer &&
                            <div className="modal-footer">
                                {this.props.footer}
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWrapper;