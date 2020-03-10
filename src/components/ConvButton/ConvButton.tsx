import React, {Component} from 'react';
import './ConvButton.css';
import {bindActionCreators} from "redux";

import {connect} from "react-redux";
import {getUsers} from "../../redux/actions/getAllUser";
import UsersList from "../UsersList/UsersList";

class ConvButton extends Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            isUsersOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

  handleClick(){
       this.props.getUsers();
       this.setState({isUsersOpen:true});
    }


    render() {

        return (
            <div>
                <div className='box-new-convers'>
                    <button className='new-conv-button'
                            type='button'
                            onClick={this.handleClick}
                    >
                        + New conversation
                    </button>
                </div>
                {this.state.isUsersOpen && (
                        <div className='modal'>
                            <div className='modal-body'
                                 onClick={() => this.setState({isUsersOpen:false})}
                            >
                                {this.props.users.map(user => {
                                    return (
                                        <UsersList user={user} key={user._id}/>
                                    )
                                })}
                            </div>
                        </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.allUsers.users
    };
};


const  mapDispatchToProps = (dispatch) => {
    return {
        getUsers: bindActionCreators(getUsers, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConvButton);