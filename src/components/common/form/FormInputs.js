import React from 'react';

import { validation } from '../../../constants/strings';

const handleRequired = e => {
    e.target.setCustomValidity(validation.REQUIRED);
};

const handleResetRequired = e => {
    e.target.setCustomValidity('');
};

export const FormInputText = props => {
    return (
        <input
            className="form-control"
            type='text'
            onInvalid={handleRequired}
            onInput={handleResetRequired}
            {...props}
        />
    );
};

export const FormInputSelect = props => {
    const { options, label, ...otherProps } = props;
    return (
        <select
            className="form-control"
            onInvalid={handleRequired}
            onInput={handleResetRequired}
            {...otherProps}
        >
            <FormInputSelectOptions options={options} label={label} />
        </select>
    );
};

const FormInputSelectOptions = props => {
    return (
        <>
            <option value='' disabled>{props.label}</option>
            {props.options.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
        </>
    );
};