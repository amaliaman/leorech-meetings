import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import { inject, observer } from 'mobx-react';

import { MobileView } from '../general/ResponsiveWrappers';
import { titles, buttons } from '../../constants/strings';
import MeetingsTable from '../main/MeetingsTable';

@inject(stores => ({
    toggleAddModal: stores.rootStore.meetingStore.toggleAddModal
}))
@observer
class Home extends Component {
    render() {
        return (
            <div>
                <MobileView>
                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal" onClick={this.props.toggleAddModal}>{buttons.NEW_MEETING}</button>
                </MobileView>
                <h3>{titles.LATEST_MEETINGS}</h3>
                <MeetingsTable />
            </div>
        );
    }
}

export default Home;