import React, { Component } from 'react'

export default class ApartmentShow extends Component {
  render() {
    let { apartment } = this.props
    return (
      <>
        <h3>This could be your lovely home.</h3>

        {this.props.apartment &&
                
        <div>
          <p>{apartment.street}</p>
          <p>{apartment.city}, {apartment.state}</p>
          <p>The monthly rent for this home is {apartment.price}</p>
          <p>This home has {apartment.bathrooms} bathrooms and {apartment.bedrooms} bedrooms.</p>
          <p>The pets that are allowed in this home are {apartment.pets}.</p>
          <img src={apartment.image} width="200px" />
        </div>}

      </>
    )
  }
}
