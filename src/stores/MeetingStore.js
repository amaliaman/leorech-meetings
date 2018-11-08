import { observable, action } from 'mobx';
import meetingTransportLayer from '../transportLayer/MeetingTransportLayer';

class MeetingStore {
    /** Amount of meetings to return */
    PAGE_SIZE = 5;

    /** The array of meetings */
    @observable meetings = [];

    // ========== UI related ==========

    /** Loading indicator */
    @observable isLoading = false;

    /** Loader indicating form action is taking place */
    @observable isAction = false;

    /** Text indicating the result of the form's action */
    @observable actionMessage = '';

    /**
     * Create a meeting state store
     * @constructor
     */
    constructor(/* rootStore */) {
        // this.rootStore = rootStore;
        this.getLatestMeetings(this.PAGE_SIZE);
    }

    @action getLatestMeetings = async pageSize => {
        try {
            this.isLoading = true;
            this.meetings = await meetingTransportLayer.getLatestMeetings(pageSize);
            this.isLoading = false;
        }
        catch (error) {
            throw error;
            // TODO: show global error message /////////////////////////////
        }
    };

    /** 
     * Create a new meeting on the server /////////////////// TODO: in store too
     * @param {object} meeting - The meeting object
     */
    @action createMeeting = async meeting => {
        try {
            this.actionMessage = '';
            this.isAction = true;
            const newMeeting = await meetingTransportLayer.createMeeting(meeting);
            if (newMeeting.id) {
                this.meetings.unshift(newMeeting);
                this.meetings.splice(this.meetings.length - 1, 1);
            }
            this.isAction = false;
            this.actionMessage = newMeeting.id ? '✔' : '✘';
        }
        catch (error) {
            throw error;
            // TODO: show global error message /////////////////////////////
        }
    };
}

export default MeetingStore;