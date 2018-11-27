import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import Modal from 'react-responsive-modal';

import * as icons from '../../constants/icons';
import { formModes } from '../../constants/strings';

import ItemForm from './ItemForm';

@observer
class EditableItem extends Component {
    @observable name = '';
    @observable formMode = '';
    @observable formAction = '';
    @observable isModalOpen = false;

    @action toggleModal = () => {
        this.isModalOpen = !this.isModalOpen;
    };

    @action handleEditClick = () => {
        this.formMode = formModes.EDIT;
        this.formAction = this.props.updateItem;
        this.toggleModal();
    };

    @action handleDeleteClick = () => {
        this.formMode = formModes.DELETE;
        this.formAction = this.props.deleteItem;
        this.toggleModal();
    };

    @action componentDidMount = () => {
        this.name = this.props.item.name;
    };

    @action onChange = e => {
        this[e.target.name] = e.target.value;
    };

    render() {
        const { item, isAction, field, actionMessage } = this.props;

        return (
            <div className='editable-item'>
                <span className='icon-btn' onClick={this.handleEditClick}>{icons.EDIT}</span>
                <span className='icon-btn' onClick={this.handleDeleteClick}>{icons.TRASH}</span>
                <span>{item.name}</span>
                <Modal open={this.isModalOpen} onClose={this.toggleModal} center>
                    <ItemForm
                        formAction={this.formAction}
                        formMode={this.formMode}
                        field={field}
                        toggle={this.toggleModal}
                        isAction={isAction}
                        actionMessage={actionMessage}
                        item={item}
                    />
                </Modal>
            </div>
        );
    }
}

export default EditableItem;