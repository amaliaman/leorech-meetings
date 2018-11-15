import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => {
    const { lastError } = stores.rootStore;
    return { lastError };
})
@observer
class ErrorMessage extends Component {
    render() {
        return (
            <div className='main'>
                {this.props.lastError}
            </div>
        );
    }
}

export default ErrorMessage;