import React, {Component} from 'react';
import './UsersList.css'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {postThread} from "../../redux/actions/postThread";

class UsersList extends Component<any,any> {
    render() {
        let {user} = this.props;
        return (
            <div className='user-body'
                 onClick={this.props.postThread(user._id)}
            >
                {user.name}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postThread: bindActionCreators(postThread, dispatch),
    }
};

export default connect(null,mapDispatchToProps)(UsersList);