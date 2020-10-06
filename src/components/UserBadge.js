import React from "react";
import ReactDOM from 'react-dom';
import '../styles/css/style.css';
import image from '../assets/images/patient.jpg';

class UserBadge extends React.Component {
    render() {
        return (

            <div className="user">
                <div className="user-img">
                    <img src={image} alt="image" />
                </div>
                <div className="user-info">
                    <h4 className="user-info_name">{this.props.userName}</h4>
                    <h4 className="user-info_mail">{this.props.email}</h4>
                </div>
            </div>

        );
    }

}

export default UserBadge;

