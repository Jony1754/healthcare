import React, { Component } from 'react'

export class AppointmentNewForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted')
        console.log(this.state);
    }
    render() {
        return (
            <form action="" className="boxform" onSubmit={this.handleSubmit}>
                <h2>New Appointment</h2>
                <div className="boxnew">
                    <label htmlFor="doctors">Seleccione un doctor</label>
                    <select name="doctors" id="doctors" onChange={this.props.onChangeSelect} value={this.props.formValues.doctorName}>
                        <option value="Dr. Walter White">Dr. Walter White</option>
                        <option value="Dra. Sthephany Rojas">Dra. Sthephany Rojas</option>
                        <option value="Dra. Maika Rua">Dra. Maika Rua</option>
                        <option value="Dra. Silbeth Arenas">Dra. Silbeth Arenas</option>
                    </select>
                </div>
                <div className="boxnew ">
                    <label htmlFor="date">Seleccione una fecha</label>
                    <input type="date" value={this.props.formValues.date} id="date" onChange={this.props.onChangeSelect} />
                    <label htmlFor="hour">Seleccione una hora</label>
                    <input type="time" id='time' value={this.props.formValues.hour} onChange={this.props.onChangeSelect} />
                </div>
                <div className="boxnew">
                    <label htmlFor="appointmenttype">Seleccione el tipo de consulta</label>
                    <select name="appointmenttyoe" id="appointmenttype" onChange={this.props.onChangeSelect} value={this.props.formValues.type}>
                        <option value="Ginecología">Ginecología</option>
                        <option value="Cardiología">Cardiología</option>
                        <option value="Odontología">Odontología</option>
                        <option value="Oncología">Oncología</option>
                        <option value="Medicina general">Medicina general</option>
                        <option value="Psicología">Psicología</option>
                        <option value="Pediatría">Pediatría</option>
                    </select>
                </div>
                <input type="submit" />

            </form>

        )
    }
}

export default AppointmentNewForm
