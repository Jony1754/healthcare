import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/style.css';

class DoctorBadge extends React.Component {
    render() {
        return (
            <div className="doctor">
                <div className="doctor-picture">
                    <img src={this.props.imgURL} alt="" />
                </div>
                <div className="doctor-info">
                    <h3 className="doctor-info-name">Dr.{this.props.firstName}</h3>
                    <h3 className="doctor-info-grade">{this.props.specialty}</h3>
                    <h3 className="doctor-info-status">ACTIVO</h3>
                </div>
            </div>

        );

    }


}

export default DoctorBadge;