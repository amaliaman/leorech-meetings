import React from 'react';

import { buttons } from '../../../constants/strings';

const FormFooter = props => {
    return (
        <>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">{buttons.CANCEL}</button>
            <button type="submit" className="btn btn-primary" form={props.formId}>{buttons.SUBMIT}</button>
        </>
    );
};

export default FormFooter;