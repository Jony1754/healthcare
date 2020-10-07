import React from 'react';
import UserBadge from './components/UserBadge';
import SideMenu from './components/SideMenu';
import Appointment from './components/Appointment';
import DoctorBadge from './components/DoctorBadge';
import doc1 from './assets/images/doc.jpg';
import doc2 from './assets/images/doc3.jpg';
import './styles/css/style.css';
function App() {
  return (
    <div className="app">

      <div className="app-side">
        <UserBadge userName="Jonathan Arias" email="jony175@hotmail.com" />
        <SideMenu />
      </div>

      <div className="app-main">
        <Appointment type="ONCOLOGIA" date="19 ABRIL" time="AM" hour="10:30" name="Walter White" imgURL={doc2} />
        <Appointment type="ONCOLOGIA" date="19 ABRIL" time="AM" hour="10:30" name="Walter White" imgURL={doc2} />
        <Appointment type="ONCOLOGIA" date="19 ABRIL" time="AM" hour="10:30" name="Walter White" imgURL={doc2} />
        <Appointment type="ONCOLOGIA" date="19 ABRIL" time="AM" hour="10:30" name="Walter White" imgURL={doc2} />
        <Appointment type="ONCOLOGIA" date="19 ABRIL" time="AM" hour="10:30" name="Walter White" imgURL={doc2} />
        <Appointment type="ONCOLOGIA" date="19 ABRIL" time="AM" hour="10:30" name="Walter White" imgURL={doc2} />
      </div>
      <div className="app-doctors">
        <DoctorBadge imgURL={doc1} firstName="Walter White" specialty="Oncologo" />
        <DoctorBadge imgURL={doc1} firstName="Walter White" specialty="Oncologo" />
        <DoctorBadge imgURL={doc1} firstName="Walter White" specialty="Oncologo" />
        <DoctorBadge imgURL={doc1} firstName="Walter White" specialty="Oncologo" />
        <DoctorBadge imgURL={doc1} firstName="Walter White" specialty="Oncologo" />
        <DoctorBadge imgURL={doc1} firstName="Walter White" specialty="Oncologo" />
      </div>
    </div >
  );
}

export default App;
