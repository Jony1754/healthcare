import React, { Component } from 'react'
import AppointmentNewForm from '../components/AppointmentNewForm';
import Appointment from '../components/Appointment';
export class AppointmentNew extends Component {
    render() {
        return (

            <div className='boxcontainer '>
                <div className="container-form">
                    <AppointmentNewForm />

                </div>



            </div>

        )
    }
}

export default AppointmentNew
