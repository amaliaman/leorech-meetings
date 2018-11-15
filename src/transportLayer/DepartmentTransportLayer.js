import ajaxUtils from '../utils/AjaxUtils';

class DepartmentTransportLayer {

    /** Get all departments from server */
    getDepartments = () => {
        const url = ajaxUtils.DEPARTMENTS_PATH;
        return ajaxUtils.queryApi('get', url);
    };

    /** Create a new department */
    createDepartment = name => {
        const url = ajaxUtils.DEPARTMENTS_PATH;
        return ajaxUtils.queryApi('post', url, { name });
    };

    /** Delete a department */
    deleteDepartment = id => {
        const url = `${ajaxUtils.DEPARTMENTS_PATH}/${id}`;
        return ajaxUtils.queryApi('delete', url);
    };

    /** Update a department */
    updateDepartment = (id, name) => {
        const url = `${ajaxUtils.DEPARTMENTS_PATH}/${id}`;
        return ajaxUtils.queryApi('put', url, { name });
    };
}

const departmentTransportLayer = new DepartmentTransportLayer();
export default departmentTransportLayer;