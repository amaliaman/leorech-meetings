import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { inject, observer } from 'mobx-react';

import { routes, titles } from './constants/strings';

import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import NavBar from './components/general/NavBar';
import ModalWrapper from './components/general/ModalWrapper';
import NewMeetingForm from './components/newMeeting/NewMeetingForm';
import AlertWrapper from './components/general/AlertWrapper';

@inject(stores => {
    const { isAddModalOpen, toggleAddModal } = stores.rootStore.meetingStore;
    const { isAlertVisible, hideAlert, alertColor, alertText } = stores.rootStore.uiState;
    return { isAddModalOpen, toggleAddModal, isAlertVisible, hideAlert, alertColor, alertText };
})
@observer
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />

                    <Container>
                        <AlertWrapper
                            color={this.props.alertColor}
                            visible={this.props.isAlertVisible}
                            onDismiss={this.props.hideAlert}
                            alertText={this.props.alertText} />
                            
                        <Route path={routes.HOME} exact component={Home} />
                        <Route path={routes.ADMIN} exact component={Admin} />
                    </Container>

                    <ModalWrapper
                        title={titles.ADD_MEETING}
                        isOpen={this.props.isAddModalOpen}
                        toggle={this.props.toggleAddModal}
                    >
                        <NewMeetingForm />
                    </ModalWrapper>
                </div>
            </Router>
        );
    }
}

export default App;