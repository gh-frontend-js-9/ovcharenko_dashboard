import React, {Component} from 'react';
import './Inbox.css'
import HeadNavigation from "../HeadNavigation/HeadNavigation";
import SideNavigation from "../SideNavigation/SideNavigation";
import InboxInfo from "../InboxInfo/InboxInfo";

class Inbox extends Component {
    render() {
        return (
            <div>
                <HeadNavigation/>
                <SideNavigation/>
                <InboxInfo/>
            </div>
        );
    }
}

export default Inbox;