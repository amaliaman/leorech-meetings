import ajaxUtils from '../utils/AjaxUtils';

class AttendeeTransportLayer {

    // Get all attendees
    getAttendees = () => {
        const url = ajaxUtils.ATTENDEES_PATH;
        return ajaxUtils.queryApi('get', url);
    };
}

const attendeeTransportLayer = new AttendeeTransportLayer();
export default attendeeTransportLayer;