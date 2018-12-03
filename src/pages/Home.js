import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { titles, buttons, bsColors } from '../constants/strings';
import MeetingsTable from '../components/main/MeetingsTable';
import { inject, observer } from 'mobx-react';

@inject(stores => ({
    toggleAddModal: stores.rootStore.meetingStore.toggleAddModal
}))
@observer
class Home extends Component {
    render() {
        return (
            <div>
                <Button color={bsColors.INFO} onClick={this.props.toggleAddModal}>{buttons.NEW_MEETING}</Button>
                <section>
                    <h3>{titles.LATEST}</h3>
                    <MeetingsTable />
                </section>
            </div>
        );
    }
}

export default Home;