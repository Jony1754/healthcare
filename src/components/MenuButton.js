

import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/style.css';


class MenuButton extends React.Component {
    render() {
        return (
            <div className="menu-option">
                <div className="menu-option-img">
                    <img src={this.props.imgURL} alt="" />
                </div>
                <h3 className="menu-option-text">{this.props.text}</h3>
            </div>
        );

    }

}

export default MenuButton;



