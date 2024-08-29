import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container className="text-center">
      <Row className="my-5">
        <Col>
          <h1 className="display-4 text-primary">Bank of Smiles</h1>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2>Where Your Happiness is Our Interest!</h2>
          <p className="lead">
            We're the only bank that compounds your joy and gives you a reason to smile.
            Our rates are so good, you'll be grinning from ear to ear!
          </p>
          <p className="lead">
            Remember: A penny saved is a penny earned, but a smile shared is happiness returned!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/login">
            <Button variant="primary" size="lg">Start Smiling Now!</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
