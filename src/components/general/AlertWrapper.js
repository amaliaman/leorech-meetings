import React, { Component } from 'react';
// import { Alert } from 'reactstrap';

class AlertWrapper extends Component {
    render() {
        return (
            <div className={`alert alert-${this.props.color}`} role="alert">
                {/* <Alert color={this.props.color} isOpen={this.props.visible} toggle={this.props.onDismiss} className='main-alert'> */}
                {this.props.alertText}
            </div>
        );
    }
}

export default AlertWrapper;