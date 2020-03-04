import React, {Component} from 'react';
import './Inbox.css'
import HeadNavigation from "../HeadNavigation/HeadNavigation";
import SideNavigation from "../SideNavigation/SideNavigation";
import InboxInfo from "../InboxInfo/InboxInfo";

import InboxMessage from "../InboxMessage/InboxMessage";
import InboxThreadList from "../InboxThreadList/InboxThreadList";
import InboxProfile from "../InboxProfile/InboxProfile";

class Inbox extends Component {
    render() {
        return (
            <div>
                <HeadNavigation/>
                <SideNavigation/>
                <InboxInfo/>
                <div className='message-flex'>
                    <InboxThreadList/>
                    <InboxMessage/>
                    <InboxProfile/>
                </div>
            </div>
        );
    }
}

export default Inbox;