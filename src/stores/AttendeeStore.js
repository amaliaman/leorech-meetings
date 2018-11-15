import { observable, action, computed } from 'mobx';
import attendeeTransportLayer from '../transportLayer/AttendeeTransportLayer';

class AttendeeStore {
    @observable attendees = [];

    constructor(/* rootStore */) {
        // this.rootStore = rootStore;
        this.loadAttendees();
    }
    
    @computed get items() {
        return this.attendees;
    }

    /**
     * Fetches all attendees from the server
     */
    @action loadAttendees = async () => {
        this.attendees = await attendeeTransportLayer.getAttendees();
    };
}

export default AttendeeStore;