import React, {Component} from 'react';
import axios from 'axios';
import './LoginForm.css'
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.headers.post['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU';

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
        const {
            email,
            password,
        } = this.state;
        axios.post('https://geekhub-frontend-js-9.herokuapp.com/api/users/login',
            {
                email: email,
                password: password
            },

        )
            .then(response => {
                console.log('registr res', response);
            })
            .catch(error => {
                console.log('registr err', error);
            })
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
                    <a href='/sign-up' className='not-member'>Not a member?</a>
                </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;