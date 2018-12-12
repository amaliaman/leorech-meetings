import { observable, action, computed } from 'mobx';

import { actionResults, bsColors, errors } from '../constants/strings';
import departmentTransportLayer from '../transportLayer/DepartmentTransportLayer';

class DepartmentStore {
    /** The array of departments */
    @observable departments = [];

    // ========== UI related ==========

    /** Loading indicator */
    @observable isLoading = false;

    /** Loader indicating form action is taking place */
    @observable isAction = false;

    /** Text indicating the result of the form's action */
    @observable actionMessage = '';

    @observable localError = null;

    @computed get items() {
        return this.departments;
    }

    /**
     * Create a department state store
     * @constructor
     */
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.loadDepartments();
    }

    @action handleLocalError = (error, message) => { // what is this?????
        this.localError = message;
        throw error;
    };

    /**
     * Fetch all departments from the server
     */
    @action loadDepartments = async () => {
        try {
            this.isLoading = true;
            this.departments = await departmentTransportLayer.getDepartments();
        }
        catch (error) {
            this.handleLocalError(error, errors.DEPARTMENT_LOAD);
        }
        finally {
            this.isLoading = false;
        };
    };

    @action createItem = async name => {
        try {
            this.isAction = true;
            const newDepartment = await departmentTransportLayer.createDepartment(name);
            this.departments.push(newDepartment);
            this.rootStore.uiState.showAlert(actionResults.OK, bsColors.SUCCESS);
        }
        catch (error) {
            throw error;
        }
        finally {
            this.isAction = false;
        };
    }

    @action deleteItem = async id => {
        try {
            // this.actionMessage = '';
            this.isAction = true;
            await departmentTransportLayer.deleteDepartment(id);
            this.departments = this.departments.filter(d => d.id !== id);
            // this.actionMessage = actionResults.OK;
        }
        catch (error) {
            // this.actionMessage = actionResults.FAIL;
            throw error;
        }
        finally {
            this.isAction = false;
        };
    }

    @action updateItem = async (id, name) => {
        try {
            // this.actionMessage = '';
            this.isAction = true;
            const updatedDepartment = await departmentTransportLayer.updateDepartment(id, name);
            this.departments = this.departments.map(d => d.id === id ? updatedDepartment : d);
            // this.actionMessage = actionResults.OK;
        }
        catch (error) {
            // this.actionMessage = actionResults.FAIL;
            throw error;
        }
        finally {
            this.isAction = false;
        };
    }
}

export default DepartmentStore;