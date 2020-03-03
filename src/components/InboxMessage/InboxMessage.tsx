import React, {Component} from 'react';
import './InboxMessage.css'
import {connect} from "react-redux";
class InboxMessage extends Component<any,any> {
    render() {

        return (
            <div className='inbox-message'>
                <div className='inbox-body-message'>
                    {this.props.allMessage.map(message => {
                       const type = this.props.user._id === message.user._id ?
                           'message-box' : 'message-user-box';
                        return (
                            <div className={type} key={message._id}>
                                {message.body}
                            </div>
                        )
                    })}
                </div>
                <div className='enter-message'>
                    <input type="text" className='input-body' placeholder='Write a message' />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allMessage: state.messageInThread.allMessage,
        user: state.loginReducer.user
    };
};

export default connect(mapStateToProps)(InboxMessage);