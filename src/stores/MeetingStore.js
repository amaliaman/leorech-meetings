import { observable } from 'mobx';
import meetingTransportLayer from '../transportLayer/MeetingTransportLayer';

class MeetingStore {
    // @observable meetings = [];
    @observable isLoading = true;

    constructor(/* rootStore */) {
        // this.rootStore = rootStore;
    }

    /**
     * Create a new meeting on the server /////////////////// TODO: in store too
     */
    createMeeting = async meeting => {
        const newMeeting = await meetingTransportLayer.createMeeting(meeting);
        console.log(newMeeting)
    };
}

export default MeetingStore;