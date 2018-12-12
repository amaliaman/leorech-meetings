import { observable, action } from 'mobx';

import { actionResults } from '../constants/strings';
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

    @observable isAddModalOpen = false;

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
     * @param {object} meeting - The meeting object
     */
    @action createMeeting = async meeting => {
        try {
            this.actionMessage = '';
            this.isAction = true;
            const newMeeting = await meetingTransportLayer.createMeeting(meeting);
            this.isAction = false;
            if (newMeeting.id) {
                this.meetings.unshift(newMeeting);
                this.meetings.splice(this.meetings.length - 1, 1);
                this.actionMessage = actionResults.OK;
                return newMeeting.id
            }
            this.actionMessage = actionResults.FAIL;
            return null;
        }
        catch (error) {
            throw error;
            // TODO: show global error message /////////////////////////////
        }
    };

    @action toggleAddModal = () => {
        this.isAddModalOpen = !this.isAddModalOpen;
        this.actionMessage = '';
    };
}

export default MeetingStore;