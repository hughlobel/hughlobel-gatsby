import React from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import config from '../config/config'
const AppNavbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      isOpen: false 
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
    <div className='appNavBar main-navigation'>
    <Navbar expand="md">
      <Container fluid >
    <NavbarBrand><Link to="/">{config.siteTitle} | <span>{config.siteSubtitle}</span></Link></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar >
          <Nav className="" navbar >
            <NavItem>
              <Link to="/projects">
                <NavLink>Projects</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about">
                <NavLink>About</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/resume">
                <NavLink>Resume</NavLink>
              </Link>
            </NavItem >
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </div>
    );
  }
}

export default AppNavbar
