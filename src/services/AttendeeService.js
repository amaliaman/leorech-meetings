import ajaxUtils from '../utils/AjaxUtils';

class AttendeeService {

    /** Get all attendees from server */
    getAttendees = () => {
        const url = ajaxUtils.ATTENDEES_PATH;
        return ajaxUtils.queryApi('get', url);
    };
}

const attendeeService = new AttendeeService();
export default attendeeService;