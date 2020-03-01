import React, {Component} from 'react';
import './Inbox.css'
import HeadNavigation from "../HeadNavigation/HeadNavigation";
import SideNavigation from "../SideNavigation/SideNavigation";
import InboxInfo from "../InboxInfo/InboxInfo";

import InboxMessage from "../InboxMessage/InboxMessage";
import InboxThreadList from "../InboxThreadList/InboxThreadList";

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
                </div>
            </div>
        );
    }
}

export default Inbox;