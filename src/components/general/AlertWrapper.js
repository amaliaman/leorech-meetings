import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class AlertWrapper extends Component {
    render() {
        return (
            <Alert color={this.props.color} isOpen={this.props.visible} toggle={this.props.onDismiss} className='main-alert'>
                {this.props.alertText}
            </Alert>
        );
    }
}

export default AlertWrapper;