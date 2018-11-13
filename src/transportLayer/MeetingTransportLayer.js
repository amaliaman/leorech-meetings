import ajaxUtils from '../utils/AjaxUtils';

class MeetingTransportLayer {

    /**
     * @param {number} pageSize - Amount of meetings to return
     * @return {Array} The list of meetings that match the query
     */
    getLatestMeetings = pageSize => {
        const url = `${ajaxUtils.MEETINGS_PATH}${ajaxUtils.LATEST_PATH}`;
        return ajaxUtils.queryApi('post', url, { pageSize });
    };

    /**
     * Create a meeting
     * @param {Object} meeting - The meeting object
     * @return {Object} The newly created meeting object from the server
     */
    createMeeting = meeting => {
        const url = ajaxUtils.MEETINGS_PATH;
        return ajaxUtils.queryApi('post', url, meeting);
    };
}

const meetingTransportLayer = new MeetingTransportLayer();
export default meetingTransportLayer;