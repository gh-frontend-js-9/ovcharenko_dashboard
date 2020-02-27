import React, {Component} from 'react';
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import { Link, Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import { login } from "../../redux/actions/login";
import { bindActionCreators} from "redux";
import './LoginForm.css'


interface State {
    email: string,
    password: string,
}

class LoginForm extends Component<any,any> {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
       this.props.login(this.state);
        event.preventDefault();
    }

    redirect() {
        if (Object.keys(this.props.user).length) {
            return (
                <Redirect to='/dashboard'/>
            )
        }
    }
    render() {
        return (
            <div className='login'>
                {this.redirect()}
                <div className='wrapper'>
                    <div className='block-login card'>
                        <div className='login-form-wrapper'>
                <form onSubmit={this.handleSubmit}
                      className='login-form'
                >
                    <FormInput type="email"
                               name='email'
                               placeholder='Email'
                               value={this.state.email}
                               handler={this.handleChange}
                    />
                    <FormInput type="password"
                               name='password'
                               placeholder='Password'
                               value={this.state.password}
                               handler={this.handleChange}
                    />

                    <FormButton type='submit'>
                        Submit
                    </FormButton>
                    <div className='login-form-router'>
                    <Link to='/sign-up'>
                    <span className='rout-sign'>Not a member?</span>
                    </Link>
                        <Link to='/reset'>
                    <span className='rout-reset'>Change password</span>
                        </Link>
                    </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isPending: state.loginReducer.isPending,
        token: state.loginReducer.token,
        user: state.loginReducer.user
    };
};

const  mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);