import React, {Component} from 'react';
import './ResetForm.css'
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import { Link, Redirect } from 'react-router-dom';
import API from "../../service/apiService";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import { reset } from "../../redux/actions/reset";

class ResetForm  extends Component<any,any> {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirmationPassword: '',
            email: '',
            isReset: false
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
        API.reset(this.state)
            .then(response => {
                console.log(response);
                this.setState({
                    isReset: true
                });
            })
            .catch(error => {
                console.log('registr err', error);
            });
        event.preventDefault();
    }

    redirect() {
        if (this.state.isReset) {
            return (
                <Redirect to='/log-in'/>
            )
        }
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

const mapDispatchToProps = (dispatch) => {
    return {
        reset: bindActionCreators(reset, dispatch),
    }
};

export default connect(null, mapDispatchToProps)(ResetForm);