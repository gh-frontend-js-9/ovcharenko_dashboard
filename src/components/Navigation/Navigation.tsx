import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import ResetForm from "../ResetForm/ResetForm";
import LoginForm from "../LoginForm/LoginForm";
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                    {/*Here will be navigation bar*/}
                </nav>
                <Switch>
                    <Route path={'/sign-up'}>
                        <SignUp/>
                    </Route>
                    <Route path={'/log-in'}>
                        <LoginForm/>
                    </Route>
                    <Route path={'/reset'}>
                        <ResetForm/>
                    </Route>
                    <Route path={'/'}>
                        <Redirect to={'log-in'}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation;