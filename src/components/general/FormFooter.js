import React, { Component } from 'react';
// import { Button } from 'reactstrap';

import { buttons, bsColors } from '../../constants/strings';

import ActionIndicator from '../general/ActionIndicator';

class FormFooter extends Component {
    render() {
        return (
            <div className='button-row'>
                <button type="submit" className={`btn btn-${bsColors.INFO}`}>{buttons.SUBMIT}</button>
                {/* <Button color={bsColors.INFO} type='submit'>{buttons.SUBMIT}</Button> */}
                {!this.props.isAction &&
                    <button type="button" className={`btn btn-${bsColors.SECONDARY}`} onClick={this.props.cancel}>{buttons.CANCEL}</button>
                    // <Button color={bsColors.SECONDARY} outline onClick={this.props.cancel}>{buttons.CANCEL}</Button>
                }
                <ActionIndicator isAction={this.props.isAction} />
            </div>
        );
    }
}

export default FormFooter;