import React, {Component} from 'react';

class InboxMessage extends Component {
    render() {
        return (
            <div className='inbox-message'>
                <div className='inbox-body-message'>
                    Message
                </div>
                <div className='enter-message'>
                    <input type="text" className='input-body' placeholder='Write a message' />
                </div>
            </div>
        );
    }
}

export default InboxMessage;