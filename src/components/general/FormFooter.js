import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';

import { buttons, bsColors } from '../../constants/strings';

import ActionIndicator from '../general/ActionIndicator';

class FormFooter extends Component {
    render() {
        return (
            <Fragment>
                <Button color={bsColors.INFO} type='submit'>{buttons.SUBMIT}</Button>
                <Button color={bsColors.SECONDARY} outline onClick={this.props.cancel}>{buttons.CANCEL}</Button>
                <ActionIndicator isAction={this.props.isAction} actionMessage={this.props.actionMessage} />
            </Fragment>
        );
    }
}

export default FormFooter;