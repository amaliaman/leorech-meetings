import axios from 'axios';
import { action } from 'mobx';

import DepartmentStore from './DepartmentStore';
import AttendeeStore from './AttendeeStore';
import MeetingStore from './MeetingStore';
import UiState from './UiState';

class RootStore {
    constructor() {
        this.handleAjaxErrors();
        this.departmentStore = new DepartmentStore(/* this */);
        this.attendeeStore = new AttendeeStore(/* this */);
        this.meetingStore = new MeetingStore(/* this */);
        this.uiState = new UiState(/* this */);
    }

    @action handleAjaxErrors = () => {
        axios.interceptors.response.use(
            response => response,
            error => {
                this.uiState.lastError = error;
                console.error(error);
                return Promise.reject(error);
            });
    };
}

const rootStore = new RootStore();
export default rootStore;