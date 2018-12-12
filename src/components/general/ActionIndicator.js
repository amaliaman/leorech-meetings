import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class ActionIndicator extends Component {
    render() {
        return (
            <div className='action-indicator'>
                {this.props.isAction && <Loader type="ThreeDots" />}
                {this.props.actionMessage && <div className='action-message'>{this.props.actionMessage}</div>}
            </div>
        );
    }
}

export default ActionIndicator;