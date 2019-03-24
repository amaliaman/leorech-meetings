import React from 'react';
import { Button } from 'reactstrap';

import { buttons, bsColors } from '../../../constants/strings';

import Loader from '../loader/Loader';

import './FormFooter.scss';

const FormFooter = props => {
    return (
        <Loader isLoading={props.isAction} color='danger'>
            <Button color={bsColors.PRIMARY} type='submit'>
                {buttons.SUBMIT}
            </Button>

            <Button color={bsColors.SECONDARY} onClick={props.cancel}>
                {buttons.CANCEL}
            </Button>
        </Loader>
    );
}

export default FormFooter;