import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Loader from 'react-loader-spinner';

@observer
class ActionIndicator extends Component {
    render() {
        return (
            <div>
                {this.props.isAction && <Loader type="ThreeDots" />}
                {this.props.actionMessage && <div className='action-message'>{this.props.actionMessage}</div>}
            </div>
        );
    }
}

export default ActionIndicator;