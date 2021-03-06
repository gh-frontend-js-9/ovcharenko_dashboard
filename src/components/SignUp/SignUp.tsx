import React, {Component} from 'react';
import { bindActionCreators } from "redux";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import {registrationUser} from "../../redux/actions/sign-up";
import './SignUp.css'


class SignUp extends Component<any,any> {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
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
        this.props.registrationUser(this.state);
        event.preventDefault();
    }

    redirect() {
        if (Object.keys(this.props.registerUser).length) {
            return (
                <Redirect to='log-in'/>
            )
        }
    }

    render() {
        return (
            <div className={'sign-up-wrapper'}>
                {this.redirect()}
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
const mapStateToProps = (state) => {
    return {
        registerUser: state.signUp.registerUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registrationUser: bindActionCreators(registrationUser, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);