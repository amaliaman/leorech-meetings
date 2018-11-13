import { observable, action } from 'mobx';
import departmentTransportLayer from '../transportLayer/DepartmentTransportLayer';

class DepartmentStore {
    @observable departments = [];

    constructor(/* rootStore */) {
        // this.rootStore = rootStore;
        this.loadDepartments();
    }
    
    /**
     * Fetches all departments from the server
     */
    @action loadDepartments = async () => {
        this.departments = await departmentTransportLayer.getDepartments();
    };
}

export default DepartmentStore;