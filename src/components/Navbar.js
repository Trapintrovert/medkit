import React, { Component } from "react";
import { hot } from "react-hot-loader";
import logo from "../assets/logo.png";
import '../sass/Navbar.css';

import {
  Col,
  Row,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class NavbarHeader extends Component {
  constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }
 toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <div className="logo">
          <NavbarBrand href="/">
            <img src={logo} className="logo" alt="Medkit Logo"/>
          </NavbarBrand>
        </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Book Checkup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Chat a Specialist</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Order Drug</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Book Appointment
                  </DropdownItem>
                  <DropdownItem>
                    Chat a Specialist
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Order Medicine
                  </DropdownItem>
                  <DropdownItem>
                    Book Test/Checkup
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="sign__up">
                <NavLink href="#">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default hot(module)(NavbarHeader);
