import React, { Component } from 'react'
import GenderForm from '../utils/GenderForm';
export class UserForm extends Component {
    render() {
        return (
            <form className="register">
                <h1>REGISTER FORM</h1>
                <div className='register-box'>
                    <label htmlFor="fname">NOMBRES</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div className='register-box'>
                    <label htmlFor="lname">APELLIDOS</label>
                    <input type="text" id="lname" name="lname" />
                </div>
                <div className='register-box'>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" name="email" />
                </div>
                <GenderForm />

                <input type="submit" value="enviar" className="register-btn" />
            </form>
        )
    }
}

export default UserForm
