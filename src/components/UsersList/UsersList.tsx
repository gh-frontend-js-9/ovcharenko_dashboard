import React, {Component} from 'react';
import './UsersList.css'
import {bindActionCreators} from "redux";
import {sendMessage} from "../../redux/actions/getMessage";
import {connect} from "react-redux";

class UsersList extends Component<any,any> {
    render() {
        let {user} = this.props;
        return (
            <div className='user-body'>
                {user}
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

export default connect(mapStateToProps,mapDispatchToProps)(UsersList);