import { observable, action } from 'mobx';

import { actionResults, bsColors } from '../constants/strings';
import meetingService from '../services/MeetingService';

/** Amount of meetings to return */
const PAGE_SIZE = 5;

class MeetingStore {
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
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.getLatestMeetings(PAGE_SIZE);
    }

    @action getLatestMeetings = async pageSize => {
        try {
            this.isLoading = true;
            this.meetings = await meetingService.getLatestMeetings(pageSize);
            this.isLoading = false;
        }
        catch (error) {
            throw error;
            // TODO: show global error message
        }
    };

    /** 
     * @param {object} meeting - The meeting object
     */
    @action createMeeting = async meeting => {
        try {
            this.isAction = true;
            const newMeeting = await meetingService.createMeeting(meeting);
            if (newMeeting.id) {
                this.meetings.unshift(newMeeting);
                (this.meetings.length > PAGE_SIZE) && this.meetings.splice(this.meetings.length - 1, 1);
                this.rootStore.uiState.showAlert(actionResults.OK, bsColors.SUCCESS, false);
            }
            else {
                this.rootStore.uiState.showAlert(actionResults.FAIL, bsColors.DANGER, true);
            }
            this.isAction = false;
        }
        catch (error) {
            throw error;
            // TODO: show global error message
        }
    };

    @action toggleAddModal = () => {
        this.isAddModalOpen = !this.isAddModalOpen;
    };
}

export default MeetingStore;