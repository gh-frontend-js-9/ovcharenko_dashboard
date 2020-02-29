import React, {Component} from 'react';
import './Inbox.css'
import HeadNavigation from "../HeadNavigation/HeadNavigation";
import SideNavigation from "../SideNavigation/SideNavigation";

class Inbox extends Component {
    render() {
        return (
            <div>
                <HeadNavigation/>
                <SideNavigation/>
            </div>
        );
    }
}

export default Inbox;