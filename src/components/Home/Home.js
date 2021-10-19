import React, { useState, useEffect } from 'react';
import Banner from '../Shared/Banner/Banner';
import Single from '../Shared/Single/Single';
import HomeDoctor from './../Shared/HomeDoctor/HomeDoctor';

const Home = () => {
  const [homeSingle, setHomeSingle] = useState([]);
  const [homeDoctor, setHomeDoctor] = useState([]);

  useEffect(() => {
    fetch('./services.json')
      .then(res => res.json())
      .then(data => setHomeSingle(data));
  }, []);

  useEffect(() => {
    fetch('./doctors.json')
      .then(res => res.json())
      .then(data => setHomeDoctor(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      {/* services API call */}
      <div className="container">
        <div className="row">
          <div className="text-center mt-5">
            <div className="d-flex justify-content-center">
              <h2 className="p-3">Our Services</h2>
            </div>
            <p>
              We offer comprehensive care that includes primary eye care, vision
              screening, surgeries <br /> for conditions such as glaucoma and
              cataracts, and other treatments
            </p>
          </div>
          {homeSingle.slice(0, 4).map(homeSingle => (
            <Single key={homeSingle.id} homeSingle={homeSingle}></Single>
          ))}
        </div>
      </div>
      {/* doctor API call */}
      <div className="container">
        <div className="row">
          <div className="text-center mt-5">
            <div className="d-flex justify-content-center">
              <h2 className="p-3">Opnix Eye Care Specialist Doctor</h2>
            </div>
            <p>
              Ophthalmology is a branch of medicine and surgery that deals with
              the diagnosis <br /> and treatment of disorders of the eye
            </p>
          </div>
          {homeDoctor.slice(0, 3).map(homeDoctor => (
            <HomeDoctor
              key={homeDoctor.id}
              homeDoctor={homeDoctor}
            ></HomeDoctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
