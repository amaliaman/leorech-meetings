import axios from 'axios';
import { action, observable } from 'mobx';

import DepartmentStore from './DepartmentStore';
import AttendeeStore from './AttendeeStore';
import MeetingStore from './MeetingStore';

class RootStore {
    @observable lastError = null;

    constructor() {
        this.handleAjaxErrors();
        this.departmentStore = new DepartmentStore(this);
        this.attendeeStore = new AttendeeStore(this);
        this.meetingStore = new MeetingStore(this);
    }

    @action handleAjaxErrors = () => {
        axios.interceptors.response.use(
            response => response,
            error => {
                // this.lastError = error.toString();
                console.warn(error);
                return Promise.reject(error);
            });
    };

    @action handleErrors = (error, message) => {
        this.lastError = message;
        throw error;
    }
}

const rootStore = new RootStore();
export default rootStore;