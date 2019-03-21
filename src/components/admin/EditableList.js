import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import Modal from 'react-responsive-modal';

import { buttons, formModes } from '../../constants/strings';
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
        const { title, field, store: { items, createItem, isAction,
            actionMessage, isLoading, error, deleteItem, updateItem } } = this.props;

        return (
            <div className="col-sm-6">
                <h4>{title}</h4>
                <CustomLoader isLoading={isLoading}>
                    {items.map(i => (
                        <EditableItem
                            key={i.id}
                            item={i}
                            deleteItem={deleteItem}
                            updateItem={updateItem}
                            field={field}
                            isAction={isAction} />
                    ))}
                    {!error && (<button
                        className='btn btn-sm btn-warning'
                        onClick={this.toggleModal}
                        data-toggle="modal"
                        data-target={`#newItemModal${1}`}
                    >{buttons.NEW_ITEM}</button>)
                    }
                </CustomLoader >
                {error && <div className='error local'>{error}</div>}
                {/* <Modal open={this.isModalOpen} onClose={this.toggleModal} center> */}
                <div className="modal fade"
                    id={`newItemModal${1}`}
                    tabIndex={-1}
                    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                aaa
                                <ItemForm
                                    formAction={createItem}
                                    formMode={formModes.ADD}
                                    field={field}
                                    toggle={this.toggleModal}
                                    isAction={isAction}
                                    actionMessage={actionMessage}
                                />
                                bbb
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditableList;