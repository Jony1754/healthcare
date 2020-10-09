import React, { Component } from 'react'
import UserForm from '../components/UserForm';
import hero from '../assets/images/hero.jpg';
export class Login extends Component {
    state = {
        form: {}
    };

    handleChange = e => {

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })

    }
    render() {
        return (
            <div className='login'>
                <div className="form">
                    <UserForm onChange={this.handleChange} formValues={this.state.form} />
                </div>
                <div className="hero">
                    <img src={hero} alt="" />
                </div>
            </div>
        )
    }
}

export default Login
