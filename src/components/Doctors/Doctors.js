import React from 'react';
import { useState, useEffect } from 'react';
import Doctor from '../Shared/Doctor/Doctor';
import './Doctors';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('./doctors.json')
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {doctors.map(doctor => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
