import React, {Component} from 'react';
import './InboxProfile.css'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getUserById} from "../../redux/actions/getUserProfile";

class InboxProfile extends Component<any,any> {
    render() {
        return (
            <div className='user-info-wrapper'>
                <div className='user-info'>
                    <div className='user-main-info'>
                        <span className='user-name'>
                           {this.props.user.name}
                        </span>
                        <span className='mg-bottom-15px'>
                            {this.props.user.position}
                        </span>
                        <span className='mg-bottom-15px'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nobis.
                        </span>
                    </div>
                    <div className='user-info-info'>
                        <span className='title-info'>
                            Email
                        </span>
                        <span className='info-info'>
                            {this.props.user.email}
                        </span>
                        <span className='title-info'>
                            Phone
                        </span>
                        <span className='info-info'>
                            {this.props.user.phone}
                        </span>
                        <span className='title-info'>
                            Adress
                        </span>
                        <span className='info-info'>
                           {this.props.user.address}
                        </span>
                        <span className='title-info'>
                            Organization
                        </span>
                        <span className='info-info'>
                           {this.props.user.organization}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.getUserById.user
    };
};

const  mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: bindActionCreators(getUserById, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InboxProfile);