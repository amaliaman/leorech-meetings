import { observable, action } from 'mobx';

const MS_TO_KEEP_ALERT = 3000;

class UiState {
    @observable isAlertVisible = false;
    @observable alertText = '';
    @observable alertColor = '';

    @action hideAlert = () => {
        this.isAlertVisible = false;
        this.alertText = '';
        this.alertColor = '';
    };

    @action showAlert = (text, color, isKeepOpen) => {
        this.alertText = text;
        this.alertColor = color;
        this.isAlertVisible = true;
        if (!isKeepOpen) {
            setTimeout(() => { this.isAlertVisible && this.hideAlert(); }, MS_TO_KEEP_ALERT);
        }
    };
}

export default UiState;