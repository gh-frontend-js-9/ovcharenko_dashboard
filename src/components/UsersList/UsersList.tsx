import React, {Component} from 'react';
import './UsersList.css'

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

export default UsersList;