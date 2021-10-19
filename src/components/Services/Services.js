import React from 'react';
import { useState, useEffect } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {services.map(single => (
            <SingleService key={single.id} single={single}></SingleService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
