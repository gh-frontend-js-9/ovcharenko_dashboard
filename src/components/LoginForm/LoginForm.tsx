import React, {Component} from 'react';
import './LoginForm.css'
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import { Link } from 'react-router-dom';
import API from "../../service/apiService";



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
        API.logIn(this.state);
        event.preventDefault();
    }


    render() {

        return (
            <div className='login'>
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
                    <FormButton type='submit'>Submit</FormButton>
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

export default LoginForm;