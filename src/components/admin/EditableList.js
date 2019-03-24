import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
// import Modal from 'react-responsive-modal';
import { Col } from 'reactstrap';

import { buttons, formModes } from '../../constants/strings';
import EditableItem from './EditableItem';
import ItemForm from './ItemForm';
import Loader from '../common/loader/Loader';

@observer
class EditableList extends Component {
    @observable isModalOpen = false;

    @action toggleModal = () => {
        this.isModalOpen = !this.isModalOpen;
    };

    render() {
        const { title, field, store: { items, createItem, isAction, actionMessage, isLoading, error, deleteItem, updateItem } } = this.props;

        return (
            <Col md="6">
                <h4>{title}</h4>
                <Loader isLoading={isLoading}>
                    {items.map(i => <EditableItem key={i.id} item={i} deleteItem={deleteItem} updateItem={updateItem} field={field} isAction={isAction} />)}
                    {!error && <button className='invert' onClick={this.toggleModal}>{buttons.NEW_ITEM}</button>}
                </Loader >
                {error && <div className='error local'>{error}</div>}
                {/* <Modal open={this.isModalOpen} onClose={this.toggleModal} center>
                    <ItemForm
                        formAction={createItem}
                        formMode={formModes.ADD}
                        field={field}
                        toggle={this.toggleModal}
                        isAction={isAction}
                        actionMessage={actionMessage}
                    />
                </Modal> */}
            </Col>
        );
    }
}

export default EditableList;