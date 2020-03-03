import React, {Component} from 'react';
import './InboxThread.css'
import {connect} from "react-redux";
import API from "../../service/apiService";
import {bindActionCreators} from "redux";
import {registrationUser} from "../../redux/actions/sign-up";
import {getMessage} from "../../redux/actions/getMessage";


class InboxThread extends Component<any,any> {

    render() {
        let {threads} = this.props;
        let dateFormat = require('dateformat');
        return (
            <div>
                <div className='thread-box' onClick={() => {
                  this.props.getMessage(threads._id)
                }}>
                            <div className='name_date'>
                            <div className='name-message'>
                                {
                                    this.props.user._id === threads.users[0]._id ?
                                        threads.users[1].name : threads.users[0].name
                                }
                            </div>
                            <div className='date-message'>
                                {
                                    dateFormat(threads.created_at, "d mmmm hh:mm")
                                }
                            </div>
                            </div>
                            <div className='last-message'>
                                {!!threads.message ? threads.message.body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur libero officiis possimus, ratione sed ut vero. Adipisci aperiam asperiores at consequuntur dicta doloremque et id illum inventore ipsa iste laudantium maxime molestiae, mollitia nam natus nesciunt nobis omnis, perferendis provident quaerat quas quasi quia quisquam reiciendis suscipit tempora, tempore.'}
                            </div>
                        </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.loginReducer.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
     getMessage : bindActionCreators(getMessage, dispatch),
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(InboxThread);