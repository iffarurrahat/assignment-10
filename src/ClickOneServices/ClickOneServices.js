import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const ClickOneServices = () => {
  const { id } = useParams();
  console.log(id);
  const [servicesDetails, setServicesDetails] = useState([]);

  const [singleServices, SetSingleServices] = useState({});

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/iffarurrahat/fake-data/main/clickoneservic.json'
    )
      .then(res => res.json())
      .then(data => setServicesDetails(data.services));
  }, []);

  useEffect(() => {
    const foundServices = servicesDetails.find(services => services.id === id);
    SetSingleServices(foundServices);
  }, [servicesDetails]);

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={singleServices?.img} />
            </Card>
          </Col>
          <Col md={5}>
            <Card style={{ width: '40rem', height: '23rem' }}>
              <Card.Body>
                <Card.Title>{singleServices?.name}</Card.Title>
                <Card.Text>{singleServices?.details}</Card.Text>
                <h6>
                  Treatment Free: <b>৳</b> {singleServices?.free}
                </h6>
                <p>Established: {singleServices?.established}</p>
                <p>
                  <small>Location: {singleServices?.location}</small>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ClickOneServices;
