import axios from 'axios';
import { action, observable } from 'mobx';

import DepartmentStore from './DepartmentStore';
import AttendeeStore from './AttendeeStore';
import MeetingStore from './MeetingStore';
import UiState from './UiState';

class RootStore {
    @observable lastError = null;

    constructor() {
        this.handleAjaxErrors();
        this.departmentStore = new DepartmentStore(this);
        this.attendeeStore = new AttendeeStore(this);
        this.meetingStore = new MeetingStore(this);
        this.uiState = new UiState(this);
        this.setDirection('rtl');//////////////// use mobx 
    };

    setDirection = (dir) => {
        document.body.dir = dir;
        document.body.classList.add(dir);/// change, not add
    };

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