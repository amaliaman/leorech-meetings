import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { buttons, bsColors } from '../../constants/strings';

import ActionIndicator from '../general/ActionIndicator';

class FormFooter extends Component {
    render() {
        return (
            <div className='button-row'>
                <Button color={bsColors.INFO} type='submit'>{buttons.SUBMIT}</Button>
                {!this.props.isAction && <Button color={bsColors.SECONDARY} outline onClick={this.props.cancel}>{buttons.CANCEL}</Button>}
                <ActionIndicator isAction={this.props.isAction} actionMessage={this.props.actionMessage} />
            </div>
        );
    }
}

export default FormFooter;