import React from 'react';

export const FormRow = props => {
    return (
        <div className="form-group row">
            <label className="col-sm-3 col-form-label">{props.label}</label>
            <div className="col-sm-9">
                {props.children}
            </div>
        </div>
    )
};