import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { routes } from './constants/strings';

import Home from './components/pages/Home';
import Admin from './components/pages/admin/Admin';

import NavBar from './components/navbar/NavBar';
import AlertWrapper from './components/general/AlertWrapper';
import NewMeetingModal from './components/newMeeting/NewMeetingModal';

@inject(stores => {
    const { isAlertVisible, hideAlert, alertColor, alertText } = stores.rootStore.uiState;
    return { isAlertVisible, hideAlert, alertColor, alertText };
})
@observer
class App extends Component {
    render() {

        return (
            <Router>
                <>
                    <NavBar />

                    <div className="container">
                        <AlertWrapper
                            color={this.props.alertColor}
                            visible={this.props.isAlertVisible}
                            onDismiss={this.props.hideAlert}
                            alertText={this.props.alertText} />

                        <Route path={routes.HOME} exact component={Home} />
                        <Route path={routes.ADMIN} exact component={Admin} />
                    </div>

                    <NewMeetingModal />
                </>
            </Router>
        );
    }
}

export default App;