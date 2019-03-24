import { observable, action, computed } from 'mobx';
import attendeeService from '../services/AttendeeService';

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
        this.attendees = await attendeeService.getAttendees();
    };
}

export default AttendeeStore;