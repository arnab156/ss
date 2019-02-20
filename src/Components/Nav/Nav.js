import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./Nav.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });

  }
  render() {
    return (
      <div>
        {/* <div className="footer"> */}
        <div className="footer" onMouseOver={() => this.setState({ collapsed: false })} onMouseOut={() => this.setState({ collapsed: true })}>
        <Navbar color="faded" dark>
          <NavbarBrand href="/" className="mr-auto headFont">Second City Tennis</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="headFont" href="/courts">Find Tennis Courts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="headFont" href="/sponsors">Sponsors & Partners</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="headFont" href="/programs">Progams & Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="headFont" href="/bylaws">SCT By-Laws</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="headFont" href="/social">Instagram</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
      </div>
    );
  }
}