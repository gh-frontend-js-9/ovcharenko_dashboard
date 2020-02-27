import React, {Component} from 'react';
import './ResetForm.css'
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import { Link, Redirect } from 'react-router-dom';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import { resetPassword } from "../../redux/actions/reset";

class ResetForm  extends Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmationPassword: '',
            email: '',
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
        this.props.resetPass(this.state);
        event.preventDefault();
    }

    redirect() {
        if (this.props.message) {
            return (
                <Redirect to='log-in'/>
            )
        }
    }


    render() {
        return (
            <div className={'reset-wrapper'}>
                {this.redirect()}
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
                        <Link to='/log-in'>
                            <span className='rout-sign'>Login</span>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.reset.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetPass: bindActionCreators(resetPassword, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetForm);