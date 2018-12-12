import { observable, action } from 'mobx';

class UiState {
    @observable isAlertVisible = false;
    @observable alertText = '';
    @observable alertColor = '';

    @action onAlertDismiss = () => {
        this.isAlertVisible = false;
        this.alertText = '';
        this.alertColor = '';
    };

    @action showAlert = (text, color) => {
        this.alertText = text;
        this.alertColor = color;
        this.isAlertVisible = true;
    };
}

export default UiState;