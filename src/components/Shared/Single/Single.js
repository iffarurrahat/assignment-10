import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Single = props => {
  const { name, img, free, details } = props.homeSingle;
  return (
    <div className="col-lg-3 col-md-6 col-12 mt-5">
      <Card className="service-hover">
        <Card.Img className="service-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h6>Treatment Free: ৳ {free}</h6>
          <Card.Text>{details.slice(0, 145)}</Card.Text>
          <Button className="single-ser-btn">
            <Link
              style={{
                textDecoration: 'none',
                color: '#fff',
              }}
              to="./services"
            >
              More Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Single;
