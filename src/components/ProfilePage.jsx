import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProfilePage = () => {
  return (
    <Container className="text-center">
      <Row className="my-5">
        <Col>
          <h1 className="display-4 text-primary">Welcome to Your Smile Account</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Your Smile Balance</Card.Title>
              <Card.Text className="display-4 text-success">1,000,000 😊</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <h3>Quick Actions</h3>
          <Button variant="primary" className="m-2">Deposit Smiles</Button>
          <Button variant="secondary" className="m-2">Withdraw Grins</Button>
          <Button variant="info" className="m-2">Transfer Chuckles</Button>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="mx-auto">
          <h3>Bank of Smiles Fun Facts</h3>
          <ul className="list-unstyled">
            <li>Why did the banker quit his job? He lost interest!</li>
            <li>What's a banker's favorite type of music? Loan-ly Island!</li>
            <li>How do we keep our customers happy? We're always in a good mood!</li>
            <li>Why did the smile go to the bank? To make a de-grin-sit!</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;