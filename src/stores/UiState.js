import { observable, action } from 'mobx';

class UiState {
    @observable lastError = null;
    @observable isOnAction = false;
    @observable actionMessage = '';

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action setIsOnAction = active => {
        this.isOnAction = active;
        this.resetActionMessage();
    };

    @action setActionMessage = message => {
        this.actionMessage = message;
        setTimeout(() => this.resetActionMessage(), 3000);
    };

    @action resetActionMessage = () => {
        this.actionMessage = '';
    };
}

export default UiState;