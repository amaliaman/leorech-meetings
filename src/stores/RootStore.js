import DepartmentStore from './DepartmentStore';
import AttendeeStore from './AttendeeStore';
import MeetingStore from './MeetingStore';

class RootStore {
    constructor() {
        this.departmentStore = new DepartmentStore(/* this */);
        this.attendeeStore = new AttendeeStore(/* this */);
        this.meetingStore = new MeetingStore(/* this */);
    }
}

const rootStore = new RootStore();
export default rootStore;