import ajaxUtils from '../utils/AjaxUtils';

class MeetingTransportLayer {

    // Create a meeting
    createMeeting = meeting => {
        const url = ajaxUtils.MEETINGS_PATH;
        return ajaxUtils.queryApi('post', url, meeting);
    };
}

const meetingTransportLayer = new MeetingTransportLayer();
export default meetingTransportLayer;