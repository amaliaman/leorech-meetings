import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class ActionIndicator extends Component {
    render() {
        return (
            <div className='action-indicator'>
                {this.props.isAction && <Loader type="ThreeDots" />}
            </div>
        );
    }
}

export default ActionIndicator;