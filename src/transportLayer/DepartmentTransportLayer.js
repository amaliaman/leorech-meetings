import ajaxUtils from '../utils/AjaxUtils';

class DepartmentTransportLayer {

    /** Get all departments from server */
    getDepartments = () => {
        const url = ajaxUtils.DEPARTMENTS_PATH;
        return ajaxUtils.queryApi('get', url);
    };
}

const departmentTransportLayer = new DepartmentTransportLayer();
export default departmentTransportLayer;