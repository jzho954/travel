import React, { Component } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

class Navbar extends Component {
  state = {
    clicked: false,
    dropdownOpen: false,
    timer: null, // Timer for delayed closing of dropdown
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleMenuItemClick = () => {
    this.setState({ clicked: false }); // Close the menu when a menu item is clicked
  };

  handleDropdownMouseEnter = () => {
    clearTimeout(this.state.timer); // Clear any existing timer
    this.setState({ dropdownOpen: true });
  };

  handleDropdownMouseLeave = () => {
    const timer = setTimeout(() => {
      this.setState({ dropdownOpen: false });
    }, 500); // Delayed closing of dropdown after 2 seconds
    this.setState({ timer });
  };

  render() {
    return (
      <nav className='NavBarItems'>
        <Link to="/" className='navbar-logo'>
          Mongdom
        </Link>

        <div className='menu-icons' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url} onClick={this.handleMenuItemClick}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}

          {/* <div className='dropdown-container'>
            <Dropdown
                className='custom-dropdown1'
              show={this.state.dropdownOpen}
              onMouseEnter={this.handleDropdownMouseEnter}
              onMouseLeave={this.handleDropdownMouseLeave}
            >
              <Dropdown.Toggle variant='primary' id='dropdown-basic' className='custom-dropdown-toggle'>
                <i className='fa-solid fa-earth-americas'></i>
              </Dropdown.Toggle>

              <Dropdown.Menu className='text-center custom-dropdown-menu'>
                <Dropdown.Item href='/vietnam'>Vietnam</Dropdown.Item>
                <Dropdown.Item href='/thailand'>Thailand</Dropdown.Item>
                <Dropdown.Item href='/korea'>Korea</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
