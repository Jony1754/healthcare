import React, { Component } from 'react'
export class UserForm extends Component {
    // state = {

    // };

    // handleChange = e => {
    //     // console.log({ name: e.target.name, value: e.target.value });
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    handleClick = e => {
        console.log("Button was clicked")
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted')
        console.log(this.state);
    }

    render() {
        return (
            <form className="register" onSubmit={this.handleSubmit}>
                <h1>REGISTER FORM</h1>
                <div className='register-box'>
                    <label htmlFor="fname">NOMBRES</label>
                    <input type="text" id="fname" name="fname" onChange={this.props.onChange} value={this.props.formValues.fname} />
                </div>
                <div className='register-box'>
                    <label htmlFor="lname">APELLIDOS</label>
                    <input type="text" id="lname" name="lname" onChange={this.props.onChange} value={this.props.formValues.lname} />
                </div>
                <div className='register-box'>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" name="email" onChange={this.props.onChange} value={this.props.formValues.email} />
                </div>

                {/* <GenderForm /> */}

                <input type="submit" value="enviar" className="register-btn" onClick={this.handleClick} />
            </form>
        )
    }
}

export default UserForm
