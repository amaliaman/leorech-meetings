import React from 'react';
import classNames from 'classnames';
import { Label } from 'reactstrap';

import './MiniLabel.scss';

const MiniLabel = props => {
    const { className, isVisible, otherProps } = props;
    const labelClass = classNames({ 'mini': true, 'label-visible': isVisible, [className]: true });

    return (
        <div className='label-wrapper'>
            <Label {...otherProps} className={labelClass}>
                {props.children}
            </Label>
        </div>
    );
};

export default MiniLabel;