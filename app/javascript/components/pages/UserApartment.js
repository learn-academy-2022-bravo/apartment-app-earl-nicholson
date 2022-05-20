import React, { Component } from 'react'
import { CardTitle, Col } from 'reactstrap'
import { NavLink } from "react-router-dom";

export default class ApartmentIndex extends Component {
  render() {
    console.log(this.props.userApartments);
    return (
      <>
      <h3>Your Apartment Listings</h3>

      <Col sm="6">
        {this.props.userApartments && this.props.userApartments.map(apartment => {
        return(
        <NavLink to={`/apartmentshow/${apartment.id}`} key={apartment.id}>
          <CardTitle>
          <h4>{apartment.city}</h4>
              <h4>{apartment.state}</h4>
              <h4>{apartment.price}</h4>
              <img src={apartment.image} width="200px" />
          </CardTitle>
        </NavLink>
                )
              }
            )
          }
      </Col>

      </>
    )
  }
}
