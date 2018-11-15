import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import { validation, buttons } from '../../constants/strings';
import ActionIndicator from '../general/ActionIndicator';

@observer
class ItemForm extends Component {
    @observable name = '';

    @action handleChange = e => {
        this[e.target.name] = e.target.value;
    };

    @action handleSubmit = async e => {
        e.preventDefault();
        const { isEditMode, formAction, id } = this.props;
        if (isEditMode) {
            await formAction(id, this.name);
        }
        else {
            await formAction(this.name);
        }
        this.props.toggle();
    };

    handleRequired = e => {
        e.target.setCustomValidity(validation.REQUIRED);
    };

    handleResetRequired = e => {
        e.target.setCustomValidity('');
    };

    @action componentDidMount = () => {
        if (this.props.item) {
            this.name = this.props.item.name;
        }
    };

    render() {
        const { field, toggle, isAction, actionMessage } = this.props;

        return (
            <div className='new-container modal'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='name'>{field}</label>
                        <input
                            type='text'
                            name='name'
                            value={this.name}
                            onChange={this.handleChange}
                            onInvalid={this.handleRequired}
                            onInput={this.handleResetRequired}
                            placeholder={field}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className='button-indicator'>
                        <div>
                            <button type='submit'>{buttons.SUBMIT}</button>
                            <button type='reset' onClick={toggle}>{buttons.CANCEL}</button>
                            <ActionIndicator isAction={isAction} actionMessage={actionMessage} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ItemForm;