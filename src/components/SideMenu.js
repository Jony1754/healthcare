import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/style.css';
import MenuButton from './MenuButton';
import home from '../assets/icons/aidkit.png';
import meds from '../assets/icons/medicine.png';
import usr from '../assets/icons/user.png';

class SideMenu extends React.Component {
    render() {
        return (
            <div className="menu">
                <MenuButton text="Home" imgURL={home} />
                <MenuButton text="Medicamentos" imgURL={meds} />
                <MenuButton text="Informacion personal" imgURL={usr} />
            </div>

        );

    }

}

export default SideMenu;
