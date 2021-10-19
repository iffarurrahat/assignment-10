import React from 'react';
import { Card } from 'react-bootstrap';

const HomeDoctor = props => {
  const { name, img, specialist } = props.homeDoctor;
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-5">
      <Card className="service-hover border-0">
        <Card.Img className="doctor-img" variant="top" src={img} />
        <Card.Body className="border border-top-0">
          <h5 className="fw-bold">{name}</h5>
          <h6>Specialist: {specialist} </h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeDoctor;
