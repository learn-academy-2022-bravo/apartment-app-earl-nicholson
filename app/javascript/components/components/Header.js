import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <div className="nav-con">
        <Nav>

        <h1>
          <a href= '/' >Apartment Finder</a>
        </h1>

        <NavItem>
                <a href='/apartmentindex' className="nav-link">List of all of the available Apartments</a>
        </NavItem>

          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }

          {logged_in &&
            <NavItem>
              <a href='/userapartmentindex' className="nav-link">View Your Listings</a>
            </NavItem>
          }

          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>
        
      </div>
    )
  }
}
export default Header