import React from "react";
import ReactDOM from 'react-dom';
import '../styles/css/style.css';


class UserBadge extends React.Component {
    render() {
        return (

            <div className="user">
                <div className="user-img">
                    <img src="https://picsum.photos/200" alt="image" />
                </div>
                <div className="user-info">
                    <h3 className="user-info_name">Jonathan Arias Rua</h3>
                    <h4 className="user-info_mail">correo@domain.com</h4>
                </div>
            </div>

        );
    }

}

export default UserBadge;

