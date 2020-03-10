import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component<any,any> {
    render() {
        return (
            <Route {...this.props}>
                { this.props.user._id ? (this.props.children) : (<Redirect to={'/log-in'}/>)}
            </Route>
        )
    }
}

 const mapStateToProps = (state) => {
    return {
        user: state.loginReducer.user
    }
 };

export default connect(mapStateToProps)(ProtectedRoute);