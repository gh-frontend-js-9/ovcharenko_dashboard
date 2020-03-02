import React, {Component} from 'react';
import './InboxThread.css'
import {connect} from "react-redux";


class InboxThread extends Component<any,any> {



    render() {

        let {threads} = this.props;

        return (
            <div>
                <div className='thread-box'>
                            <div className='name_date'>
                            <div className='name-message'>
                                {/*{threads.users[0].name}*/}
                                {
                                    this.props.user._id === threads.users[0]._id ?
                                        threads.users[1].name : threads.users[0].name
                                }
                            </div>
                            <div className='date-message'>
                                02.02.2020
                            </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.loginReducer.user
    };
};

export default  connect(mapStateToProps)(InboxThread);