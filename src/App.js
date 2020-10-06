import React from 'react';
import UserBadge from './components/UserBadge';
import SideMenu from './components/SideMenu';
import Appointment from './components/Appointment';
import DoctorBadge from './components/DoctorBadge';
import doc1 from './assets/images/doc.jpg';
function App() {
  return (
    <div>
      <UserBadge userName="Jonathan Arias" email="jony175@hotmail.com" />
      <SideMenu />
      <Appointment type="ONCOLOGIA" date="19 ABRIL" time="AM" hour="10:30" name="Walter White" imgURL={doc1} />
      <DoctorBadge imgURL={doc1} firstName="Walter White" specialty="Oncologo" />
    </div >
  );
}

export default App;
