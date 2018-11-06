import { observable, action } from 'mobx';
import attendeeTransportLayer from '../transportLayer/AttendeeTransportLayer';

class AttendeeStore {
    @observable attendees = [];

    constructor(/* rootStore */) {
        // this.rootStore = rootStore;
        this.loadAttendees();
    }
    
    /**
     * Fetches all attendees from the server
     */
    @action loadAttendees = async () => {
        this.attendees = await attendeeTransportLayer.getAttendees();
    };
}

export default AttendeeStore;