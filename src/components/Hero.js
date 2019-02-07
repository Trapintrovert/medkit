import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../sass/Hero.css';

class Hero extends Component {
  render() {

    return (
      <Container fluid className="hero">
        <Row>
        <div className="hero__content">
          <Col sm={{ size: 'auto'}} md={10} xs={'auto'} lg={'auto'}>
              <h1 className="text-white">Get timely access to Quality healthcare</h1>
              <p className="text-white">Thousand of people trust on our simple to
                use healthcare platform to connect with genuine licenced healthcare
                 practitioners from anywhere at anytime.
              </p>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text"  id="text" placeholder="What is your health concern ?" />
                </FormGroup>
                <Button className="hero__btn">TALK TO AN EXPERT</Button>
              </Form>
          </Col>
          </div>
        </Row>

      </Container>
    );
  }
}

export default hot(module)(Hero);
