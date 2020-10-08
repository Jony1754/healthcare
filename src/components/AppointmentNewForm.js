import React, { Component } from 'react'

export class AppointmentNewForm extends Component {
    render() {
        return (
            <form action="" className="boxform">
                <h2>New Appointment</h2>
                <div className="boxnew">
                    <label htmlFor="doctors">Seleccione un doctor</label>
                    <select name="doctors" id="doctors">
                        <option value="Dr. Walter White">Dr. Walter White</option>
                        <option value="Dra. Sthephany Rojas">Dra. Sthephany Rojas</option>
                        <option value="Dra. Maika Rua">Dra. Maika Rua</option>
                        <option value="Dra. Silbeth Arenas">Dra. Silbeth Arenas</option>
                    </select>
                </div>
                <div className="boxnew flex">
                    <label htmlFor="date">Seleccione una fecha</label>
                    <input type="date" value="2001-07-17" id="date" />
                    <label htmlFor="hour">Seleccione una hora</label>
                    <input type="time" />
                </div>
                <div className="boxnew">
                    <label htmlFor="appointmenttype">Seleccione el tipo de consulta</label>
                    <select name="appointmenttyoe" id="appointmenttype">
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
