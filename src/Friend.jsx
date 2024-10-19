import React from 'react'

export default function Friend({friend}) {
    const {name, email, phone, address} = friend;
    const { street, city, state, zip } = address || {};
  return (
    <div className='box'>
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <h4>Phone: {phone}</h4>
      <ul>
        <li>Street: {street}</li>
        <li>City: {city}</li>
        <li>State: {state}</li>
        <li>ZIP: {zip}</li>
      </ul>

    </div>
  )
}
