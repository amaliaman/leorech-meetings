import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import Modal from 'react-responsive-modal';

import { buttons } from '../../constants/strings';
import EditableItem from './EditableItem';
import ItemForm from './ItemForm';
import CustomLoader from '../general/CustomLoader';

@observer
class EditableList extends Component {
    @observable isModalOpen = false;

    @action toggleModal = () => {
        this.isModalOpen = !this.isModalOpen;
    };

    render() {
        const { title, field,
            store: { items, createItem, isAction, actionMessage, isLoading, error, deleteItem, updateItem }
        } = this.props;

        return (
            <div>
                <h4>{title}</h4>
                <CustomLoader isLoading={isLoading}>
                    {items.map(i => <EditableItem key={i.id} item={i} deleteItem={deleteItem} updateItem={updateItem} field={field} />)}
                    {!error && <button className='invert' onClick={this.toggleModal}>{buttons.NEW_ITEM}</button>}
                </CustomLoader >
                {error && <div className='error local'>{error}</div>}
                <Modal open={this.isModalOpen} onClose={this.toggleModal} center>
                    <ItemForm
                        formAction={createItem}
                        isEditMode={false}
                        field={field}
                        toggle={this.toggleModal}
                        isAction={isAction}
                        actionMessage={actionMessage}
                    />
                </Modal>
            </div>
        );
    }
}

export default EditableList;