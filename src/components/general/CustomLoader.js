import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export class CustomLoader extends Component {
    render() {
        return (
            <div>
                {this.props.isLoading ?
                    (<div className='loader-container'>
                        <Loader type='Oval' />
                    </div>)
                    :
                    <div>{this.props.children}</div>
                }
            </div>
        )
    }
}

export default CustomLoader;