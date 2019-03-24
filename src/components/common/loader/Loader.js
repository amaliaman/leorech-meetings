import React from 'react';
import { Spinner } from 'reactstrap';

import './Loader.scss';

const Loader = props => {
    return (
        props.isLoading
            ? <div className='loader'><Spinner color={props.color} /></div>
            : props.children
    )
}

export default Loader;