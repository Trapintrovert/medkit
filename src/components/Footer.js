import React, { Component } from "react";
import { hot } from "react-hot-loader";
import '../sass/Footer.css';
import { Container, Row, Col } from 'reactstrap';
import facebook from "../assets/facebook.svg";
import twitter from "../assets/Twitter.svg";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import logo from "../assets/logo.png";


class Footer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="footer">
        <Container>
          <Row>
            <Col xs={{size:12}} md={{size:6}} lg={{size:3}}>
              <h5 className="text-center">Useful Link</h5>
              <hr/>
              <ul className="list-1">
                <li>About us </li>
                <li>Blog </li>
                <li>FAQ </li>
                <li>Careers</li>
              </ul>
            </Col>
            <Col xs={{size:12}} md={{size:6}} lg={{size:3}}>
              <h5 className="text-center">For Specialists</h5>
              <hr/>
              <ul className="list-1">
                <li>Get Listed </li>
                <li>Verification Policy </li>
                <li>Customer Support </li>
              </ul>
            </Col>
            <Col xs={{size:12}} md={{size:6}} lg={{size:3}}>
              <h5 className="text-center">Quick Links</h5>
              <hr/>
              <ul className="list-1">
                <li>Privacy Policy </li>
                <li>Terms & Conditions</li>
                <li>App Download </li>
              </ul>
            </Col>
            <Col xs={{size:12}} md={{size:6}} lg={{size:3}}>
              <h5 className="text-center">Contact Us</h5>
              <hr/>
              <ul className="list-1">
                <li>+234 (0) 812 345 6789 </li>
                <li>care@lacidemkit.com </li>
              </ul>
              <div className="list-2">
                <ul>
                  <li><a href="#"> <img src={facebook} alt="connect with us on facebook" /> </a></li>
                  <li><a href="#"><img src={whatsapp} alt="connect with us on whatsapp" /> </a> </li>
                  <li><a href="#"><img src={twitter} alt="connect with us on Twitter" /> </a></li>
                  <li><a href="#"><img src={instagram} alt="connect with us on instagram" /> </a></li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="6" lg="8" className="copyright">
              <img src={logo} alt="Footer Logo"/>
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="12" className="copyright">
              <p className="text-center">
                Copyright © 2019, LacidemKit. All right reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default hot(module)(Footer);
