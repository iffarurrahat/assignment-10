import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = props => {
  const { id, name, img, free, details, category } = props.single;
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-5">
      <Card className="service-hover">
        <Card.Img className="service-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>
            <small>Category{category}</small>
          </p>
          <h6>Treatment Free: ৳ {free}</h6>
          <Card.Text>{details.slice(0, 150)}</Card.Text>
          <Link to={`/booking/${id}`}>
            <button className="btn single-ser-btn">More Details</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
