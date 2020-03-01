import React, {Component} from 'react';
import './Inbox.css'
import HeadNavigation from "../HeadNavigation/HeadNavigation";
import SideNavigation from "../SideNavigation/SideNavigation";
import InboxInfo from "../InboxInfo/InboxInfo";
import InboxThread from "../InboxThread/InboxThread";
import InboxMessage from "../InboxMessage/InboxMessage";

class Inbox extends Component {
    render() {
        return (
            <div>
                <HeadNavigation/>
                <SideNavigation/>
                <InboxInfo/>
                <div className='message-flex'>
                    <InboxThread/>
                    <InboxMessage/>
                </div>
            </div>
        );
    }
}

export default Inbox;