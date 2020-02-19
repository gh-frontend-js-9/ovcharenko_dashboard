import React, {Component} from 'react';
import './SignUp.css'
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import { Link } from 'react-router-dom';
import API from "../../service/apiService";

class SignUp extends Component<any,any> {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
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
        API.signUp(this.state);
        event.preventDefault();
    }


    render() {
        return (
            <div className={'sign-up-wrapper'}>
                <form onSubmit={this.handleSubmit}
                      className={'sign-up-form card'}
                >
                    <FormInput type="name"
                           name='name'
                           placeholder='Name'
                           value={this.state.name}
                           handler={this.handleChange}
                    />
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

                    <div className='sign-up-form-router'>
                        <Link to='/log-in' className='rout-login'>
                            Already have an account?
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;