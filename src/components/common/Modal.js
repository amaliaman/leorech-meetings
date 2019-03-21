import React, { Component } from 'react';
import classNames from 'classnames';

class Modal extends Component {
    render() {
        const modalClass = classNames({
            'modal fade': true,
            // 'show': this.props.show,
        });

        return (
            <div className={modalClass} id={this.props.modalId} tabIndex={-1} role="dialog"
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

export default Modal;