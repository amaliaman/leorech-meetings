import React from 'react';
import { Alert } from 'reactstrap';

const AlertWrapper = props => {
    return (
        <Alert color={props.color} isOpen={props.visible} toggle={props.onDismiss}>
            {props.alertText}
        </Alert>
    );
}

export default AlertWrapper;