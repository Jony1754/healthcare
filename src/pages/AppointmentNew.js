import React, { Component } from 'react'
import AppointmentNewForm from '../components/AppointmentNewForm';
import Appointment from '../components/Appointment';
export class AppointmentNew extends Component {
    state = {
        form: {
            doctorName: "",
            date: "",
            hour: "",
            type: "",
        }
    };


    handleChangeSelected = e => {

        if (e.target.id == "doctors") {
            let name = e.target.item(e.target.selectedIndex).value;
            console.log(name)
            this.setState({
                form: {
                    ...this.state.form,

                    doctorName: name,
                }
            })

        } else if (e.target.id == "date") {
            let date = e.target.value;
            this.setState({
                form: {
                    ...this.state.form,
                    date: date,

                }
            })
            console.log(date);

        } else if (e.target.id == 'appointmenttype') {
            let type = e.target.item(e.target.selectedIndex).value;
            console.log(type)
            this.setState({
                form: {
                    ...this.state.form,

                    type: type,
                }
            })
        } else {
            let hour = e.target.value;
            console.log(hour)
            this.setState({
                form: {
                    ...this.state.form,

                    hour: hour,

                }
            })
        }



        console.log(this.state);
    }

    render() {
        return (

            <div className='boxcontainer '>
                <div className="container-form">
                    <AppointmentNewForm onChangeSelect={this.handleChangeSelected} formValues={this.state.form} />
                </div>
                <div className="container-list">
                    <Appointment />
                    <Appointment />
                    <Appointment />
                    <Appointment />
                    <Appointment />
                    <Appointment />
                    <Appointment />
                    <Appointment />
                    <Appointment />

                </div>
            </div>

        )
    }
}

export default AppointmentNew
