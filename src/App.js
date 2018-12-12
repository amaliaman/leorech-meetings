import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { inject, observer } from 'mobx-react';

// import './App.css';
import { routes, titles } from './constants/strings';

import Home from './pages/Home';
import Admin from './pages/Admin';
import NavBar from './components/general/NavBar';
import ErrorMessage from './components/general/ErrorMessage';
import ModalWrapper from './components/general/ModalWrapper';
import NewMeetingForm from './components/newMeeting/NewMeetingForm';

@inject(stores => ({ meetingStore: stores.rootStore.meetingStore }))
@observer
class App extends Component {
    render() {
        const { isAddModalOpen, toggleAddModal } = this.props.meetingStore;

        return (
            <Router>
                <div>
                    <NavBar />

                    <Container>
                        <ErrorMessage />
                        <Route path={routes.HOME} exact component={Home} />
                        <Route path={routes.ADMIN} exact component={Admin} />
                    </Container>

                    <ModalWrapper
                        title={titles.ADD_MEETING}
                        isOpen={isAddModalOpen}
                        toggle={toggleAddModal}
                    >
                        <NewMeetingForm />
                    </ModalWrapper>
                </div>
            </Router>
        );
    }
}

export default App;