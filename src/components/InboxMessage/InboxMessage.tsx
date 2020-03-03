import React, {Component} from 'react';
import './InboxMessage.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendMessage} from "../../redux/actions/getMessage";

class InboxMessage extends Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        this.props.sendMessage(this.props.threadId,this.state.body);
        event.preventDefault();
    }
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
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                               name='body'
                               className='input-body'
                               placeholder='Write a message'
                               onChange={this.handleChange}
                        />
                        <button type='submit'></button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allMessage: state.messageInThread.allMessage,
        user: state.loginReducer.user,
        threadId: state.messageInThread.threadId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: bindActionCreators(sendMessage, dispatch),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(InboxMessage);