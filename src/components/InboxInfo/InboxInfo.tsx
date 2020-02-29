import React, {Component} from 'react';
import './InboxInfo.css'
class InboxInfo extends Component {
    render() {
        return (
            <div>
                <div className='inbox-info'>
                    <div className='info'>
                        <div className={"mg-rgt"}>
                            <i className="fas fa-inbox mg-0-15px"></i>
                            Inbox (2)
                        </div>
                        <div className={"mg-rgt"}>
                            <i className="fab fa-telegram-plane mg-0-15px"></i>
                            Sent
                        </div>
                        <div>
                            <i className="fas fa-trash mg-0-15px"></i>
                            Trash
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='mg-rgt-20px'>
                            Filter messages:
                        </div>
                        <div>
                            dropdown
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InboxInfo;