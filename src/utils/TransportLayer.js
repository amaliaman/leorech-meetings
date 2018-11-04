import ajaxUtils from './AjaxUtils';

// Return a promise
class TransportLayer {

    // Get all departments
    getDepartments = () => {
        const url = ajaxUtils.DEPARTMENTS_PATH;
        return ajaxUtils.queryApi('get', url);
    };
}

const transportLayer = new TransportLayer();
export default transportLayer;