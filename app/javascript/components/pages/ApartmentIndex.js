import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from "react-router-dom";

export default class ApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments);
    return (
      <>
      <h3>View a list of our available apartments</h3>

      <Col sm="6">
        {this.props.apartments && this.props.apartments.map(apartment => {
        return(
        <NavLink to={`/apartmentshow/${apartment.id}`} key={apartment.id}>
          <CardTitle>
              <h4>{apartment.city}</h4>
              <h4>{apartment.state}</h4>
              <h4>{apartment.image}</h4>
              <h4>{apartment.price}</h4>
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
