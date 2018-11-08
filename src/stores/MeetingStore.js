import { observable, action } from 'mobx';
import meetingTransportLayer from '../transportLayer/MeetingTransportLayer';

class MeetingStore {

    // ========== UI related ==========
    
    /**
     * Loader indicating form action is taking place
     */
    @observable isAction = false;
    /**
     * Text indicating the result of the form's action
     */
    @observable actionMessage = '';

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    /**
     * Create a new meeting on the server /////////////////// TODO: in store too
     */
    @action createMeeting = async meeting => {
        this.resetActionMessage();
        this.isAction = true;
        const newMeeting = await meetingTransportLayer.createMeeting(meeting);
        console.log(newMeeting)//////////////////
        this.isAction = false;
        this.actionMessage = newMeeting.id ? '✔' : '✘';
    };

    // ========== UI related ==========

    /**
     * Reset the text indicating the result of the form's action
     */
    @action resetActionMessage = () => {
        this.actionMessage = '';
    };
}

export default MeetingStore;