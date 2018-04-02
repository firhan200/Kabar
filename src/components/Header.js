import React from 'react';
import { Link } from 'react-router-dom';
import {
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

class Header extends React.Component {
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
	        <Navbar color="primary" dark expand="md">
	          <NavbarBrand href="/"><img src={ require('./../logo.svg') } /></NavbarBrand>
	          <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="ml-auto" navbar>
	              <NavItem>
	                <Link to='/' className='nav-link'>Home</Link>
	              </NavItem>
	              <NavItem>
	                <Link to='/news/first' className='nav-link'>News</Link>
	              </NavItem>
	            </Nav>
	          </Collapse>
	        </Navbar>
	      </div>
	    );
   }
}

export default Header;