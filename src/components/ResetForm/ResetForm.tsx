import React, {Component} from 'react';
import axios from 'axios';
import './ResetForm.css'
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import { Link } from 'react-router-dom';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU';

class ResetForm  extends Component<any,any> {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirmationPassword: '',
            email: ''
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
            confirmationPassword,
            password
        } = this.state;
        axios.post('https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password',
            {
                password: password,
                confirmationPassword: confirmationPassword,
                email: email
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
            <div className={'reset-wrapper'}>
                <form onSubmit={this.handleSubmit}
                      className={'reset card'}
                >
                    <FormInput type="password"
                               name='password'
                               placeholder='Password'
                               value={this.state.password}
                               handler={this.handleChange}
                    />
                    <FormInput type="password"
                               name='confirmationPassword'
                               placeholder='Confirm password'
                               value={this.state.confirmationPassword}
                               handler={this.handleChange}
                    />
                    <FormInput type="email"
                               name='email'
                               placeholder='Email'
                               value={this.state.email}
                               handler={this.handleChange}
                    />
                    <FormButton type='submit'>Submit</FormButton>
                    <div className='reset-form-router'>
                        <Link to='/sign-up'>
                            <span className='rout-sign'>Login</span>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default ResetForm;