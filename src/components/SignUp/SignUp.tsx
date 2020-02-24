import React, {Component} from 'react';
import { bindActionCreators } from "redux";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import API from "../../service/apiService";
import {registrationUser} from "../../redux/actions/sign-up";
import './SignUp.css'

class SignUp extends Component<any,any> {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            isSign: false
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
        API.signUp(this.state)
            .then(response => {
                console.log(response);
             this.setState({
                 isSign: true
             })
            })
            .catch(error => {
                console.log('registr err', error)
            });
        event.preventDefault();
    }

    redirect() {
        if (this.state.isSign) {
            return (
                <Redirect to='/log-in'/>
            )
        }
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

const mapDispatchToProps = (dispatch) => {
    return {
        registrationUser: bindActionCreators(registrationUser, dispatch),
    }
};

export default connect(null, mapDispatchToProps)(SignUp);