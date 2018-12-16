import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { inject, observer } from 'mobx-react';

import { MobileView } from '../components/general/ResponsiveWrappers';
import { titles, buttons, bsColors } from '../constants/strings';
import MeetingsTable from '../components/main/MeetingsTable';

@inject(stores => ({
    toggleAddModal: stores.rootStore.meetingStore.toggleAddModal
}))
@observer
class Home extends Component {
    render() {
        return (
            <div>
                <MobileView>
                    <Button color={bsColors.INFO} onClick={this.props.toggleAddModal}>{buttons.NEW_MEETING}</Button>
                </MobileView>
                <h3>{titles.LATEST_MEETINGS}</h3>
                <MeetingsTable />
            </div>
        );
    }
}

export default Home;