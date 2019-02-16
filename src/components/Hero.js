import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../sass/Hero.css';
import hero from "../assets/hero.svg";

class Hero extends Component {
  render() {

    return (
      <div className="hero">
        <Container>
          <Row>
            <Col sm="6">
            <div className="hero__content">
                <h1 className="text-white">Get timely access to Quality healthcare</h1>
                <p className="text-white">Thousand of people trust on our simple to
                  use healthcare platform to connect with genuine licenced healthcare
                   practitioners from anywhere at anytime.
                </p>
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text"  id="text" placeholder="What is your health concern ?" />
                  </FormGroup>
                  <Button className="btn btn-sm hero__btn">TALK TO AN EXPERT</Button>
                </Form>
                </div>
            </Col>
            <Col sm="6">
              <img src={hero} alt="Hero Doctors" className="img-responsive hero__docs" />
            </Col>

          </Row>

        </Container>

      </div>
    );
  }
}

export default hot(module)(Hero);
