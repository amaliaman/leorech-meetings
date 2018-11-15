import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import Modal from 'react-responsive-modal';

import * as icons from '../../constants/icons';

import ItemForm from './ItemForm';

@observer
class EditableItem extends Component {
    @observable name = '';

    @observable isModalOpen = false;

    @action toggleModal = () => {
        this.isModalOpen = !this.isModalOpen;
    };

    @action componentDidMount = () => {
        this.name = this.props.item.name;
    };

    @action onChange = e => {
        this[e.target.name] = e.target.value;
    };

    render() {
        const { item, isAction, deleteItem, field, updateItem } = this.props;
        console.log(isAction)
        return (
            <div className='editable-item'>
                <span className='icon-btn' onClick={this.toggleModal}>{icons.edit}</span>
                <span className='icon-btn' onClick={() => deleteItem(item.id)}>{icons.trash}</span>
                <span>{item.name}</span>
                <Modal open={this.isModalOpen} onClose={this.toggleModal} center>
                    <ItemForm
                        formAction={updateItem}
                        isEditMode={true}
                        field={field}
                        toggle={this.toggleModal}
                        isAction={isAction}
                        actionMessage='dddd'
                        item={item}
                    />
                </Modal>
            </div>
        );
    }
}

export default EditableItem;