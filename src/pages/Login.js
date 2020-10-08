import React, { Component } from 'react'
import UserForm from '../components/UserForm';
import hero from '../assets/images/hero.jpg';
export class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className="form">
                    <UserForm />
                </div>
                <div className="hero">
                    <img src={hero} alt="" />
                </div>
            </div>
        )
    }
}

export default Login
