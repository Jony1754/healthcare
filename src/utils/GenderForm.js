import React, { Component } from 'react'

export class GenderForm extends Component {
    render() {
        return (
            <form className="register-box_gender">
                <h3>Género</h3>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male" >Male</label>
                <input type="radio" id="Female" name="gender" value="female" />
                <label htmlFor="Female">Female</label>
                <input type="radio" id="other" name="gender" value="other" />
                <label htmlFor="male">Other</label>
            </form>
        )
    }
}

export default GenderForm
