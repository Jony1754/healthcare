import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/style.css';
import dateImg from '../assets/icons/day.png';
import hourImg from '../assets/icons/hour.png';

class Appointment extends React.Component {
    render() {
        return (
            <div className='appointment'>
                <h2 className="appointment-type">{this.props.type}</h2>
                <div className="appointment-date">
                    <div className="appointment-date_day">
                        <div className="appointment-date_day_picture">
                            <img src={dateImg} alt="" />
                        </div>
                        <h3 className="appointment-date_day_text">{this.props.date}</h3>
                    </div>
                    <div className="appointment-date_hour">
                        <div className="appointment-date_hour_picture" >
                            <img src={hourImg} alt="" />
                        </div>
                        <h3 className="appointment-date_hour_text">{this.props.hour}{this.props.time}</h3>
                    </div>
                </div>
                <div className="appointment-doctor">
                    <div className="appointment-doctor-picture">
                        <img src={this.props.imageURL} alt="" />
                    </div>
                    <h4 className="appointment-doctor-name">Dr. {this.props.name}</h4>
                </div>
            </div>

        );
    }

}
export default Appointment;