import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import ResetForm from "../ResetForm/ResetForm";
import LoginForm from "../LoginForm/LoginForm";
import './Navigation.css';
import ProjectDashboard from "../ProjectDashboard/ProjectDashboard";
import Inbox from "../Inbox/Inbox";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                    {/*Here will be navigation bar*/}
                </nav>
                <Switch>
                    <Route path={'/log-in'}>
                        <LoginForm/>
                    </Route>
                    <Route path={'/sign-up'}>
                        <SignUp/>
                    </Route>
                    <Route path={'/reset'}>
                        <ResetForm/>
                    </Route>
                    <ProtectedRoute path={'/dashboard'}>
                        <ProjectDashboard/>
                    </ProtectedRoute>
                    <ProtectedRoute path={'/inbox'}>
                        <Inbox/>
                    </ProtectedRoute>
                    <Route path={'/'}>
                        <Redirect to={'log-in'}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation;