import React, {Component} from 'react';
import './Inbox.css'
import HeadNavigation from "../HeadNavigation/HeadNavigation";
import SideNavigation from "../SideNavigation/SideNavigation";
import InboxInfo from "../InboxInfo/InboxInfo";
import InboxThread from "../InboxThread/InboxThread";

class Inbox extends Component {
    render() {
        return (
            <div>
                <HeadNavigation/>
                <SideNavigation/>
                <InboxInfo/>
                <InboxThread/>
            </div>
        );
    }
}

export default Inbox;