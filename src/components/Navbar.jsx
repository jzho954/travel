import React from 'react'
import "./NavbarStyles.css"
import {Link} from 'react-router-dom'
import {MenuItems} from './MenuItems'
import {Component} from 'react'


class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    handleMenuItemClick = () => {
        this.setState({ clicked: false }); // Close the menu when a menu item is clicked
      };
    render()
    
    
    {

  return (
    <nav className='NavBarItems'>
        <Link to="/" className='navbar-logo'>
            Mongdom
        </Link>

        <div className='menu-icons'onClick={this.handleClick}>
            <i 
            className={this.state.clicked ? "fas fa-times" 
            : "fas fa-bars"}></i>
            
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                    <Link className={item.cName}to={item.url} onClick={this.handleMenuItemClick}>
                    <i className={item.icon}></i>
                    {item.title}
                    </Link>
                </li>      
                )
            }
            )}
             {/* <button>Sign Up</button> */}
            </ul>
    </nav>
  )
}}

export default Navbar