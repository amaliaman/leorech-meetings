import React, { Fragment } from 'react';

export const FormInputText = props => {
    return <input className="form-control" type='text' {...props} />;
};

export const FormInputSelect = props => {
    const { options, label, ...otherProps } = props;
    return (
        <select className="form-control" {...otherProps}>
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