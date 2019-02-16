import React, {Component} from "react";
import { hot } from "react-hot-loader";
import NavbarHeader from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../sass/Layout.css';
import doctors from "../assets/doctors.svg";
import image01 from "../assets/image01.svg";
import image02 from "../assets/image02.svg";
import image03 from "../assets/image03.svg";
import image04 from "../assets/image04.svg";
import image05 from "../assets/image05.svg";
import image06 from "../assets/image06.svg";
import avatar01 from "../assets/avatar01.svg";
import avatar02 from "../assets/avatar02.svg";
import avatar03 from "../assets/avatar03.svg";
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

class Layout extends Component{
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div>
        <NavbarHeader />
        <Hero />
        <div className="layout-col-1">
          <Container >
              <Row>
                <Col md={{ size: 8, offset: 2 }}>
                  <h1 className="text-center ">What is Lacidem Kit</h1>
                  <hr/>
                  <p className="text-center text-justify">
                  Lacidem Kit is an all in one health care delivery platform that makes it easy for you to access timely
                   and quality health care products and services from the comfort of your home or office.
                  </p>
                </Col>
              </Row>
            <Row>
              <Col sm="12" md="8" lg="4" >
              <Card className="layout-card ">
                <CardBody>
                  <CardTitle className="text-center">Book Full Check Up</CardTitle>
                  <CardText className="text-center">With LacidemKit you can book for full body checkup from he convinient of your location</CardText>
                  <Button className="text-center">BOOK</Button>
                </CardBody>
              </Card>
              </Col>
              <Col sm="12" md="8" lg="4" >
              <Card className="layout-card">
                <CardBody>
                  <CardTitle className="text-center">Connect with Specialists</CardTitle>
                  <CardText className="text-center">With LacidemKit you can book for full body checkup from he convinient of your location</CardText>
                  <Button className="text-center">TALK TO DOCTOR</Button>
                </CardBody>
              </Card>
              </Col>
              <Col sm="12" md="8" lg="4" >
              <Card className="layout-card">
                <CardBody>
                  <CardTitle className="text-center">Order Medicine</CardTitle>
                  <CardText className="text-center">With LacidemKit you can book for full body checkup from he convinient of your location</CardText>
                  <Button className="text-center">ORDER MEDICINE</Button>
                </CardBody>
              </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="layout-col-2">
          <Container fluid >
            <Row>
              <Col>
                <img src={doctors} alt="doctors" className="img-responsive" />
              </Col>
              <Col >
                <h3 className="text-center text-justify"> Why is LacidemKit your best bet? </h3>
                <hr />
                  <ul class="list-group">
                    <li>Meticulously verified and authenticate specialist</li>
                    <li>Order product & services anywhere, anytime </li>
                    <li>Get free health advice</li>
                    <li>Quality marketplace for your health product & Services</li>
                    <li>Secure Platform </li>
                  </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="layout-col-3">
          <Container>
            <Row>
              <Col lg="6" className="spec">
                <h3 className="text-center text-justify"> Meet our Specialists </h3>
                <hr />
                <ul class="list-group offset-3">
                  <li>Well Verified Specialist</li>
                  <li>Always available to help </li>
                  <li>Carefully Sekected Health Specialist </li>
                  <li>Genuinely licenced Specialist</li>
                </ul>
                <Button className="text-center offset-4">FIND A DOCTOR</Button>
              </Col >
                <Col sm="12" lg="3" className="spec-name">
                  <img src={image02} alt="doctors" className="img-fluid" />
                  <h4>Olaoluwa Ariyo</h4>
                  <p>Medical Doctor</p>
                </Col>
                <Col sm="12" lg="3" className="spec-name">
                  <img src={image01} alt="doctors" className="img-fluid" />
                  <h4>Obi Emmanuella</h4>
                  <p>Lab Technologist</p>
                </Col>
            </Row>
          </Container>
        </div>
        <div className="layout-col-4">
          <Container>
            <Row>
              <Col sm="12">
                <h2 className="text-center">Top Offers</h2>
                <hr/>
                <p className="text-center">Enjoy our carefully discounted offer from our health product and service provider tailored for you to stay healthy.</p>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6" sm="12" >
                <Card className="card-info">
                  <CardImg top width="100%" src={image06} alt="Old People Health Checkup" />
                  <span> OFFER </span>
                  <CardBody>
                    <CardTitle> Old People Health Checkup</CardTitle>
                    <CardText> Starting at </CardText>
                    <p className="float-left amount">N7000 </p>
                    <p className="float-right buy-now"><a href="#">Buy Now<strong> &gt;</strong></a></p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="12" >
                <Card className="card-info">
                  <CardImg top width="100%" src={image05} alt="Old People Health Checkup" />
                  <span> OFFER </span>
                  <CardBody>
                    <CardTitle>Chat with a doctor for a session</CardTitle>
                    <CardText>Starting at </CardText>
                    <p className="float-left amount">FREE </p>
                    <p className="float-right buy-now"><a href="#">Chat Now<strong> &gt;</strong></a></p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="12">
                <Card className="card-info">
                  <CardImg top width="100%" src={image04} alt="Old People Health Checkup" />
                  <span> OFFER </span>
                  <CardBody>
                    <CardTitle>Order prescription medicine</CardTitle>
                    <CardText> Get </CardText>
                    <p className="float-left amount">30% OFF </p>
                    <p className="float-right buy-now"><a href="#">Order Now<strong> &gt;</strong></a></p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="12">
              <Card className="card-info">
                <CardImg top width="100%" src={image03} alt="Old People Health Checkup" />
                <span> OFFER </span>
                <CardBody>
                  <CardTitle>Chat with a doctor for a session</CardTitle>
                  <CardText> Starting at </CardText>
                  <p className="float-left amount">20% OFF </p>
                  <p className="float-right buy-now"><a href="#">Book Now<strong> &gt;</strong></a></p>
                </CardBody>
              </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="layout-col-5">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="text-center">What Our Users Say<br/> about Lacidem<span>Kit</span> </h2>
              <hr />
            </Col>
          </Row>
          <Row className="user">
            <Col sm="12" md="8" lg="4">
              <Card className="user-card col-md-10">
                <CardImg src={avatar03} alt="User Testimonial" />
                  <CardBody>
                  <h5>Abimbola Idowu</h5>
                  <h6>Musical Artiste</h6>
                  <CardText>Lorem ipsum dolor sit amet, exerci discere dignissim cum et, tale verterem te vel. Usu te facete. </CardText>
                  </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="8" lg="4">
              <Card className="user-card col-md-10">
                <CardImg src={avatar02} alt="User Testimonial" />
                <CardBody>
                <h5>Kelechi Ezechukwu</h5>
                <h6>Lecturer</h6>
                  <CardText>Lorem ipsum dolor sit amet, exerci discere dignissim cum et, tale verterem te vel. Usu te facete. </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="8" lg="4">
              <Card className="user-card col-md-10">
                <CardImg src={avatar01} alt="User Testimonial" />
                <CardBody>
                <h5>Tijani Yusuf</h5>
                <h6>Web Developer</h6>
                  <CardText>Lorem ipsum dolor sit amet, exerci discere dignissim cum et, tale verterem te vel. Usu te facete. </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 2, offset: 8 }} md={{ size: 2, offset: 10 }} lg={{ size: 2, offset: 10 }} className="arrow">
            <a href="#">
              <span className="arrow-right">
                &rarr;
              </span>
            </a>
            <a href="#">
              <span className="arrow-left">
                &larr;
              </span>
            </a>
            </Col>
          </Row>
        </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(Layout);
